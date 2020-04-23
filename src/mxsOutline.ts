/*
TODO:
[x] Ignore comments
*/
'use strict'
import * as vscode from 'vscode';

import { mxsSymbolMatch } from './mxsSymbolDef';
import { mxsSymbols } from './mxsSymbolDef';

export default class mxsDocumentSymbolProvider implements vscode.DocumentSymbolProvider {

	private getDocumentSymbols(document: vscode.TextDocument, tokens: mxsSymbolMatch[]): vscode.SymbolInformation[] {
		let SymbolInfCol = new Array<vscode.SymbolInformation>();

		let docTxt = document.getText();
		// skip comment rules

		let blockComments = (x: string): RegExp => {
			return new RegExp('\\/\\*[^\\*\\/]*' + x, 'i');
		}
		let singleComments = (x: string): RegExp => {
			return (
				new RegExp('--.*(' + x + ').*$', 'im')
			);
		}

		tokens.forEach(type => {
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
		return SymbolInfCol;
	}
	// Function called from Main !!
	public provideDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken): Thenable<vscode.SymbolInformation[]> {
		let mxsConfig = (vscode.workspace.getConfiguration('maxscript'));
		return new Promise((resolve, reject) => {
			if (!mxsConfig.get('gotosymbol',true)) {reject ('MaxScript Go to Symbol disabled');}
			try {
				resolve(this.getDocumentSymbols(document, mxsSymbols));
			} catch (e) {
				reject(e);
			}
		});
	}
}