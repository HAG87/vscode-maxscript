/*
TODO:
[x] Ignore comments
*/
'use strict'
import * as vscode from 'vscode';

export interface mxsSymbolMatch {
	type: string,
	match: RegExp,
	kind: vscode.SymbolKind,
	decl: number
}

export const mxsSymbols: mxsSymbolMatch[] = [
	{
		type: 'struct',
		match: /struct\s+(\b\w+)/ig,
		kind: vscode.SymbolKind.Struct,
		decl: 1
	},
	{
		type: 'function',
		match: /(fn|function)\s+(\b\w+)/ig,
		kind: vscode.SymbolKind.Function,
		decl: 2
	},
	/*
	{
		type: 'localVar',
		match: /local\s+(\b\w+)/ig,
		kind: vscode.SymbolKind.Variable,
		decl: 1
	},
	{
		type: 'globalVar',
		match: /global\s+(\b\w+)/ig,
		kind: vscode.SymbolKind.Variable,
		decl: 1
	},
	{
		type: 'globalTyped',
		match: /(::\w+)/ig,
		kind: vscode.SymbolKind.Variable,
		decl: 1
	},
	*/
	{
		type: 'macroscript',
		match: /macroscript\s+(\b\w+)/ig,
		kind: vscode.SymbolKind.Object,
		decl: 1
	},
	{
		type: 'rollout',
		match: /rollout\s+(\b\w+)/ig,
		kind: vscode.SymbolKind.Constructor,
		decl: 1
	},
	{
		type: 'utility',
		match: /utility\s+(\b\w+)/ig,
		kind: vscode.SymbolKind.Object,
		decl: 1
	},
	{
		type: 'tool',
		match: /(tool|mousetool)\s+(\b\w+)/ig,
		kind: vscode.SymbolKind.Object,
		decl: 2
	},
	{
		type: 'event',
		match: /on\s+(\b\w+)\.+(?=do|return)/ig,
		kind: vscode.SymbolKind.Event,
		decl: 1
	},
	{
		type: 'External file',
		match: /filein\s*\(*(.*)(?=\)|;|\n)/ig,
		kind: vscode.SymbolKind.Package,
		decl: 1
	}
]

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