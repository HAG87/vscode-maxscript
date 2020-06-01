'use strict';
import * as vscode from 'vscode';
// import {msxParser} from './mxsParseTree';

import {
	provideParserDiagnostic,
	setDiagnostics,
	provideTokenDiagnostic,
	ParserError,
	// ParserFatalError,
	// parsingErrorMessage
} from './mxsDiagnostics';

import { collectStatementsFromCST, collectSymbols, collectTokens } from './mxsProvideSymbols';
const mxsParseSource = require('./lib/mxsParser');
// import { mxsParseSource } from './mxsParser';
//--------------------------------------------------------------------------------

// type tSymbolKindMap = { [key: number]: vscode.SymbolKind };
const SymbolKindMap: { [key: number]: vscode.SymbolKind } = {
	1:  vscode.SymbolKind.Module,
	5:  vscode.SymbolKind.Method,
	6:  vscode.SymbolKind.Property,
	8:  vscode.SymbolKind.Constructor,
	11: vscode.SymbolKind.Function,
	12: vscode.SymbolKind.Variable,
	13: vscode.SymbolKind.Constant,
	18: vscode.SymbolKind.Object,
	22: vscode.SymbolKind.Struct,
	23: vscode.SymbolKind.Event,
};
//--------------------------------------------------------------------------------
/**
 * Parser initialization
 */
export const msxParser = new mxsParseSource('');
//--------------------------------------------------------------------------------
export class mxsDocumentSymbolProvider implements vscode.DocumentSymbolProvider {

	private _getDocumentSymbols(document: vscode.TextDocument/*, tokens: mxsSymbolMatch[]*/): vscode.SymbolInformation[] {
		let docTxt = document.getText();
		let SymbolInfCol = new Array<vscode.SymbolInformation>();
		let refSource;
		let diagnostics: vscode.Diagnostic[] = []; // NOT WORKING WITH CONCAT ?
		/*
		try {
			var msxParser = new mxsParseSource(docTxt);
		} catch (err) {
			// provide-update diagnostics
		}
		// */
		// feed the parser
		// msxParser.source(docTxt);
		try {
			msxParser.source = docTxt;

		} catch (err) {
			// console.log(err.name);
			// throw err;
			// /*
			switch (err.name) {
				case 'ERR_RECOVER': {
					// DISABLED: Can't get a working CST, token locations are wrong
					// token offsets are broken for this!!! // no valid locations!!! // must use line-col
					refSource = docTxt;
					diagnostics = diagnostics.concat(provideParserDiagnostic(document, <ParserError>err));
					// break;
					throw err;
				}
				case 'ERR_FATAL': {
					// fatal error - No CST
					throw err;
					// break;
				}
				default:
					// console.log(err.name);
					throw err;
			}
			// */
		}
		// /*
		let CST = msxParser.parsedCST;
		let CSTstatements = collectStatementsFromCST(CST);
		let Symbols = collectSymbols(CST, CSTstatements, refSource);
		SymbolInfCol = Symbols.map((item) => {
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
		// */
		// set Diagnostics for tokens
		diagnostics = diagnostics.concat(provideTokenDiagnostic(document, collectTokens(CST, 'type', refSource, 'error')));
		setDiagnostics(document, diagnostics.length !== 0 ? diagnostics : undefined);
		// Return
		return SymbolInfCol;
	}
	// Function called from Main !!
	// Diagnosis Hook UP here!
	public provideDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.SymbolInformation[]> {
		return new Promise((resolve, reject) => {
			try {
				// setDiagnostics(document);
				resolve(this._getDocumentSymbols(document/*, mxsSymbols*/));
			} catch (err) {
				// console{}.log(err);
				if (err.name === 'ERR_FATAL') {
					reject(setDiagnostics(document, provideParserDiagnostic(document, <ParserError>err)));
				} else {
					reject(err);
				}
			}
		});
	}
}