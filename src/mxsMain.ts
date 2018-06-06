'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

//import fs = require('fs');
//import path = require('path');

import { getTextSel, fileExists } from './utils';
import mxsCompletion from './mxsAutocomplete';
import mxsOutline from './mxsOutline';
import msxDefinitions from './mxsDefinitions';

export const MXS_MODE: vscode.DocumentFilter = { scheme: 'file', language: 'maxscript' };

export const LANG_CFG: vscode.LanguageConfiguration = {
	indentationRules: {
		increaseIndentPattern: /^.*(\([^)]*|\b(?:[tT]hen|[eE]lse|[wW]ith|[dD]o|[cC]ollect|of)\b\s*)$/,
		decreaseIndentPattern: /^\s*\)/
	}
	// need to fix this
	// wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
}

export const help_addr: string = 'http://help.autodesk.com/view/3DSMAX/2018/ENU/'
/**
 * MaxScript online help launch at current selected word
 * @param help_addr 
 */
export function msxHelp(help_addr:string)
{
	let query = getTextSel();
	if (query) {
		// open the help
		let url = help_addr + '?query=' + query +'&cg=Scripting%20%26%20Customization';
		let uri = vscode.Uri.parse(encodeURI(url));
		vscode.commands.executeCommand('vscode.open', uri );
		
	}
}
/**
 * This method is called when your extension is activated
 * Your extension is activated the very first time the command is executed
 * @param context 
 */
export function activate(context:vscode.ExtensionContext): void {
    vscode.languages.setLanguageConfiguration(MXS_MODE.language, LANG_CFG);
	// MaxScript Help command
	context.subscriptions.push(vscode.commands.registerCommand('mxs.help', () => {msxHelp(help_addr);}));
	// code completion -- need to check trigger characters
	context.subscriptions.push(vscode.languages.registerCompletionItemProvider(MXS_MODE, new mxsCompletion(),'.','='));
	context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(MXS_MODE,new mxsOutline()));
	context.subscriptions.push(vscode.languages.registerDefinitionProvider(MXS_MODE, new msxDefinitions()));
}
// this method is called when your extension is deactivated
export function deactivate() {}