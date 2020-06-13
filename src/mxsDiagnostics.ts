"use strict";
import * as vscode from 'vscode';
//--------------------------------------------------------------------------------
import * as moo from 'moo';
import { tokenDefinitions } from './schema/mxsTokenDefs';
import { range, vsRangeFromToken} from './mxsProvideSymbols';
//--------------------------------------------------------------------------------
const tokenListToValues = (tokenList: Dictionary<string>[]): string[] => {
	return [...new Set((tokenList).map(item => item.type))];
};
//--------------------------------------------------------------------------------
interface Dictionary<T> {
	[key: string]: T;
}

type ErrorDetail = {
	token?: moo.Token;
	expected: Dictionary<string>[];

};
export interface ParserFatalError extends Error {
	token: moo.Token;
	offset: number;
	details: Dictionary<string>[];
}
/**
 * ParserError extends js Error
 */
export class ParserError extends Error {
	constructor(message?: string) {
	  // 'Error' breaks prototype chain here
	  super(message);
	  // restore prototype chain
	  const actualProto = new.target.prototype;
	  Object.setPrototypeOf(this, actualProto);
	}
	name: string = 'parse_error';
	recoverable!: boolean;
	tokens: moo.Token[] = [];
	details: ErrorDetail[] = [];
}

function isFatalError(error: ParserError | ParserFatalError): error is ParserFatalError {
	return (error as ParserFatalError).token ? true : false;
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
	return ([basicDiagnostics(error.token)].concat(correctionList(error.details)).join('\n'));
}
/**
 * Provides a basic syntax error diagnostic.
 * @param document Document that emiited the parsing error
 * @param error parser error type
 */
export function provideParserDiagnostic(document: vscode.TextDocument, error: ParserError): vscode.Diagnostic[] {
	if (!document) { return []; }
	let diagnostics: vscode.Diagnostic[];
	let source = document.getText().split('\n');

	let tokenList = [...error.tokens];
	diagnostics = tokenList.map(t => {
		let vsRange = vsRangeFromToken(document, t, source);
		let diag = new vscode.Diagnostic(
			vsRange,
			`Unexpected \"${t}\".`,
			vscode.DiagnosticSeverity.Error
		);
		diag.source = 'MaxScript';
		diag.code = error.name;
		// DISABLED: List of possible tokens
		// let list = tokenListToValues(error.alternatives);
		// let tokenDesc: string[] = list.map(item => tokenDefinitions[item]).sort();
		// diag.relatedInformation = tokenDesc.map( item => new vscode.DiagnosticRelatedInformation(new vscode.Location(document.uri, vsRange), item));
		return diag;
	});
	return diagnostics;
}
/**
 * Provides bad token diagnosys based on lexer error token
 * @param document current document
 * @param CST parsed CST
 */
export function provideTokenDiagnostic(document: vscode.TextDocument, errTokens: moo.Token[] | undefined): vscode.Diagnostic[] {

	if (!errTokens) { return []; }

	let diagnostics: vscode.Diagnostic[] = errTokens.map(t => ({
		code: 'ERR_TOKEN',
		message: `Unexpected token: ${t.text}`,
		range: vsRangeFromToken(document, t),
		severity: vscode.DiagnosticSeverity.Warning,
		source: 'MaxScript'
	}));
	return diagnostics;
}
/**
 * Set or Remove Current Diagnostics for document
 * @param document Current active editor document
 * @param diagnostic collection of vscodeDiagnostic
 * @param collection Curent registered DiagnosticCollection
 */
export function setDiagnostics(document: vscode.TextDocument, diagnostic?: vscode.Diagnostic[],
	collection: vscode.DiagnosticCollection = DiagnosticCollection): void {
	if (diagnostic) {
		collection.set(document.uri, diagnostic);
	} else {
		// collection.clear();
		collection.delete(document.uri);
	}
}