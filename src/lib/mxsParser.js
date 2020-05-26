"use strict";
const crypto = require('crypto');
//-----------------------------------------------------------------------------------
const nearley = require('nearley');
const grammar = require('./grammar.js');
const mxLexer = require('./mooTokenize.js');
//-----------------------------------------------------------------------------------

//We want to find the location of substr within src.

function trimString(src, substr) {
	var start = src.indexOf(substr);
	var end = start + substr.length;
	return src.substring(0, start - 1) + src.substring(end);
}

class mxsParseSource {
	constructor(source) {
		this._declareParser();
		this.__source = source || '';
		this.hash = mxsParseSource.HashSource(this.__source);
		this.ParseSource();
	}
	/** Declare a new parser isntance */
	_declareParser() {
		this.parserInstance = new nearley.Parser(
			nearley.Grammar.fromCompiled(grammar),
			{
				keepHistory: true,
				// lexer: mxLexer
			});
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
	/** Get the parsed AST, if any */
	get parsedAST() { return this.parserInstance.results[0]; }
	/** Reset the parser * */
	reset() { this._declareParser(); }
	/**
	 * Tokenize mxs string
	 * @param {moo.lexer} lexer
	 * @param {string} source
	 */
	TokenizeSource(filter) {

		if (typeof filter === Array) {
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
		// this.parserInstance.feed('');
		// this.__parserState = this.parserInstance.save();
		try {
			// console.log('parsing!');
			this.parserInstance.feed(this.__source);
		} catch (err) {
			// console.log('-->error REPARSE');
			// this.next = this.__source;
			this.__setStore();
			// this.parserInstance.restore(this.__parserState);
			this.__parseWhitErrors();
			return;
			// throw err;
		}
		// this.__parserState = this.parserInstance.save();
	}
	/** feed Stream to active parser */
	feed(str) {
		this.__parserState = this.parserInstance.save();
		try {
			this.parserInstance.feed(str);
		} catch (err) {
			err.expected = this._PossibleTokens();
			this.parserInstance.restore(this.__parserState);
			throw err;
		}
	}
	/**
	 *	Store values for error checking
	 */
	__setStore() {
		this.pass = [];

		this.next = [];
		this.remain = this.__source;

		this.badTokens = [];
		this.errorReport = [];
		this.Offset = 0;
		this.counter = 20;
	}
	/**
	 * Parser with error recovery
	 */
	__parseWhitErrors() {
		let proccess = this.__source;
		let remain = this.__source;

		let skipToken = 0;
		let srcOffset = 0;
		// let counter = 25;
		// let _test = this.__source;
		// reset the parser
		this.parserInstance.restore(this.__parserState);
		// save the parser state, locally
		let state = this.parserInstance.save();

		let badTokens = [];
		let errorReport = [];

		// let  execute = true;

		let test = () => {
			// do {
			try {
				// console.log('-->ATTEMP');
				this.parserInstance.feed(proccess);
				// console.log('passed');
				if (skipToken !== 0) {
					remain = remain.slice(skipToken);
				} else {
					remain = remain.replace(proccess, '');
				}
				proccess = remain;
				// console.log('REMAIN: '+remain);
				// save the parser
				state = this.parserInstance.save();
			} catch (err) {
				// console.log(err.name);
				// console.log('Error: '+ err.token.text);
				// token Info
				var errToken = err.token;
				var currPos  = errToken.offset;
				var nextPos  = errToken.offset + (errToken.text.length || 0);
				srcOffset    = this.__source.length - proccess.length + currPos;
				// collect the token
				let cloneToken = {...errToken};
				cloneToken.offset = srcOffset;
				delete cloneToken.line;
				delete cloneToken.col;
				badTokens.push(cloneToken);
				// errorReport.push({token:cloneToken, expected:this._PossibleTokens()});
				// reached the last token, and is bad
				if (!this.parserInstance.lexer.next()) {
					console.log('--------EOF--------');
					// break;
					this.parserInstance.restore(state);
					return;
				}
				// throw err;
				// skip the bad token, reduce the remain
				// split proccess, push to remain
				// remain = proccess.slice(nextPos);
				// bad token
				skipToken = nextPos;
				// skipToken = proccess[currPos];
				// console.log('Error: '+ skipToken);
				// parse again the good lines
				proccess = proccess.slice(0, currPos);
				// console.log('PASSED:');
				// console.log(proccess);
				// console.log('REMAIN:');
				// console.log(remain);
				// restore the parser
				this.parserInstance.restore(state);
				// return;
				// execute = true;
			}
			// Passed, save the parser state & feed the rest
			// state = this.parserInstance.save();
			// proccess = remain;
			// console.log('COUNTER: '+counter);
			// if (counter-- <= 0) {return;}
			// repeat
			if (remain.length > 0) {test();}
		// } while (remain.length > 0);
		};
		//--------------------------------
		test();
		console.log('PASSED!!!');
		console.log(this.parserInstance.results[0]);

	}
	/**
	 * List of possible tokens to overcome the error
	 */
	_PossibleTokens() {
		var possibleTokens = [];
		var lastColumnIndex = this.parserInstance.table.length - 2;
		var lastColumn = this.parserInstance.table[lastColumnIndex];
		var expectantStates = lastColumn.states
			.filter(function (state) {
				var nextSymbol = state.rule.symbols[state.dot];
				return nextSymbol && typeof nextSymbol !== "string";
			});
		// Display a "state stack" for each expectant state
		// - which shows you how this state came to be, step by step.
		// If there is more than one derivation, we only display the first one.
		var stateStacks = expectantStates
			.map(function (state) {
				return this.parserInstance.buildFirstStateStack(state, []);
			}, this);
		// Display each state that is expecting a terminal symbol next.
		stateStacks.forEach(function (stateStack) {
			var state = stateStack[0];
			var nextSymbol = state.rule.symbols[state.dot];

			possibleTokens.push(nextSymbol);
		}, this);
		return possibleTokens;
	}
	/** MD5 hash */
	static HashSource(source) {
		return crypto.createHash('md5').update(source).digest('hex');
	}
}
//-----------------------------------------------------------------------------------
module.exports = mxsParseSource;