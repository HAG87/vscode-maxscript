'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import fs = require('fs');
//import path = require('path');
//import cp = require('child_process');
import { getTextSel } from './utils';

export const MXS_MODE: vscode.DocumentFilter = { language: 'maxscript', scheme: 'file' };
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context:vscode.ExtensionContext): void {

    vscode.languages.setLanguageConfiguration(MXS_MODE.language, {
		indentationRules: {

            increaseIndentPattern: /^.*(\([^)]*|\b(?:[tT]hen|[eE]lse|[wW]ith|[dD]o|[cC]ollect)\b\s*)$/,
		    decreaseIndentPattern: /^\s*\)/
		}
		//wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
	});

   context.subscriptions.push(vscode.commands.registerCommand('mxs.help', () => {
    	let help_addr = 'http://help.autodesk.com/view/3DSMAX/2018/ENU/';
		let query = getTextSel();
		if (query) {
			// open the help
			let url = help_addr + '?query=' + query +'&cg=Scripting%20%26%20Customization';
			let uri = vscode.Uri.parse(encodeURI(url));
			vscode.commands.executeCommand('vscode.open', uri );
			
		}
    }));

    //context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(MXS_MODE, new mxsDocumentSymbolProvider()));
}

// this method is called when your extension is deactivated
export function deactivate() {}