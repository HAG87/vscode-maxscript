'use strict';
// import * as cp from 'child_process';
import * as vscode from 'vscode';
import {
	provideParserDiagnostic,
	setDiagnostics,
	provideTokenDiagnostic,
	ParserError,
	DiagnosticCollection
} from './mxsDiagnostics';

import { collectStatementsFromCST, collectSymbols, collectTokens } from './mxsProvideSymbols';
import { mxsParseSource } from './mxsParser';
//--------------------------------------------------------------------------------
/**
 * Provide document symbols. Impements the parser.
 * TODO:
 *  - fallback to safe regex match
 *  - implement async version
 * 	- implement child_process
 */
export class mxsDocumentSymbolProvider implements vscode.DocumentSymbolProvider {
	/** Start a parser instance */
	msxParser = new mxsParseSource('');
	/** Current active document */
	activeDocument!: vscode.TextDocument;
	/** Current document symbols */
	activeDocumentSymbols!: vscode.SymbolInformation[];

	private documentSymbolsFromCST(document: vscode.TextDocument, CST: any, options = {remapLocations: false}) {
		let CSTstatements = collectStatementsFromCST(CST);		
		let Symbols = collectSymbols(document, CST, CSTstatements);
		return Symbols;
	}

	private _getDocumentSymbols(document: vscode.TextDocument) {

		let SymbolInfCol = new Array<vscode.SymbolInformation>();
		let diagnostics: vscode.Diagnostic[] = [];
		this.activeDocument = document;

		try {
			// console.log('> PARSER MAIN CALL');
			// feed the parser
			this.msxParser.source = document.getText();
			// this.documentCST = this.msxParser.parsedCST;
			SymbolInfCol = this.documentSymbolsFromCST(document, this.msxParser.parsedCST);
			diagnostics.push(...provideTokenDiagnostic(document, collectTokens(this.msxParser.parsedCST, 'type', 'error')));

		} catch (err) {
			// console.log(err);
			if (err.recoverable !== undefined) {
				// console.log('parse error! recover?: '+ err.recoverable);
				if (err.recoverable === true) {
					//recovered from error
					diagnostics.push(...provideParserDiagnostic(document, <ParserError>err));
					SymbolInfCol = this.documentSymbolsFromCST(document, this.msxParser.parsedCST,{remapLocations: true});
					diagnostics.push(...provideTokenDiagnostic(document, collectTokens(this.msxParser.parsedCST, 'type', 'error')));
					// throw err;
				} else {
					// fatal error
					// console.log('parse error! recover?: '+ err.recoverable);
					diagnostics.push(...provideParserDiagnostic(document, <ParserError>err));
					// throw err;
				}
			} else {
				// not a parser error
				// console.log(err);
				throw err;
			}
		}
		// setDiagnostics
		setDiagnostics(document, diagnostics.length !== 0 ? diagnostics : undefined);
		// return
		// return SymbolInfCol.length > 0 ? SymbolInfCol : undefined;
		return SymbolInfCol;
	}
	// Function called from Main !!
	public provideDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.SymbolInformation[]> {
		// console.log('OUTLINER CALLED!!: ' + document.uri.path);
		return new Promise((resolve, reject) => {
			if (token.isCancellationRequested) {
				// console.log('rejection called');
				setDiagnostics(document, undefined);
				reject(token);
			}
			// this hack tries to limit the parser execution. will keep it until I find a better solution.
			try {
				if (!document.isDirty || DiagnosticCollection.has(document.uri) || this.activeDocumentSymbols === undefined) {
					this.activeDocumentSymbols = this._getDocumentSymbols(document);
				}
				// resolve(this._getDocumentSymbols(document));
				resolve(this.activeDocumentSymbols);
			} catch (err) {
				setDiagnostics(document, undefined);
				reject(err);
			}
		});
	}
}
/**
 * Initialized mxsDocumentSymbolProvider. Intended to be consumed by the SymbolProviders and be persistent for the current editor, i norder to acces it from the minifier
 */
export const mxsDocumentSymbols = new mxsDocumentSymbolProvider();