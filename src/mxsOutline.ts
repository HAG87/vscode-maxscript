'use strict';
import * as vscode from 'vscode';
// const mxsParseSource = require('./lib/mxsParser');
// import * as msxParser from './mxsParseTree';
import {msxParser} from './mxsParseTree';
import { provideParserDiagnostic, setDiagnostics, provideTokenDiagnostic, parsingErrorMessage } from './mxsDiagnostics';

// const { collectStatementsFromAST, collectSymbols } = require('./lib/mxsProvideSymbols');
import { collectStatementsFromAST, collectSymbols } from './mxsProvideSymbols';

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
		msxParser.source = docTxt;
		// try {
		let AST = msxParser.parsedAST;
		// let AST = msxParser.ast();
		let ASTstatements = collectStatementsFromAST(AST);
		let Symbols = collectSymbols(AST, ASTstatements);
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
		// Token diagnostics. this will replace current diagnostics collection, erase it if no errors.
		setDiagnostics(document, provideTokenDiagnostic(document, AST));
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
				//setDiagnostics(document);
				resolve(this._getDocumentSymbols(document/*, mxsSymbols*/));
			} catch (err) {
				// parser diagnostics. Token diagnostics and parser diagnostics cannot currently cohexist. parser error will mean that no error tokens where provided
				// rewind thge parser on error, and feed text skipping tokens can overcome this limitation when there is valid syntax ahead.
				// another option is just recover the parser with the backtracking the source until the error position, and discard text ahead of it.
				reject (setDiagnostics(document, provideParserDiagnostic(document, err)));
				// reject(err);
			}
		});
	}
}