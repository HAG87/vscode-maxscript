"use strict";
import * as vscode from 'vscode';
//--------------------------------------------------------------------------------
import * as moo from 'moo';
import { tokenDefinitions } from './schema/mxsTokenDefs';
import { range, collectErrors } from './mxsProvideSymbols';
//--------------------------------------------------------------------------------
type simpleToken = {
	type: string;
};
interface ParserError extends Error {
	token: moo.Token;
	offset: number;
	alternatives: simpleToken[];
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
function tokenListToValues(tokenList: simpleToken[]): string[] {
	let unique_list = [...new Set((tokenList).filter(item => item.type).map(item => item.type))];
	return Array.from(unique_list);
}
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
const correctionList = (tokenList: simpleToken[]): string => {
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
export function parsingErrorMessage(error: ParserError): string {
	return ([basicDiagnostics(error.token)].concat(correctionList(error.alternatives)).join('\n'));
}
/**
 * Diagnostics collection. using just one for all the documents in workspace.
 */
export const DiagnosticCollection: vscode.DiagnosticCollection = vscode.languages.createDiagnosticCollection('mxsDiagnostics');
/**
 * Provides a basic syntax error diagnostic.
 * @param document Document that emiited the parsing error
 * @param error parser error type
 */
export function provideParserDiagnostic(document: vscode.TextDocument, error: ParserError): vscode.Diagnostic[] | undefined {

	if (!document) { return; }

	let loc = range.fromOffset(error.token.offset, error.token.value);

	let vsRange = new vscode.Range(document.positionAt(loc.start), document.positionAt(loc.end));
	//let vsLocation = new vscode.Location(document.uri, vsRange);
	// DISABLED: List of possible tokens
	// let list = tokenListToValues(error.alternatives);
	// let tokenDesc: string[] = list.map(item => tokenDefinitions[item]).sort();

	let diagnostic = new vscode.Diagnostic(
		vsRange,
		// `Unexpected \"${error.token.value}\". It was expected one of the followings:`,
		`Unexpected \"${error.token.value}\".`,
		vscode.DiagnosticSeverity.Error
	);
	diagnostic.source = 'MaxScript';
	diagnostic.code = 'ERR_PARSE';
	// diagnostic.relatedInformation = tokenDesc.map( item => new vscode.DiagnosticRelatedInformation(new vscode.Location(document.uri, vsRange), item));
	return [diagnostic];
}
/**
 * Provides bad token diagnosys based on lexer error token
 * @param document current document
 * @param AST parsed AST
 */
export function provideTokenDiagnostic(document: vscode.TextDocument, AST: any[]): vscode.Diagnostic[] | undefined {
	let errTokens = collectErrors(AST);

	if (!errTokens) { return; }

	let diagnostics: vscode.Diagnostic[] = errTokens.map((err: IerrSymbolInformation) => ({
		code: err.code,
		message: err.message,
		range: new vscode.Range(document.positionAt(err.range.start), document.positionAt(err.range.end)),
		severity: vscode.DiagnosticSeverity.Error,
		source: err.source
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