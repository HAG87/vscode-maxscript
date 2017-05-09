import vscode = require('vscode');
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