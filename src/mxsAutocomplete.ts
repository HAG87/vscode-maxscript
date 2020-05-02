import * as vscode from 'vscode';
import * as util from './utils';

import { maxCompletions } from './schema/mxsSchema';
import { mxClassMembers } from './schema/mxsSchema-clases';
import { mxInterfaceMembers } from './schema/mxsSchema-interfaces';
import { mxStructsMembers } from './schema/msxSchema-structs';

/**
 * ItemProvider class
 */
export default class mxsCompletion implements vscode.CompletionItemProvider {
	/*
	public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.CompletionItem[] {
		return this.provideCompletionItemsInternal(document, position, token);
	}
	*/
	private mxCompletions = new Array<vscode.CompletionItem>(...maxCompletions);
	/**
	 * Retrieve the completion items, search for descendant completion items.
	 * @param document
	 * @param position
	 */
	private provideCompletionItemsInternal(document: vscode.TextDocument, position: vscode.Position): vscode.CompletionItem[] {

		let lineText = document.lineAt(position.line).text;
		let lineTillCurrentPosition = lineText.substr(0, position.character);

		// escape strings
		if (!(util.isPositionInString(lineTillCurrentPosition)) && lineTillCurrentPosition.endsWith('\"')) {
			return [];
		}
		// get current word
		let wordAtPosition = document.getWordRangeAtPosition(position);

		let currentWord = '';

		if (wordAtPosition && wordAtPosition.start.character < position.character) {
			let word = document.getText(wordAtPosition);
			currentWord = word.substr(0, position.character - wordAtPosition.start.character);
		};
		// escape numbers
		if (currentWord.match(/^\d+$/)) { return []; }
		// test if currPos is after dot
		// let dotPattern = /\w+[.]\w*?$/;
		let dotPattern = /\w+[.]$/;

		let notDotPattern = /[^.]\w+$/;

		let dotTest = dotPattern.test(lineTillCurrentPosition);

		let notDotTest = notDotPattern.test(lineTillCurrentPosition);

		if (!dotTest) {
			if (notDotTest) {
				return this.mxCompletions;
			}
		} else {
			let theFoundItem = this.mxCompletions.find(item => item.label === util.precWord(lineTillCurrentPosition));

			if (theFoundItem && theFoundItem.hasOwnProperty('kind')) {
				switch (theFoundItem.kind) {
					case vscode.CompletionItemKind.Class:
						//console.log(mxClassMembers[theFoundItem.label]);
						return mxClassMembers[theFoundItem.label];
					case vscode.CompletionItemKind.Struct:
						//console.log(mxStructsMembers[theFoundItem.label]);
						return mxStructsMembers[theFoundItem.label];
					case vscode.CompletionItemKind.Interface:
						//console.log(mxInterfaceMembers[theFoundItem.label]);
						return mxInterfaceMembers[theFoundItem.label];
					default:
						// exit
						return undefined;
				}
			};
		}
	}
	/**
	 * provideCompletionItems
	 * @param document
	 * @param position
	 * @param token
	 * @param context
	 */
	public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position,
		token: vscode.CancellationToken, context: vscode.CompletionContext): Thenable<vscode.CompletionItem[]> {

		let mxsConfig = (vscode.workspace.getConfiguration('maxscript'));
		return new Promise((resolve, reject) => {

			if (!mxsConfig.get('completions', true)) { reject('maxScript Completion disabled'); }

			try {
				resolve(this.provideCompletionItemsInternal(document, position));
			} catch (e) {
				reject(e);
			}
		});
	}
}