"use strict";
const crypto = require('crypto');
//-----------------------------------------------------------------------------------
const nearley = require('nearley');
const grammar = require('./grammar.js');
const mxLexer = require('./mooTokenize.js');
//-----------------------------------------------------------------------------------
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
	/** Get the parsed AST, if any */
	get parsedAST() {
		return this.__parsedAST || this.parserInstance.results[0];
		// return this.parserInstance.results[0];
	}
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
		this.__parserState = this.parserInstance.save();

		try {
			this.parserInstance.feed(this.__source);
			this.__parsedAST = this.parserInstance.results[0];
		} catch (err) {
			this.parserInstance.restore(this.__parserState);
			this.__parseWhitErrors();
			// throw err;
		}
		return;
		// this.__parserState = this.parserInstance.save();
	}
	/** feed Stream to active parser */
	feed(str) {
		try {
			this.parserInstance.feed(str);
		} catch (err) {
			err.details = [{ token: err.token, expected: this._PossibleTokens() }];
			this.parserInstance.restore(this.__parserState);
			throw err;
		}
		this.__parserState = this.parserInstance.save();
		this.__parsedAST = this.parserInstance.results[0];
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

		let badTokens = [];
		let errorReport = [];

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
				errorReport.push({ token: src[next], expected: this._PossibleTokens() });
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
		//-------------------------------------------------
		/* DEPRECATED METHOD
		// recursion storage
		let proccess = this.__source;
		let remain = this.__source;
		let skipToken = 0;
		let srcOffset = 0;
		// reset the parser
		// this.parserInstance.restore(this.__parserState);
		// save the parser state, locally
		let state = this.parserInstance.save();
		// error
		let badTokens = [];
		let errorReport = [];
		let lastError;
		// recursion
		let test = () => {
			// do {
			try {

				this.parserInstance.feed(proccess);
				// console.log(proccess);
				// reduce remain
				if (skipToken !== 0) {
					remain = remain.slice(skipToken);
				} else {
					remain = remain.replace(proccess, '');
				}
				console.log(remain);

				// push next chunk
				proccess = remain;
				// save the parser
				state = this.parserInstance.save();
			} catch (err) {
				console.log('ERROR: ' + err.token.text);
				// return last error
				lastError = err;
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
				errorReport.push({token:cloneToken, expected:this._PossibleTokens()});
				// reached the last token, and is bad
				if (!this.parserInstance.lexer.next()) {
					console.log('--------EOF--------');
					// return last error
					// lastError = err;
					// restore the parser
					this.parserInstance.restore(state);
					// break;
					return;
				}
				// skip the bad token, reduce the remain // split proccess, push to remain
				skipToken = nextPos;
				// parse again the good lines
				proccess = proccess.slice(0, currPos);
				// restore the parser
				this.parserInstance.restore(state);
			}
			if (remain.length > 0) {test();}
		// } while (remain.length > 0);
		}; test();
		*/
		// console.log('PASSED!!!');
		// return values
		let newErr;
		if (this.parserInstance.results[0]) {
			// console.log(this.parserInstance.results[0]);
			this.__parsedAST = this.parserInstance.results[0];
			// parsing passed
			newErr = new Error('Parser finished with errors.');
			newErr.name = 'ERR_RECOVER';
			newErr.tokens = badTokens;
			newErr.details = errorReport;
			// newErr.parsedAST = this.parserInstance.results[0];
		} else {
			// console.log('unrecoverable error');
			newErr = new Error('Parser failed. unrecoverable errors.');
			newErr.name = 'ERR_FATAL';
			newErr.tokens = badTokens;
			newErr.details = errorReport;
			// newErr = lastError;
			// newErr.name = 'ERR_FATAL';
			// newErr.expected = this._PossibleTokens();
			// newErr.tokens = badTokens;
			// newErr.details = errorReport;
		}
		this.badTokens = [];
		this.errorReport = [];
		// exit with error
		throw newErr;
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