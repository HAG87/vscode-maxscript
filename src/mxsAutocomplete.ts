import * as vscode from 'vscode';
import * as mxsSchema from './schema/mxsSchema';
import { isPositionInString } from './utils';

/**
 * find word before dot
 * @param line 
 */
export function precWord(line: string) {
	let pattern = /(\w+)\.$/g;
	let wordmatches = pattern.exec(line);
	if (!wordmatches) { return; } else { return (wordmatches[wordmatches.length - 1]); }
}

/**
 * Retrieve Completion Items List
 * @param mxsSchema
 */
export function MXScompletionItems(mxsSchema): vscode.CompletionItem[] {
	//export const MXScompletionItems = ((mxsSchema): vscode.CompletionItem[] => {
	// Array to store results
	let resultCompletionItems = new Array<vscode.CompletionItem>();
	// Loop through Types
	mxsSchema.maxcompletion.forEach(cat => {
		let catKind = cat.kind;
		let catDescription = cat.desc;

		// let currentCompletion = element.api.forEach(item => {
		cat.api.forEach(item => {

			let itemKind = (item.hasOwnProperty('kind')) ? item.kind : catKind;
			let itemDescription = (item.hasOwnProperty('desc')) ? item.desc : catDescription;

			if (item.hasOwnProperty('name')) {
				let completionItem = new vscode.CompletionItem(item.name, itemKind);
				completionItem.detail = itemDescription
				// return completionItem;
				resultCompletionItems.push(completionItem);
			} else if (item.hasOwnProperty('names')) {
				// /*
				let completionItemCol = item.names.map((name) => {
					let completionItem = new vscode.CompletionItem(name, itemKind);
					completionItem.detail = itemDescription;
					return completionItem;
				});
				// return completionItemCol;
				resultCompletionItems = resultCompletionItems.concat(completionItemCol);
				// */
			}
		});
		// resultCompletionItems = resultCompletionItems.concat(currentCompletion);
	});
	return resultCompletionItems;
}

export const MXScompletionItemsList = MXScompletionItems(mxsSchema);

/**
 * component members...
 * @param mxsSchema 
 * @param currentWord 
 */
export function componentSchema(mxsSchema, currentWord: string): vscode.CompletionItem[] {

	let CompletionItems = new Array<vscode.CompletionItem>();

	mxsSchema.maxcompletion.forEach(elem => {
		// Find the entries with name matching declaration
		let theFoundItem = elem.api.find(item => item.name === currentWord);
		if (theFoundItem) {
			Object.getOwnPropertyNames(theFoundItem).forEach(key => {

				let obj = theFoundItem[key];

				if (obj instanceof Object) {
					let completionItemCol = new Array<vscode.CompletionItem>();
					let itemKind = (obj.hasOwnProperty('kind') ? obj.kind : elem.kind);

					if (obj.hasOwnProperty('names')) {

						completionItemCol = obj.names.map(name => {

							let itemName = (name.hasOwnProperty('name')) ? name.name : name;
							let completionItem = new vscode.CompletionItem(itemName, itemKind);
							if (name.hasOwnProperty('desc')) { completionItem.detail = name.desc }

							return completionItem;
						});

						CompletionItems = CompletionItems.concat(completionItemCol);
					}
				}
			});
		}
	});
	return CompletionItems;
}

/**
 * ItemProvider class
 */
export default class mxsCompletion implements vscode.CompletionItemProvider {
	/*
	public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.CompletionItem[] {
		return this.provideCompletionItemsInternal(document, position, token);
	}
	*/
	public provideCompletionItemsInternal(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.CompletionItem[] {
		// current line
		let filename = document.fileName;
		let lineText = document.lineAt(position.line).text;
		let lineTillCurrentPosition = lineText.substr(0, position.character);
		// escape strings
		let inString = isPositionInString(document, position);
		if (!inString && lineTillCurrentPosition.endsWith('\"')) {
			return [];
		}
		// get current word
		let wordAtPosition = document.getWordRangeAtPosition(position);
		let currentWord = '';
		if (wordAtPosition && wordAtPosition.start.character < position.character) {
			let word = document.getText(wordAtPosition);
			currentWord = word.substr(0, position.character - wordAtPosition.start.character);
		}
		// escape numbers
		if (currentWord.match(/^\d+$/)) {
			return [];
		}
		// test if currPos is after dot
		let dotPattern = /\w+[.]\w*?$/;
		let notDotPattern = /[^.]\w+$/;
		let dotTest = dotPattern.test(lineTillCurrentPosition);
		let notDotTest = notDotPattern.test(lineTillCurrentPosition);

		let Completions = new Array<vscode.CompletionItem>();

		if (!dotTest) {
			if (notDotTest) {
				// componets : struct | class | interface
				Completions = MXScompletionItems(mxsSchema);
			}
		} else {
			// properties | methods | members
			let pre = precWord(lineTillCurrentPosition);
			Completions = componentSchema(mxsSchema, pre);
		}
		return Completions;
	}
	public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Thenable<vscode.CompletionItem[]> {
		return new Promise((resolve, reject) => {
			try {
				let theCompletionItems = this.provideCompletionItemsInternal(document, position, token);
				resolve (theCompletionItems);
			} catch (e) {
				reject (e);
			}
		});	
	}
}