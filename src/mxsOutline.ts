'use strict';
import * as vscode from 'vscode';
// const mxsParseSource = require('./lib/mxsParser');
// import * as msxParser from './mxsParseTree';
// import {msxParser} from './mxsParseTree';

import {
	provideParserDiagnostic,
	setDiagnostics,
	provideTokenDiagnostic,
	ParserError,
	ParserFatalError,
	parsingErrorMessage
} from './mxsDiagnostics';

import { collectStatementsFromAST, collectSymbols, collectTokens } from './mxsProvideSymbols';
const mxsParseSource = require('./lib/mxsParser');

type tSymbolKindMap = { [key: number]: vscode.SymbolKind };
const SymbolKindMap: tSymbolKindMap = {
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


const msxParser = new mxsParseSource('');


export default class mxsDocumentSymbolProvider implements vscode.DocumentSymbolProvider {

	private _getDocumentSymbols(document: vscode.TextDocument/*, tokens: mxsSymbolMatch[]*/): vscode.SymbolInformation[] {


		let docTxt = document.getText();
		let SymbolInfCol = new Array<vscode.SymbolInformation>();
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

			// throw err;
			// /*
			switch (err.name) {
				case 'ERR_RECOVER': {
					console.log(err.name);
					// provideParserDiagnostic(document, <ParserError>err);
					// console.log('parsed with errors!');
					// recoverable error
					setDiagnostics(document, provideParserDiagnostic(document, <ParserError>err));
					// setDiagnostics(document, provideTokenDiagnostic(document, AST));
					break;
				}
				case 'ERR_FATAL': {
					console.log(err.name);
					// fatal error - No AST
					throw err;
					// break;
				}
				default:
					break;
			}
			// */
		}
		console.log('CONTINUE');
		// /*
		// try {
		let AST = msxParser.parsedAST;


		// let AST = msxParser.ast();
		let ASTstatements = collectStatementsFromAST(AST);
		let Symbols = collectSymbols(AST, ASTstatements);

		console.log(AST);
		// console.log(Symbols);
		SymbolInfCol = Symbols.map((item) => {
			// console.log(item.name + '  ' + item.location.start);
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
		// let tokens = collectTokens(AST, 'type', 'error');
		// console.log( tokens );
		// Token diagnostics. this will replace current diagnostics collection, erase it if no errors.
		// setDiagnostics(document, provideTokenDiagnostic(document, collectTokens(AST, 'type', 'error')));
		// } catch (err) {
		// throw err;
		// }
		return SymbolInfCol;
	}
	// Function called from Main !!
	// Diagnosis Hook UP here!
	public provideDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.SymbolInformation[]> {
		return new Promise((resolve, reject) => {
			try {
				setDiagnostics(document);
				resolve(this._getDocumentSymbols(document/*, mxsSymbols*/));
			} catch (err) {
				console.log('rejected!');
				console.log(err.name);
				// parser diagnostics. Token diagnostics and parser diagnostics cannot currently cohexist. parser error will mean that no error tokens where provided
				// rewind thge parser on error, and feed text skipping tokens can overcome this limitation when there is valid syntax ahead.
				// another option is just recover the parser with the backtracking the source until the error position, and discard text ahead of it.
				reject (setDiagnostics(document, provideParserDiagnostic(document, <ParserFatalError>err)));
				// reject(err);
			}
		});
	}
}