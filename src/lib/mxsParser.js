"use strict";
const crypto = require('crypto');
//-----------------------------------------------------------------------------------
const nearley = require('nearley');
const grammar = require('./grammar.js');
const mxLexer = require('./mooTokenize.js');
//-----------------------------------------------------------------------------------
class mxsParseSource {

	_declareParser() {
		this.parserInstance = new nearley.Parser(
			nearley.Grammar.fromCompiled(grammar),
			{
				//keepHistory: true,
				lexer: mxLexer
			});
	}

	constructor(source) {
		this._declareParser();
		this.__source = source;
		this.__parsedAST = [];
		this.__SourceHash();
		// this.SourceHash = mxsParseSource.HashSource(source);
		this.ParseSource();
	}

	get source() {
		return this.__source;
	}

	set source(newSource) {
		this.__source = newSource;
		// this.SourceHash = mxsParseSource.HashSource(newSource);
		this.reset();
		this.__SourceHash();
		this.ParseSource();
		// this.__parsedAST = this.ParseSource();
	}

	get parsedAST() {
		return this.__parsedAST;
	}
	//-----------------------------------------------------------------------------------
	reset () {
		this._declareParser()
	}
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
	ParseSource(tree = 0) {
		/*
		let parserState = null;
		try {
		parserState = parser.save();
		parser.feed(...);
		} catch (e) {
		parser.restore(parserState);
		}
		*/
		// let parserState = null;
		try {
			// this.parserInstance.finish();
			// save parser state
			// parserState = this.parserInstance.save();
			// feed the parser
			this.parserInstance.feed(this.__source);

			/*// TODO: implement parser re-feed after error.
			I could replace the offending token with possible alternatives until the parser takes in.
			This could provide wrong results, so I must mark as invalid this branch/leaf
			let savedParse;
			//savedParse = parser.save()
			//*/
			// Resolve. the ATS
			// console.log('results');
			// return (this.parserInstance.results[tree]);
			this.__parsedAST = (this.parserInstance.results[tree]);
			return;
		} catch (err) {
			// offending token is err.token
			// Reject. This returns the offending token and a list of possible solutions
			// offset is useless bc indicates the token index, not the char in source. token.offset is what I want
			//TODO: Implement some error skip. I could save the parser change the offending token for one of the spected,
			// and try my luck parsing the rest. OR parse all again changing that token in the input stream.
			// let heyhey = this.parserInstance.lexer.next()

			err.alternatives = this._PossibleTokens();
			// console.log(heyhey);
			// restore the parser... and now?
			// this.parserInstance.restore(parserState);

			throw err;
		}
	}

	feed(str, tree = 0) {
		try {
			this.parserInstance.feed(str);
			this.__parsedAST = (this.parserInstance.results[tree]);
			return;
		} catch (err) {
			// offending token is err.token
			// Reject. This returns the offending token and a list of possible solutions
			// offset is useless bc indicates the token index, not the char in source. token.offset is what I want
			//TODO: Implement some error skip. I could save the parser change the offending token for one of the spected,
			// and try my luck parsing the rest. OR parse all again changing that token in the input stream.
			// let heyhey = this.parserInstance.lexer.next()

			err.alternatives = this._PossibleTokens();
			throw err;
		}
	}

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

	__SourceHash () {
		mxsParseSource.HashSource(this.__source);
	}

	static HashSource(source) {
		return crypto.createHash('md5').update(source).digest('hex');
	}
}
//-----------------------------------------------------------------------------------
module.exports = mxsParseSource;