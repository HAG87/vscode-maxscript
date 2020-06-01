"use strict";
// const crypto = require('crypto');
import * as nCrypto from 'crypto';
//-----------------------------------------------------------------------------------
const nearley = require('nearley');
// import * as nearley from 'nearley';
const grammar = require('./lib/grammar.js');
const mxLexer = require('./lib/mooTokenize.js');
import { ParserError } from "./mxsDiagnostics";
//-----------------------------------------------------------------------------------
class Extendedparser extends nearley.Parser {
	[x: string]: any;
	constructor(grammar: nearley.Grammar, options?: nearley.ParserOptions) {
		// 'Error' breaks prototype chain here
		super(grammar, options);
		// restore prototype chain
		const actualProto = new.target.prototype;
		Object.setPrototypeOf(this, actualProto);
	  }
	PossibleTokens() {
		var possibleTokens: any[] = [];
		var lastColumnIndex = this.table.length - 2;
		var lastColumn = this.table[lastColumnIndex];
		var expectantStates = lastColumn.states
			.filter(function (state: { rule: { symbols: { [x: string]: any } }; dot: string | number }) {
				var nextSymbol = state.rule.symbols[state.dot];
				return nextSymbol && typeof nextSymbol !== "string";
			});
		// Display a "state stack" for each expectant state
		// - which shows you how this state came to be, step by step.
		// If there is more than one derivation, we only display the first one.
		var stateStacks = expectantStates
			.map((state: any) => {
				return this.buildFirstStateStack(state, []);
			}, this);
		// Display each state that is expecting a terminal symbol next.
		stateStacks.forEach(function (stateStack: any[]) {
			var state = stateStack[0];
			var nextSymbol = state.rule.symbols[state.dot];

			possibleTokens.push(nextSymbol);
		}, this);
		return possibleTokens;
	}
}

export class mxsParseSource {

	// fields
	parserInstance!: Extendedparser;
	hash: string;
	__source: string;
	__parserState: any;
	__parsedCST: any;

	// constructor
	constructor(source: string | undefined) {
		this._declareParser();
		this.__source = source || '';
		this.hash = mxsParseSource.HashSource(this.__source);
		this.ParseSource();
	}

	/** Declare a new parser isntance */
	_declareParser() {
		this.parserInstance = new Extendedparser(
			nearley.Grammar.fromCompiled(grammar));
		// this.parserInstance.feed('');
		this.__parserState = this.parserInstance.save();
	}
	/** get the source Stream */
	get source() { return this.__source; }
	/**	Set new source, and re-parse */
	set source(newSource) {
		this.__source = newSource;
		this.reset();
		this.hash = mxsParseSource.HashSource(this.__source);
		this.ParseSource();
	}
	/** Get the parsed CST, if any */
	get parsedCST() {
		return this.__parsedCST || this.parserInstance.results[0];
		// return this.parserInstance.results[0];
	}
	/** Reset the parser * */
	reset() { this._declareParser(); }
	/**
	 * Tokenize mxs string
	 * @param {moo.lexer} lexer
	 * @param {string} source
	 */
	TokenizeSource(filter?: string[]) {

		if (filter instanceof Array) {
			mxLexer.next = (next => () => {
				let tok;
				// IGNORING COMMENTS....
				while ((tok = next.call(mxLexer)) && (filter.includes)) /* empty statement */;
				return tok;
			})(mxLexer.next);
		}
		//if (!source) {return null;}
		// feed the tokenizer
		mxLexer.reset(this.__source);

		let token;
		let toks = [];

		while ((token = mxLexer.next())) {
			// if ( token.type != "comment_BLK" && token.type != "comment_SL" ) { toks.push(token); }
			//TODO: Catch tokenizer errors.
			toks.push(token);
		}
		return toks;
	}
	/**
	 *
	 * @param {String} source String to parse
	 * @param {nearley.parser} parserInstance Instance of initialized parser
	 * @param {Integer} tree Index of the parsed tree I want in return, results are multiple when the parser finds and ambiguity
	 */
	ParseSource() {
		// Set a clean state
		this.__parserState = this.parserInstance.save();

		try {
			this.parserInstance.feed(this.__source);
			this.__parsedCST = this.parserInstance.results[0];
		} catch (err) {
			this.parserInstance.restore(this.__parserState);
			this.__parseWhitErrors();
			// throw err;
		}
		return;
		// this.__parserState = this.parserInstance.save();
	}
	/** feed Stream to active parser */
	feed(str: string) {
		try {
			this.parserInstance.feed(str);
		} catch (err) {
			err.details = [{ token: err.token, expected: this.parserInstance.PossibleTokens() }];
			this.parserInstance.restore(this.__parserState);
			throw err;
		}
		this.__parserState = this.parserInstance.save();
		this.__parsedCST = this.parserInstance.results[0];
	}
	/**
	 * Parser with error recovery
	 */
	__parseWhitErrors() {
		// console.log( 'ERRORS!');
		//-------------------------------------------------
		// NEW METHOD TOKENIZING THE INPUT, COULD BE A WAY TO FEED TOKENS TO THE PARSER?
		let src = this.TokenizeSource();
		let state = this.parserInstance.save();

		let badTokens: any[] = [];
		let errorReport: any[] = [];

		let next = 0;
		let remain = src.length - 1;
		let parsings = () => {
			// for (var tok = 0; tok < src.length; tok++) {
			// console.log(src[tok]);
			try {
				// this.parserInstance.feed(src[tok].text);
				this.parserInstance.feed(src[next].text);
				// console.log(src[next].text);
			} catch (err) {
				// catch non parsing related errors.
				if (!err.token) { throw err; }
				// console.log(src[next]);
				badTokens.push(src[next]);
				errorReport.push({ token: src[next], expected: this.parserInstance.PossibleTokens() });
				this.parserInstance.restore(state);
				// continue;
			}
			state = this.parserInstance.save();
			// console.log(next);
			if (next < remain) {
				next += 1;
				parsings();
			}
		}; parsings();
		// return values
		let newErr;
		if (this.parserInstance.results[0]) {
			// console.log(this.parserInstance.results[0]);
			this.__parsedCST = this.parserInstance.results[0];
			// parsing passed
			newErr = new ParserError('Parser finished with errors.');
			newErr.name = 'ERR_RECOVER';
			newErr.tokens = badTokens;
			newErr.details = errorReport;
			// newErr.parsedCST = this.parserInstance.results[0];
		} else {
			// console.log('unrecoverable error');
			newErr = new ParserError('Parser failed. unrecoverable errors.');
			newErr.name = 'ERR_FATAL';
			newErr.tokens = badTokens;
			newErr.details = errorReport;
			// newErr = lastError;
			// newErr.name = 'ERR_FATAL';
			// newErr.expected = this._PossibleTokens();
			// newErr.tokens = badTokens;
			// newErr.details = errorReport;
		}
		// this.badTokens = [];
		// this.errorReport = [];
		// exit with error
		throw newErr;
	}
	/** MD5 hash */
	static HashSource(source: nCrypto.BinaryLike): string {
		return nCrypto.createHash('md5').update(source).digest('hex');
	}
}