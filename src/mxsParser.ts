"use strict";
import {
	BinaryLike,
	createHash
} from 'crypto';
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
	// hash: string;
	private __source: string;
	private __parserState: any;
	private __parsedCST: any;
	// constructor
	constructor(source: string | undefined) {
		this.__source = source || '';
		this.reset();
		// this.hash = mxsParseSource.HashSource(this.__source);
		// this.ParseSource();
	}
	/** Declare a new parser instance */
	private _declareParser() {
		return new nearley.Parser(
			nearley.Grammar.fromCompiled(grammar),
			{
				keepHistory: true
			});
	}
	/** get the source Stream */
	get source() { return this.__source; }
	/**	Set new source, and re-parse */
	set source(newSource) {
		this.__source = newSource;
		// this.reset();
		// this.hash = mxsParseSource.HashSource(this.__source);
		// this.ParseSource();
	}
	/** Get the parsed CST, if any */
	get parsedCST() {
		return this.__parsedCST;
	}
	/** Reset the parser * */
	reset() { this.parserInstance = this._declareParser(); }
	/**
	 * Tokenize mxs string
	 * @param {moo.lexer} lexer
	 * @param {string} source
	 */
	TokenizeStream(filter?: string[]) {
		if (filter instanceof Array) {
			mxLexer.next = (next => () => {
				let tok;
				// IGNORING COMMENTS....
				while ((tok = next.call(mxLexer)) && (filter.includes)) /* empty statement */;
				return tok;
			})(mxLexer.next);
		}
		// feed the tokenizer
		mxLexer.reset(this.__source);
		let token;
		let toks = [];
		while ((token = mxLexer.next())) {
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
		// Set a clean state - DISABLED FOR WORKAROUND OF PROBLEM -> ERROR RECOVERY DECLARES A CLEAN PARSER INSTANCE
		this.reset();
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

		let src = this.TokenizeStream();
		let state = this.parserInstance.save();

		let badTokens: any[] = [];
		let errorReport: any[] = [];

		// let next = 0;
		let total = src.length - 1;

		for (var next = 0; next < total; next++) {
		// while (next <= total) {
			try {
				this.parserInstance.feed(src[next].toString());
				// this.parserInstance.feed(src[next].text);
			} catch (err) {
				// catch non parsing related errors.
				if (!err.token) { throw err; }
				// console.log(err.token);
				badTokens.push(src[next]);
				/* DISABLED FEATURE - NEEDS OPTIMIZATION */
				// errorReport.push({token:src[next], alternatives: this.PossibleTokens(this.parserInstance) });
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
	async ParseSourceAsync(source = this.__source) {
		let parser = () =>{
			return new Promise((resolve, reject) => {
				// delay execution
				// setTimeout( () => {
				// console.log("parser called");
				let mxsParser = this._declareParser();
				try {
					mxsParser.feed(source);
					// console.log("parser done");					
					resolve(mxsParser.results[0]);
				} catch (err) {
					reject(err);
				}
				// },1000);
			});
		};

		return new Promise((resolve, reject) => {
			parser()
				.then ((result) => {
					this.__parsedCST = result;
					return resolve(result);
				}, () => {
					// console.log('source contain errors. Attemp to recover');
					return this.parseWithErrorsAsync();
				})
				.then( (result) => {
					if (result) {
						// console.log("returning results of error recovery.");
						this.__parsedCST = result.result;
						return reject(result.error);
					}

				})
				.catch (err => reject(err));
		});
	}
	/**
	 * UNFINISHED: ASYNC Error recovery
	 */
	private parseWithErrorsAsync():Promise<{result:any; error:ParserError}> {
	// private parseWithErrorsAsync():Promise<ParserError> {
		let mxsParser = this._declareParser();
		let src = this.TokenizeStream();
		let state = mxsParser.save();
		let total = src.length - 1;

		let badTokens: any[] = [];
		let errorReport: any[] = [];

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

		let errParser = (callback: any) => {			
			let parsings = (src: import("moo").Token[], next: number, total: number ): any | undefined => {
				try {
					mxsParser.feed(src[next].text);
				} catch (err) {
					// catch non parsing related errors.
					if (!err.token) { throw(err); }
					badTokens.push(src[next]);
					// errorReport.push({token:src[next], alternatives: this.PossibleTokens(mxsParser) });
					let filler = replaceWithWS(err.token.text);
					err.token.text = filler;
					err.token.value = filler;
					err.token.type = "ws";
					// src.splice(next, 1, err.token);
					src[next] = err.token;
					next -= 1;
					mxsParser.restore(state);
				}
				state = mxsParser.save();

				if (next === total) {
					if (mxsParser.results) {
						return callback(mxsParser.results[0]);
					} else {
						return callback();
					}
				} else {
					return setImmediate( () => parsings(src, next + 1, total) );
				}
			};
			parsings(src, 0, total);
		};
		let parseResults = () => {
			return new Promise((resolve, reject) => {
				// console.log('Error recovery done.');
				try {
					errParser( (res: any | undefined) => resolve(res));
				} catch (err) {
					return reject(err);
				}
			});
		};

		return new Promise((resolve, reject) => {
			parseResults()
				.then((result) => {
					this.__parsedCST = result;
					if (result) {
						return resolve({result: <any>result, error:reportSuccess()});
					} //else {
					return resolve({result: undefined, error:reportFailure()});
					//}
				})
				.catch (err => reject(err));
		});
	}

	private PossibleTokens(parserInstance: nearley.Parser) {
		var possibleTokens: any[] = [];
		var lastColumnIndex = parserInstance.table.length - 2;
		var lastColumn = parserInstance.table[lastColumnIndex];
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
				return parserInstance.buildFirstStateStack(state, []);
			});
		// Display each state that is expecting a terminal symbol next.
		stateStacks.forEach(function (stateStack: any[]) {
			var state = stateStack[0];
			var nextSymbol = state.rule.symbols[state.dot];
			possibleTokens.push(nextSymbol);
		});
		return possibleTokens;
	}
	/** MD5 hash */
	static HashSource(source: BinaryLike): string {
		return createHash('md5').update(source).digest('hex');
	}
}