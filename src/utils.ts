import {window, Uri} from 'vscode';
import * as fs from 'fs';
import {posix} from 'path';
//--------------------------------------------------------------------------------
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
export function trimString(src: string, substr: string) {
	var start = src.indexOf(substr);
	var end = start + substr.length;
	return src.substring(0, start - 1) + src.substring(end);
}
export function prefixFile(source: Uri, prefix: string) {
	let fName = posix.basename(source.path);
	let newPath = posix.join(source.path,'..', prefix + fName);
	return source.with({path: newPath});
}
