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
export function isPositionInString(document: vscode.TextDocument, position: vscode.Position): boolean {
	let lineText = document.lineAt(position.line).text;
	let lineTillCurrentPosition = lineText.substr(0, position.character);

	// Count the number of double quotes in the line till current position. Ignore escaped double quotes
	let doubleQuotesCnt = (lineTillCurrentPosition.match(/[^\\]\"/g) || []).length;
	doubleQuotesCnt += lineTillCurrentPosition.startsWith('\"') ? 1 : 0;
	return doubleQuotesCnt % 2 === 1;
}