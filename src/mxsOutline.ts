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
// type tSymbolKindMap = { [key: number]: vscode.SymbolKind };
const SymbolKindMap: { [key: number]: vscode.SymbolKind } = {
	1: vscode.SymbolKind.Module,
	5: vscode.SymbolKind.Method,
	6: vscode.SymbolKind.Property,
	8: vscode.SymbolKind.Constructor,
	11: vscode.SymbolKind.Function,
	12: vscode.SymbolKind.Variable,
	13: vscode.SymbolKind.Constant,
	18: vscode.SymbolKind.Object,
	22: vscode.SymbolKind.Struct,
	23: vscode.SymbolKind.Event,
};
//--------------------------------------------------------------------------------
/**
 * Parser initialization - DEPRECATED
 */
// export const msxParser = new mxsParseSource('');
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
		let Symbols = collectSymbols(CST, CSTstatements, options.remapLocations ? document.getText() : undefined);
		let SymbolInfCol = Symbols.map( item => {
			return new vscode.SymbolInformation(
				item.name,
				SymbolKindMap[item.kind],
				item.containerName || '',
				new vscode.Location(document.uri,
					new vscode.Range(
						document.positionAt(item.location.start),
						document.positionAt(item.location.end)
					))
			);
		});
		return SymbolInfCol;
	}

	private _getDocumentSymbols(document: vscode.TextDocument) {

		let SymbolInfCol = new Array<vscode.SymbolInformation>();
		let diagnostics: vscode.Diagnostic[] = [];
		this.activeDocument = document;
		try {
			// console.log('> PARSER MAIN CALL');
			// feed the parser
			this.msxParser.source = document.getText();
			this.msxParser.ParseSource();
			// this.documentCST = this.msxParser.parsedCST;
			SymbolInfCol = this.documentSymbolsFromCST(document, this.msxParser.parsedCST);
			diagnostics.push(...provideTokenDiagnostic(document, collectTokens(this.msxParser.parsedCST, 'type', 'error')));

		} catch (err) {
			if (err.recoverable !== undefined) {
				// console.log('parse error! recover?: '+ err.recoverable);
				if (err.recoverable === true) {
					//recovered from error
					diagnostics.push(...provideParserDiagnostic(document, <ParserError>err));
					SymbolInfCol = this.documentSymbolsFromCST(document, this.msxParser.parsedCST,{remapLocations: true});
					diagnostics.push(...provideTokenDiagnostic(document, collectTokens(this.msxParser.parsedCST, 'type', 'error', document.getText())));
					// throw err;
				} else {
					// fatal error
					diagnostics.push(...provideParserDiagnostic(document, <ParserError>err));
					// throw err;
				}
			} else {
				// not a parser error
				throw err;
			}
		}
		// setDiagnostics
		setDiagnostics(document, diagnostics.length !== 0 ? diagnostics : undefined);
		// return
		return SymbolInfCol;
	}
	// Function called from Main !!
	public provideDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.SymbolInformation[]> {
		return new Promise((resolve, reject) => {
			// console.log('OUTLINER CALLED!!: ' + document.uri.path);
			if (token.isCancellationRequested) {
				// console.log('rejection called');
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