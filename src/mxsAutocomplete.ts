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
	private _provideCompletionItems(document: vscode.TextDocument, position: vscode.Position): vscode.CompletionItem[] {

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

		let result: vscode.CompletionItem[] = [];

		if (!dotTest) {
			if (notDotTest) {
				result = this.mxCompletions;
			}
		} else {
			let theFoundItem = this.mxCompletions.find(item => item.label === util.precWord(lineTillCurrentPosition));
			// if (theFoundItem && theFoundItem.hasOwnProperty('kind')) {
			switch (theFoundItem?.kind) {
				case vscode.CompletionItemKind.Class:
					//console.log(mxClassMembers[theFoundItem.label]);
					result = mxClassMembers?.[theFoundItem.label];
					break;
				case vscode.CompletionItemKind.Struct:
					//console.log(mxStructsMembers[theFoundItem.label]);
					result = mxStructsMembers?.[theFoundItem.label];
					break;
				case vscode.CompletionItemKind.Interface:
					//console.log(mxInterfaceMembers[theFoundItem.label]);
					result = mxInterfaceMembers?.[theFoundItem.label];
					break;
					//default:
						// exit
					//	result = [];
			};
			// };
		}
		return result;
	}
	/**
	 * provideCompletionItems
	 * @param document
	 * @param position
	 * @param token
	 * @param context
	 */
	public provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext): Promise<vscode.CompletionItem[]> {

		return new Promise((resolve, reject) => {
			try {
				resolve(this._provideCompletionItems(document, position));
			} catch (e) {
				reject(e);
			}
		});
	}
}