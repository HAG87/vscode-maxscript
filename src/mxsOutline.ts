/*
TODO:
[x] Ignore comments
*/
'use strict';
import * as vscode from 'vscode';

import { mxsSymbolMatch } from './schema/mxsSymbolDef';
import { mxsSymbols } from './schema/mxsSymbolDef';

const  mxsParseSource = require('./lib/mxsParser');
const { collectStatementsFromAST, collectSymbols } = require('./lib/mxsProvideSymbols');

type tSymbolKindMap = {[key:number]: vscode.SymbolKind};
const SymbolKindMap: tSymbolKindMap = {
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

export default class mxsDocumentSymbolProvider implements vscode.DocumentSymbolProvider {

	private _getDocumentSymbols(document: vscode.TextDocument, tokens: mxsSymbolMatch[]): vscode.SymbolInformation[] {

		let SymbolInfCol = new Array<vscode.SymbolInformation>();

		let docTxt = document.getText();

		try {
			let msxParser = new mxsParseSource(docTxt);
			let AST = msxParser.parsedAST;
			let ASTstatements = collectStatementsFromAST(AST);
			let Symbols = collectSymbols(AST, ASTstatements);

			SymbolInfCol = Symbols.map( (item: { name: string; containerName: string; kind:number; location: { start: number; end: number} }) => {
				return new vscode.SymbolInformation(
					item.name,
					SymbolKindMap[item.kind],
					item.containerName,
					new vscode.Location(document.uri,
						new vscode.Range(
							document.positionAt(item.location.start),
							document.positionAt(item.location.end)
						))
				);
			});
		} catch (err) {
			console.log('Parse error');
			// provide-update diagnostics
			throw err;
		}

		// skip comment rules

		/*
		let blockComments = (x: string): RegExp => {
			return new RegExp('\\/\\*[^\\*\\/]*' + x, 'i');
		};
		let singleComments = (x: string): RegExp => {
			return (
				new RegExp('--.*(' + x + ').*$', 'im')
			);
		};

		tokens.forEach(type => {
			// token[type.match] contains a regex for matching
			// type.decl is a workaround for regexpExecArray index match
			let matchSymbols;
			while (matchSymbols = type.match.exec(docTxt)) {

				let scomment = singleComments(matchSymbols[type.decl]).test(docTxt);
				let bcomment = blockComments(matchSymbols[type.decl]).test(docTxt);
				if (scomment || bcomment) continue;

				SymbolInfCol.push(
					new vscode.SymbolInformation(
						matchSymbols[type.decl],
						type.kind,
						type.type,
						new vscode.Location(document.uri, document.positionAt(matchSymbols.index))
					)
				);
			}
			//type.match.compile();
		});
		*/
		return SymbolInfCol;
	}
	// Function called from Main !!
	public provideDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.SymbolInformation[]> {
		return new Promise((resolve, reject) => {
			try {
				resolve(this._getDocumentSymbols(document, mxsSymbols));
			} catch (err) {
				reject(err);
			}
		});
	}
}