/*
TODO:
[x] Ignore comments
*/
'use strict';
import {
	CancellationToken,
	DocumentSymbolProvider,
	Location,
	SymbolInformation,
	TextDocument
} from 'vscode';

import { mxsSymbols, mxsSymbolMatch } from './schema/mxsSymbolDef';

export default class mxsDocumentSymbolProvider implements DocumentSymbolProvider {

	private _getDocumentSymbols(document: TextDocument, tokens: mxsSymbolMatch[]): SymbolInformation[] {

		let SymbolInfCol = new Array<SymbolInformation>();

		let docTxt = document.getText();
		// skip comment rules

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
					new SymbolInformation(
						matchSymbols[type.decl],
						type.kind,
						type.type,
						new Location(document.uri, document.positionAt(matchSymbols.index))
					)
				);
			}
			//type.match.compile();
		});
		return SymbolInfCol;
	}
	// Function called from Main !!
	public provideDocumentSymbols(document: TextDocument, token: CancellationToken): Promise<SymbolInformation[]> {
		return new Promise((resolve, reject) => {
			try {
				resolve(this._getDocumentSymbols(document, mxsSymbols));
			} catch (err) {
				reject(err);
			}
		});
	}
}