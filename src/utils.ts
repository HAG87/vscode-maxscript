import {window} from 'vscode';
import * as fs from 'fs';

export function getTextSel(editor = window.activeTextEditor) {
	if(!editor) {
		window.showInformationMessage('No editor is active');
		return;
	}
	let seltext = editor.document.getText(editor.selection);
	return seltext;
}

export const fileExists = (filePath: string): boolean => fs.statSync(filePath).isFile();

/**
 * Check if the current Document position line is inside a "string" object
 * @param feed
 */
export function isPositionInString(feed: string): boolean {

	// Count the number of double quotes in the string. Ignore escaped double quotes
	let doubleQuotesCnt = (feed.match(/[^\\]\"/g) || []).length;
	doubleQuotesCnt += feed.startsWith('\"') ? 1 : 0;
	return doubleQuotesCnt % 2 === 1;
}

/**
 * find word before dot character, if any
 * @param line
 */
export function precWord(line: string):string | undefined {
	let pattern = /(\w+)\.$/g;
	let wordmatches = pattern.exec(line);
	return (wordmatches?.[wordmatches.length - 1]);
}
