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
	// Array to store results
	let resultCompletionItems = new Array<vscode.CompletionItem>();
	// Loop through Types
	mxsSchema.maxcompletion.forEach(cat => {
		let catKind = cat.kind;
		let catDescription = cat.desc;
		// let currentCompletion = element.api.forEach(item => {
		cat.api.forEach(item => {
			// failsafe
			if (!item.hasOwnProperty('name')) return;
			
			let itemKind = (item.hasOwnProperty('kind')) ? item.kind : catKind;
			let itemDescription = (item.hasOwnProperty('desc')) ? item.desc : catDescription;
			
			let nameType = typeof item.name;
			if (nameType === 'string') {
				let completionItem = new vscode.CompletionItem(item.name, itemKind);
				completionItem.detail = itemDescription
				resultCompletionItems.push(completionItem);
			} else if (nameType === 'object') {
				// for array of names
				if (Array.isArray(item.name)) {
					let completionItemCol = item.name.map(name => {
						// can be string or object
						let nameItemType = typeof name;
						if (nameItemType === 'string') {
							let completionItem = new vscode.CompletionItem(name, itemKind);
							completionItem.detail = itemDescription;
							return completionItem;
						}
					});
					resultCompletionItems = resultCompletionItems.concat(completionItemCol);
				} else {
					// implement for objects
				}
			}
/* 			if (item.hasOwnProperty('name')) {
				let completionItem = new vscode.CompletionItem(item.name, itemKind);
				completionItem.detail = itemDescription
				// return completionItem;
				resultCompletionItems.push(completionItem);
			} else if (item.hasOwnProperty('names')) {
				let completionItemCol = item.names.map((name) => {
					let completionItem = new vscode.CompletionItem(name, itemKind);
					completionItem.detail = itemDescription;
					return completionItem;
				});
				// return completionItemCol;
				resultCompletionItems = resultCompletionItems.concat(completionItemCol);
			} */		
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

	mxsSchema.maxcompletion.forEach(cat => {
		// Find the entries with name matching declaration
		let theFoundItem = cat.api.find(item => item.name === currentWord);
		if (theFoundItem) {
			Object.getOwnPropertyNames(theFoundItem).forEach(key => {

				let item = theFoundItem[key];
				// just for properties containing an object
				// failsafe
				if (!(item instanceof Object && item.hasOwnProperty('name'))) return;
				
				let itemKind = item.hasOwnProperty('kind') ? item.kind : cat.kind;

				let nameType = typeof item.name;
				if (nameType === 'string') {
					let completionItem = new vscode.CompletionItem(item.name, itemKind);
					CompletionItems.push(completionItem);
				} else {
					let completionItemCol = item.name.map(name => {
						// no need to check if its an array, just try to retrieve the property
						let itemName = (name.hasOwnProperty('name')) ? name.name : name;
						let completionItem = new vscode.CompletionItem(itemName, itemKind);
						if (name.hasOwnProperty('desc')) { completionItem.detail = name.desc }
						return completionItem;
					});
					CompletionItems = CompletionItems.concat(completionItemCol);
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
		if (currentWord.match(/^\d+$/)) { return []; }
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
		let mxsConfig = (vscode.workspace.getConfiguration('maxscript'));
		return new Promise((resolve, reject) => {
			if (!mxsConfig.get('completions',true)) {reject('maxScript Completion disabled');}
			try {
				resolve (this.provideCompletionItemsInternal(document, position, token));
			} catch (e) {
				reject (e);
			}
		});	
	}
}