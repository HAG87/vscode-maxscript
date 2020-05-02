import vscode = require('vscode');
import fs = require('fs');

export function getTextSel() {
	let editor = vscode.window.activeTextEditor;
	if(!editor) {
		vscode.window.showInformationMessage('No editor is active');
		return;
	}
	let selection = editor.selection;
	let seltext = editor.document.getText(selection);
	if (!seltext) {
		return;
	}
	return seltext;
}

export function fileExists(filePath: string): boolean {
	try {
		return fs.statSync(filePath).isFile();
	} catch (e) {
		return false;
	}
}

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
export function precWord(line: string) {
	let pattern = /(\w+)\.$/g;
	let wordmatches = pattern.exec(line);
	if (!wordmatches) { return; } else { return (wordmatches[wordmatches.length - 1]); }
}
