'use strict';
import {
	CancellationToken,
	CompletionContext,
	CompletionItem,
	CompletionItemKind,
	CompletionItemProvider,
	Position,
	TextDocument
} from 'vscode';

import { maxCompletions } from './schema/mxsSchema';
import { mxClassMembers } from './schema/mxsSchema-clases';
import { mxInterfaceMembers } from './schema/mxsSchema-interfaces';
import { mxStructsMembers } from './schema/msxSchema-structs';

/** A static collection of completion items*/
const mxCompletions = new Array<CompletionItem>(...maxCompletions);
/**
 * ItemProvider class
 */
export default class mxsCompletion implements CompletionItemProvider {
	/** A static collection of completion items*/
	// private mxCompletions = new Array<CompletionItem>(...maxCompletions);
	/**
	 * Retrieve the completion items, search for descendant completion items.
	 * @param document
	 * @param position
	 */
	private _provideCompletionItems(document: TextDocument, position: Position): CompletionItem[] {

		let lineText = document.lineAt(position.line).text;
		let lineTillCurrentPosition = lineText.substr(0, position.character);

		// escape strings - NOT WORKING RIGHT
		// if (!(util.isPositionInString(lineTillCurrentPosition))) {
		// 	return [];
		// }
	
		let dotPattern = /([A-Za-z_][A-Za-z0-9_]+)[.]$/mi;
		let termMatch = dotPattern.exec(lineTillCurrentPosition);
		let result: CompletionItem[] = [];

		if (termMatch) {
			let theFoundItem = mxCompletions.find(item => item.label === termMatch![1]);
			switch (theFoundItem?.kind) {
				case CompletionItemKind.Class:
					//console.log(mxClassMembers[theFoundItem.label]);
					result = mxClassMembers?.[theFoundItem.label];
					break;
				case CompletionItemKind.Struct:
					//console.log(mxStructsMembers[theFoundItem.label]);
					result = mxStructsMembers?.[theFoundItem.label];
					break;
				case CompletionItemKind.Interface:
					//console.log(mxInterfaceMembers[theFoundItem.label]);
					result = mxInterfaceMembers?.[theFoundItem.label];
					break;
			};
		} else {
			result = mxCompletions;
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
		document: TextDocument,
		position: Position,
		token: CancellationToken,
		context: CompletionContext):Thenable<CompletionItem[]> {

		return new Promise((resolve, reject) => {
			try {
				resolve(this._provideCompletionItems(document, position));
			} catch (e) {
				reject(e);
			}
		});
	}
}