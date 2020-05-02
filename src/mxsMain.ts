'use strict';
// Imports
import * as vscode from 'vscode';
import { getTextSel, fileExists } from './utils';
// Features
import mxsCompletion from './mxsAutocomplete';
import mxsOutline from './mxsOutline';
import msxDefinitions from './mxsDefinitions';
// Constants
export const MXS_MODE: vscode.DocumentFilter = { scheme: 'file', language: 'maxscript' };
export const LANG_CFG: vscode.LanguageConfiguration = {
	indentationRules: {
		// increaseIndentPattern: /^.*(\([^)]*|\b(?:[tT]hen|[eE]lse|[wW]ith|[dD]o|[cC]ollect|of)\b\s*)$/,
		// decreaseIndentPattern: /^\s*\)/
		increaseIndentPattern: /\(\[/,
		decreaseIndentPattern: /\)\]/
	}
	// wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
}
/**
 * Acces extension settings
 */
let mxsConfig = (vscode.workspace.getConfiguration('maxscript'));

// Commands
let help_addr: string = mxsConfig.get('helpprovider','http://help.autodesk.com/view/3DSMAX/2018/ENU/');
/**
 * MaxScript online help launch at current selected word
 * @param help_addr
 */
export function msxHelp(help_addr:string)
{
	let query = getTextSel();
	if (query) {
		let url = help_addr + '?query=' + query +'&cg=Scripting%20%26%20Customization';
		let uri = vscode.Uri.parse(encodeURI(url));
		vscode.commands.executeCommand('vscode.open', uri );

	}
}

// language extensions
/**
 * This method is called when your extension is activated
 * Your extension is activated the very first time the command is executed
 * @param context
 */
export function activate(context:vscode.ExtensionContext): void {

	vscode.languages.setLanguageConfiguration(MXS_MODE.language, LANG_CFG);

	// MaxScript Help command
	context.subscriptions.push(vscode.commands.registerCommand('mxs.help', () => {msxHelp(help_addr);}));

	// completion provider
	if (mxsConfig.get('completions',true)) {
		context.subscriptions.push(vscode.languages.registerCompletionItemProvider(MXS_MODE, new mxsCompletion(),'.'));
	}

	// symbol provider
	context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(MXS_MODE, new mxsOutline()));

	// definition provider
	if (mxsConfig.get('gotodefinition',true) && mxsConfig.get('gotosymbol',true) ) {
		context.subscriptions.push(vscode.languages.registerDefinitionProvider(MXS_MODE, new msxDefinitions()));
	}

}
// this method is called when your extension is deactivated
export function deactivate() {}