"use strict";
import * as nCrypto from 'crypto';
//-----------------------------------------------------------------------------------
import * as nearley from 'nearley';
import grammar = require('./lib/grammar.js');
import mxLexer = require('./lib/mooTokenize.js');
import { ParserError } from "./mxsDiagnostics";
//-----------------------------------------------------------------------------------
function replaceWithWS(str: string) {
	let ref = [...str];
	return ref.reduce((acc,next) => { return acc + ' ';}, '');
}
/**
 * main class to manage the parser. Implements 'nearley' parser and 'moo' tokenizer
 */
export class mxsParseSource {
	// fields
	parserInstance!: nearley.Parser;
	hash: string;
	private __source: string;
	private __parserState: any;
	private __parsedCST: any;
	// constructor
	constructor(source: string | undefined) {
		this._declareParser();
		this.__source = source || '';
		this.hash = mxsParseSource.HashSource(this.__source);
		this.ParseSource();
	}
	/** Declare a new parser instance */
	private _declareParser() {
		this.parserInstance = new nearley.Parser(
			nearley.Grammar.fromCompiled(grammar),
			{
				keepHistory: true
			});
		// this.parserInstance.feed('');
		// this.__parserState = this.parserInstance.save();
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
		return this.__parsedCST || this.parserInstance.results[0] || [];
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
			//TODO: Catch tokenizer errors.
			// if ( token.type != "error") { toks.push(token); }
			// if ( token.type != "comment_BLK" && token.type != "comment_SL" ) { toks.push(token); }
			toks.push(token);
		}
		return toks;
	}
	/** feed Stream to active parser */
	feed(str: string) {
		try {
			this.parserInstance.feed(str);
		} catch (err) {
			err.details = [{ token: err.token, expected: this.PossibleTokens() }];
			this.parserInstance.restore(this.__parserState);
			throw err;
		}
		this.__parserState = this.parserInstance.save();
		this.__parsedCST = this.parserInstance.results[0];
	}
	/**
	 *
	 * @param {String} source String to parse
	 * @param {nearley.parser} parserInstance Instance of initialized parser
	 * @param {Integer} tree Index of the parsed tree I want in return, results are multiple when the parser finds and ambiguity
	 */
	ParseSource() {
		// Set a clean state - DISABLED FOR WORKAROUND OF PROBLEM -> ERROR RECOVERY DECLARES A CLEAN PARSER INSTANCE
		// this.__parserState = this.parserInstance.save();
		try {
			this.parserInstance.feed(this.__source);
			// console.log('PARSE TREES: '+ this.parserInstance.results.length);
			// this.__parserState = this.parserInstance.save();
			this.__parsedCST = this.parserInstance.results[0];
		} catch (err) {
			// this.parserInstance.restore(this.__parserState);
			let theErr = this.parseWithErrors();
			throw theErr;
		}
		// this.__parserState = this.parserInstance.save();
	}
	/**
	 * Parser with error recovery
	 */
	private parseWithErrors() {
		//-------------------------------------------------
		// NEW METHOD TOKENIZING THE INPUT, COULD BE A WAY TO FEED TOKENS TO THE PARSER?
		// console.log('parser - error');
		// reset the parser
		this.reset();

		let src = this.TokenizeSource();
		let state = this.parserInstance.save();

		let badTokens: any[] = [];
		let errorReport: any[] = [];

		let next = 0;
		let total = src.length - 1;

		// for (var next = 0; next < total; next++) {
		while (next <= total) {
			try {
				this.parserInstance.feed(src[next].toString());
				// this.parserInstance.feed(src[next].text);
			} catch (err) {
				// catch non parsing related errors.
				if (!err.token) { throw err; }
				// console.log(err.token);
				badTokens.push(src[next]);
				/* DISABLED FEATURE - NEEDS OPTIMIZATION */
				// errorReport.push({token:src[next], alternatives: this.PossibleTokens() });
				let filler = replaceWithWS(err.token.text);
				err.token.text = filler;
				err.token.value = filler;
				err.token.type = "ws";
				// src.splice(next, 1, err.token);
				src[next] = err.token;
				// console.log(src[next]);
				// console.log(badTokens);
				next--;
				this.parserInstance.restore(state);
			}
			state = this.parserInstance.save();
			next++;
		}
		// console.log('parser - error - ended');
		// console.log(this.parserInstance.results.length);
		let reportSuccess = () => {
			// console.log('parser report! - OK');
			let newErr = new ParserError('Parser failed. Partial parsings has been recovered.');
			newErr.name = 'ERR_RECOVER';
			newErr.recoverable = true;
			newErr.tokens = badTokens;
			newErr.details = errorReport;
			return newErr;
		};
		let reportFailure = () => {
			// console.log('parser report! - BAD ');
			let newErr = new ParserError('Parser failed. Unrecoverable errors.');
			newErr.name = 'ERR_FATAL';
			newErr.recoverable = false;
			newErr.tokens = badTokens;
			newErr.details = errorReport;
			return newErr;
		};
		// SET CST RESULT...
		this.__parsedCST = this.parserInstance.results[0] || [];
		// REPORT / THROW THE ERROR
		return this.parserInstance.results[0] ? reportSuccess() : reportFailure();
		// throw this.parserInstance.results[0] ? reportSuccess() : reportFailure();
	}
	/**
	 * UNFINISHED: ASYNC Parser 
	 */
	async ParseSourceAsync() {
		// Set a clean state
		this.__parserState = this.parserInstance.save();
		try {
			this.parserInstance.feed(this.__source);
			this.__parsedCST = this.parserInstance.results[0];
			return;
		} catch (err) {
			this.parserInstance.restore(this.__parserState);

			this.parseWithErrorsAsync()
				.then((response) => {
					throw response;
				});
		}
		// this.__parserState = this.parserInstance.save();
	}
	/**
	 * UNFINISHED: ASYNC Error recovery
	 */
	private parseWithErrorsAsync():Promise<ParserError> {
		// reset the parser
		this.reset();
		let src = this.TokenizeSource();
		let state = this.parserInstance.save();

		let badTokens: any[] = [];
		let errorReport: any[] = [];

		let total = src.length - 1;

		let reportSuccess = () => {
			// console.log('parser report! - OK');
			let newErr = new ParserError('Parser failed. Partial parsings has been recovered.');
			newErr.name = 'ERR_RECOVER';
			newErr.recoverable = true;
			newErr.tokens = badTokens;
			newErr.details = errorReport;
			return newErr;
		};
		let reportFailure = () => {
			// console.log('parser report! - BAD ');
			let newErr = new ParserError('Parser failed. Unrecoverable errors.');
			newErr.name = 'ERR_FATAL';
			newErr.recoverable = false;
			newErr.tokens = badTokens;
			newErr.details = errorReport;
			return newErr;
		};
		// report?:{tokens: any[]; details:{token: import("moo").Token[]; alvernatives: any[]}[]}
		let promise = new Promise((resolve, reject) => {
			let parsings = (src: import("moo").Token[], next: number, total: number ): any => {
				try {
					this.parserInstance.feed(src[next].text);
				} catch (err) {
					// catch non parsing related errors.
					if (!err.token) { reject(err); }
					badTokens.push(src[next]);
					errorReport.push({token:src[next], alternatives: this.PossibleTokens() });
					let filler = replaceWithWS(err.token.text);
					err.token.text = filler;
					err.token.value = filler;
					err.token.type = "ws";
					// src.splice(next, 1, err.token);
					src[next] = err.token;
					next -= 1;
					this.parserInstance.restore(state);
				}
				state = this.parserInstance.save();

				if (next === total) {
					// console.log('parser ended!');
					resolve();
				} else {
					return setImmediate( () => parsings(src, next + 1, total) );
				}
			};
			parsings(src, 0, total);
		});
		return new Promise((resolve, reject) => {
			promise.then( () => {
				this.__parsedCST = this.parserInstance.results[0] || [];
				// console.log('parser waited!');
				if (this.parserInstance.results[0]) {
					resolve(reportSuccess());
				} else {
					resolve(reportFailure());
				}
			}, (err) => {
				reject(err);
			});
		});
	}
	private PossibleTokens() {
		var possibleTokens: any[] = [];
		var lastColumnIndex = this.parserInstance.table.length - 2;
		var lastColumn = this.parserInstance.table[lastColumnIndex];
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
				return this.parserInstance.buildFirstStateStack(state, []);
			});
		// Display each state that is expecting a terminal symbol next.
		stateStacks.forEach(function (stateStack: any[]) {
			var state = stateStack[0];
			var nextSymbol = state.rule.symbols[state.dot];

			possibleTokens.push(nextSymbol);
		}, this);
		return possibleTokens;
	}
	/** MD5 hash */
	static HashSource(source: nCrypto.BinaryLike): string {
		return nCrypto.createHash('md5').update(source).digest('hex');
	}
}