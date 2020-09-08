"use strict";
import { window, workspace, Uri } from 'vscode';
import {posix} from 'path';
// import * as path from 'path';
// import {fork} from 'child_process';
//--------------------------------------------------------------------------------
import { prefixFile } from './utils';
import { mxsDocumentSymbols } from './mxsOutline';
const { mxsMinify } = require('./lib/mxsCompactCode');
import { mxsParseSource } from './mxsParser';
import { error } from 'moo';

export default class mxsMinifier {
	// private prefix = workspace.getConfiguration('maxscript').get('minprefix', 'min_');
	//--------------------------------------------------------------------------------
	private static async minifyWriter(targetUri: Uri, parsed: any[]) {
		let min: string = mxsMinify(parsed);
		await workspace.fs.writeFile(targetUri, Buffer.from(min, 'utf8'));
	}
	static async MinifyParsedDoc(fileUri: Uri, parsings:any, prefix?: string) {
		let _prefix = prefix ||  workspace.getConfiguration('maxscript').get('minprefix', 'min_');
		
		// console.log('prefix: '+_prefix);

		let newUri = prefixFile(fileUri, _prefix);
		try {
			await mxsMinifier.minifyWriter(newUri, parsings);
			window.showInformationMessage(`MaxScript minify sucess: ${posix.basename(newUri.path)}`);
			return true;
		} catch (err) {
			window.showErrorMessage(`MaxScript minify failed at: ${posix.basename(newUri.path)}.`);
			throw err;
		}
	}
	/**
	 * Minify current editor
	 */
	static async minifyOpenEditor() {
		let document = mxsDocumentSymbols.activeDocument;
		if (!document) { return;}
		let parsed = mxsDocumentSymbols.msxParser.parsedCST;

		if (!parsed) {
			window.showErrorMessage(`MaxScript minify failed: ${posix.basename(document.uri.path)} contains errors and can't be minimized.`);
			return;
		}
		// check current document here...
		if (document.isDirty) {
			window.showWarningMessage(`MaxScript minify: Check document edits and save it first.`);
			return;
		}

		let prefix = workspace.getConfiguration('maxscript').get('minprefix', 'min_');
		// let newUri = prefixFile(document.uri, prefix);

		// let child = cp.fork(path.join(__dirname, 'MinProc.js'));
		// child.on("message", message => { });
		// child.send({targetUri:newUri, parsed:parsed});

		await mxsMinifier.MinifyParsedDoc(document.uri, parsed, prefix);
	}
	/**
	 * Minify a specific file
	 * @param fileUri file Uri
	 */
	static async minifyFile(fileUri: Uri, prefix?: string) {
		// console.log(fileUri);
		try {
			await workspace.fs.stat(fileUri);
		} catch (err) {
			window.showInformationMessage(`${posix.basename(fileUri.path)} file does *not* exist`);
			throw err;
		}
		//parse...
		const readData = await workspace.fs.readFile(fileUri);
		const readStr = Buffer.from(readData).toString('utf8');

		let _prefix = prefix ||  workspace.getConfiguration('maxscript').get('minprefix', 'min_');
		let newUri = prefixFile(fileUri, _prefix);
		
		try {
			let parser = new mxsParseSource(readStr);
			await parser.ParseSourceAsync();
			
			let cst = parser.parsedCST;
			// minify
			if (Array.isArray(cst) && cst.length > 0) {
				try {
					// MAIN ACTION
					await mxsMinifier.minifyWriter(newUri, cst);

					window.showInformationMessage(`MaxScript minify sucess: ${posix.basename(newUri.path)}`);
					return true;
				} catch (err) {
					window.showErrorMessage(`MaxScript minify failed at: ${posix.basename(newUri.path)}.`);
					throw err;
				}
			} else {
				throw error;
			}
		} catch (err) {
			window.showErrorMessage(`MaxScript minify failed: ${posix.basename(fileUri.path)} contains errors and can't be minimized.`);
			throw err;
		}
	}
	/**
	 * Select files to minify
	 */
	static async openAndMinify() {
		let prefix = workspace.getConfiguration('maxscript').get('minprefix', 'min_');
		let files = await window.showOpenDialog({ canSelectMany: true });

		// console.log(files);

		if (files) {
			for (const file of files) {
				// check file extension
				let ext = posix.extname(file.fsPath);
				
				if (ext !== '.ms' && ext !== '.mcr') {
					window.showErrorMessage(`MaxScript minify: Invalid file: ${posix.basename(file.path)}.`);
					continue;
					// throw new Error('Invalid file');
				}
				console.log('File proccess start: ' + file.path);
				// MAIN ACTION
				await mxsMinifier.minifyFile(file, prefix);

				console.log('File proccess end.');
			}
			return true;
		} else {
			window.showErrorMessage(`MaxScript minify failed: Unknown error when checking the files.`);
			throw new Error('Unknown error');
		}
		// return false;
	}
}
