'use strict';
import * as vscode from 'vscode';
import { getTextSel } from './utils';

import mxsCompletion from './mxsAutocomplete';

import mxsDefinitions from './mxsDefinitions';
import { mxsDocumentSymbols } from './mxsOutline';
import { DocumentSemanticTokensProvider, legend } from './mxsSemantics';
import { DiagnosticCollection }  from './mxsDiagnostics';
import mxsMinifier from './mxsMin';

export const MXS_MODE: vscode.DocumentFilter = { scheme: 'file', language: 'maxscript' };
// this is implemented in contributes languaje-configuration.json
export const LANG_CFG: vscode.LanguageConfiguration = {
	indentationRules: {
		increaseIndentPattern: /\(\[/,
		decreaseIndentPattern: /\)\]/
	}
};
/**
 * Acces extension settings
 */
let mxsConfig = (vscode.workspace.getConfiguration('maxscript'));

// Commands
let help_addr: string = mxsConfig.get('helpprovider', 'http://help.autodesk.com/view/3DSMAX/2018/ENU/');
/**
 * MaxScript online help launch at current selected word
 * @param help_addr Addess of the help page
 */
export async function msxHelp(textEditor: vscode.TextEditor, help_addr: string) {
	let query = getTextSel(textEditor);
	// if (query) {
	let uri = vscode.Uri.parse(encodeURI(`${help_addr}?query=${query!}&cg=Scripting%20%26%20Customization`));
	await vscode.commands.executeCommand('vscode.open', uri);
	// }
}
/*
export function subscribeToDocumentChanges(context: vscode.ExtensionContext, emojiDiagnostics: vscode.DiagnosticCollection): void {
	if (vscode.window.activeTextEditor) {
		refreshDiagnostics(vscode.window.activeTextEditor.document, emojiDiagnostics);
	}
	context.subscriptions.push(
		vscode.window.onDidChangeActiveTextEditor(editor => {
			if (editor) {
				refreshDiagnostics(editor.document, emojiDiagnostics);
			}
		})
	);

	context.subscriptions.push(
		vscode.workspace.onDidChangeTextDocument(e => refreshDiagnostics(e.document, emojiDiagnostics))
	);

	context.subscriptions.push(
		vscode.workspace.onDidCloseTextDocument(doc => emojiDiagnostics.delete(doc.uri))
	);

}
/**
 * This method is called when your extension is activated
 * Your extension is activated the very first time the command is executed
 * @param context
 */
export function activate(context: vscode.ExtensionContext) {

	// const providerRegistrations = vscode.Disposable.from()
	vscode.languages.setLanguageConfiguration(MXS_MODE.language!, LANG_CFG);

	// MaxScript Help command
	context.subscriptions.push(vscode.commands.registerTextEditorCommand('mxs.help', (textEditor) => { msxHelp(textEditor, help_addr); }));
	// completions
	if (mxsConfig.get('completions', true)) {
		context.subscriptions.push(vscode.languages.registerCompletionItemProvider(MXS_MODE, new mxsCompletion(), '.'));
	}
	// outliner
	if (mxsConfig.get('gotosymbol', true)) {
		/*
		let dipoasable = vscode.workspace.onDidChangeTextDocument( (e) => {

		}, null, context.subscriptions);
		*/
		context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(MXS_MODE, mxsDocumentSymbols));
	}
	/*
	// Diagnostics are handled by the parser.
	context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(editor => {
		if (editor) {
			// updateDiagnostics(editor.document, collection);
			DiagnosticCollection;

		}
	}));
	*/
	// Diagnostics
	if (mxsConfig.get('diagnostics', true) && mxsConfig.get('gotosymbol', true)) {
		context.subscriptions.push(DiagnosticCollection);
	}
	// definition provider
	if (mxsConfig.get('gotodefinition', true) && mxsConfig.get('gotosymbol', true)) {
		context.subscriptions.push(vscode.languages.registerDefinitionProvider(MXS_MODE, new mxsDefinitions()));
	}
	// semantics
	if (mxsConfig.get('semantics', true)) {
		context.subscriptions.push(vscode.languages.registerDocumentSemanticTokensProvider(MXS_MODE, new DocumentSemanticTokensProvider(), legend));
	}
	// Minify
	context.subscriptions.push(
		vscode.commands.registerTextEditorCommand('mxs.minify', mxsMinifier.minifyOpenEditor),
		vscode.commands.registerCommand('mxs.minify.file', (fileUri) => {mxsMinifier.minifyFile(fileUri);}),
		vscode.commands.registerCommand('mxs.minify.files', mxsMinifier.openAndMinify)
	);
}
// this method is called when your extension is deactivated
export function deactivate() { }