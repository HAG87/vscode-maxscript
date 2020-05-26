"use strict";
import * as vscode from 'vscode';
//--------------------------------------------------------------------------------
import * as moo from 'moo';
import { tokenDefinitions } from './schema/mxsTokenDefs';
import { range, collectTokens } from './mxsProvideSymbols';
//--------------------------------------------------------------------------------
const vsRangeFromToken = (document: vscode.TextDocument, token: moo.Token) => {

	let loc = range.fromOffset(token.offset, token.text);
	return new vscode.Range(
		document.positionAt(loc.start),
		document.positionAt(loc.end)
	);
};
const tokenListToValues = (tokenList: Dictionary<string>[]): string[] => {
	return [...new Set((tokenList).map(item => item.type))];
};
//--------------------------------------------------------------------------------
interface Dictionary<T> {
	[key: string]: T;
}

// type parserError<T> = {
// 	[P in keyof T]: T[P]
// };

type ErrorDetail = {
	token: moo.Token;
	expected: Dictionary<string>[];

};

export interface ParserError extends Error {
	tokens: moo.Token[];
	details: ErrorDetail[];
	// parsedAST:
}
export interface ParserFatalError extends Error {
	token: moo.Token;
	offset: number;
	expected: Dictionary<string>[];
}
function isFatalError (error: ParserError | ParserFatalError): error is ParserFatalError {
	return (error as ParserFatalError).token ? true : false;
}

interface IerrSymbolInformation {
	message: string;
	// tag?:      string;
	source?: string;
	code?: string;
	range: { start: number; end: number };
	severity?: number;
}
//--------------------------------------------------------------------------------
/**
 * Diagnostics collection. using just one for all the documents in workspace.
 */
export const DiagnosticCollection: vscode.DiagnosticCollection = vscode.languages.createDiagnosticCollection('mxsDiagnostics');
//--------------------------------------------------------------------------------
/**
 * Provide basic error message
 * @param {token} token Offending token, from error
 */
const basicDiagnostics = (token: moo.Token): string => {
	return `Unexpected \"${token.value}\" at position: ${token.offset}`;
};
/**
 * Provide a message that list possible solutions
 * @param {token[]} tokenList List of possible tokens
 */
const correctionList = (tokenList: Dictionary<string>[]): string => {
	// get a list of the types
	let list = tokenListToValues(tokenList);
	let tokenDesc = list.map((item: string) => tokenDefinitions[item]).sort();
	// map the types to description...
	let str = 'It was expected one of the followings:\n - ' + tokenDesc.join('\n - ');
	return str;
};
/**
 * Diagnostics generic message
 * @param error Error throw from parser
 */
export function parsingErrorMessage(error: ParserFatalError): string {
	return ([basicDiagnostics(error.token)].concat(correctionList(error.expected)).join('\n'));
}
/**
 * Provides a basic syntax error diagnostic.
 * @param document Document that emiited the parsing error
 * @param error parser error type
 */
export function provideParserDiagnostic(document: vscode.TextDocument, error: ParserError | ParserFatalError): vscode.Diagnostic[] | undefined {

	console.log('parsing diag');
	if (!document) { return; }
	// /*
	// let diagnostic;
	let tokenList = [];

	if (isFatalError(error)) {
		tokenList.push(error.token);
		// tokenList.push( <ErrorDetail>{token:error.token, expected:error.expected} );
	} else {
		tokenList = [...error.tokens];
		// tokenList = error.details;
	}

	let diagnostics: vscode.Diagnostic[] = tokenList.map( t => {
		let diag = new vscode.Diagnostic(
			vsRangeFromToken(document, t),
			`Unexpected \"${t}\".`,
			vscode.DiagnosticSeverity.Error
		);
		diag.source = 'MaxScript';
		diag.code = error.name;
		return diag;
	});
	return diagnostics;
	// */
	// DISABLED: List of possible tokens
	// let list = tokenListToValues(error.alternatives);
	// let tokenDesc: string[] = list.map(item => tokenDefinitions[item]).sort();

	//let vsLocation = new vscode.Location(document.uri, vsRange);
	// diagnostic.relatedInformation = tokenDesc.map( item => new vscode.DiagnosticRelatedInformation(new vscode.Location(document.uri, vsRange), item));
}
/**
 * Provides bad token diagnosys based on lexer error token
 * @param document current document
 * @param AST parsed AST
 */
export function provideTokenDiagnostic(document: vscode.TextDocument, errTokens: moo.Token[] | undefined): vscode.Diagnostic[] | undefined {

	if (!errTokens) { return; }

	let diagnostics: vscode.Diagnostic[] = errTokens.map( t => ({
		code: 'ERR_TOKEN',
		message: `Unexpected token: ${t.text}`,
		range: vsRangeFromToken(document, t),
		severity: vscode.DiagnosticSeverity.Error,
		source: 'MaxScript'
	}));
	return diagnostics;
}
// vscode diagnostics
export function setDiagnostics(document: vscode.TextDocument, diagnostic?: vscode.Diagnostic[],
	collection: vscode.DiagnosticCollection = DiagnosticCollection): void {
	if (diagnostic) {
		collection.set(document.uri, diagnostic);
	} else {
		// collection.clear();
		collection.delete(document.uri);
	}
}