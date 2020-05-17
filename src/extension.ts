import * as vscode from 'vscode';
import { getTextSel } from './utils';

import mxsCompletion from './mxsAutocomplete';
import mxsOutline from './mxsOutline';
import mxsDefinitions from './mxsDefinitions';
import { DocumentSemanticTokensProvider, legend } from './mxsSemantics';

export const MXS_MODE: vscode.DocumentFilter = { scheme: 'file', language: 'maxscript' };
// this is implemented in contributes languaje-configuration.json
export const LANG_CFG: vscode.LanguageConfiguration = {
	indentationRules: {
		increaseIndentPattern: /\(\[/,
		decreaseIndentPattern: /\)\]/
	}
}
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
export async function msxHelp(help_addr: string) {
	let query = getTextSel();
	// if (query) {
		let uri = vscode.Uri.parse(encodeURI(`${help_addr}?query=${query!}&cg=Scripting%20%26%20Customization`));
		await vscode.commands.executeCommand('vscode.open', uri);
	// }
}

/**
 * This method is called when your extension is activated
 * Your extension is activated the very first time the command is executed
 * @param context
 */
export function activate(context: vscode.ExtensionContext) {

	vscode.languages.setLanguageConfiguration(MXS_MODE.language!, LANG_CFG);
	// MaxScript Help command
	context.subscriptions.push(vscode.commands.registerCommand('mxs.help', () => { msxHelp(help_addr); }));
	// completions
	if (mxsConfig.get('completions',true)) {
		context.subscriptions.push(vscode.languages.registerCompletionItemProvider(MXS_MODE, new mxsCompletion(), '.'));
	}
	// outliner
	if (mxsConfig.get('gotosymbol',true)) {
		context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(MXS_MODE, new mxsOutline()));
	}
	// definition provider
	if (mxsConfig.get('gotodefinition',true) && mxsConfig.get('gotosymbol',true) ) {
		context.subscriptions.push(vscode.languages.registerDefinitionProvider(MXS_MODE, new mxsDefinitions()));
	}
	// semantics
	if (mxsConfig.get('semantics',true)) {
		context.subscriptions.push(vscode.languages.registerDocumentSemanticTokensProvider(MXS_MODE, new DocumentSemanticTokensProvider(), legend));
	}
}
// this method is called when your extension is deactivated
export function deactivate() { }