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
	/**
	 * Minify current editor
	 */
	static async minifyOpenEditor() {
		let parsed = mxsDocumentSymbols.msxParser.parsedCST;
		let document = mxsDocumentSymbols.activeDocument;

		if (!Array.isArray(parsed) || parsed.length === 0) {
			await window.showErrorMessage(`MaxScript minify failed: ${posix.basename(document.uri.path)} contains errors and can't be minimized.`);
			return;
		}
		// check current document here...
		if (document.isDirty) {
			await window.showWarningMessage(`MaxScript minify: Check document edits and save it first.`);
			return;
		}

		let prefix = workspace.getConfiguration('maxscript').get('minprefix', 'min_');
		let newUri = prefixFile(document.uri, prefix);

		// let child = cp.fork(path.join(__dirname, 'MinProc.js'));
		// child.on("message", message => { });
		// child.send({targetUri:newUri, parsed:parsed});

		await mxsMinifier.MinifyParsedDoc(newUri, parsed);

	}

	static async MinifyParsedDoc(fileUri: Uri, parsings:any, prefix?: string) {
		let _prefix = prefix ||  workspace.getConfiguration('maxscript').get('minprefix', 'min_');
		let newUri = prefixFile(fileUri, _prefix);
		try {
			await mxsMinifier.minifyWriter(newUri, parsings);
			await window.showInformationMessage(`MaxScript minify sucess: ${posix.basename(newUri.path)}`);
			return true;
		} catch (err) {
			await window.showErrorMessage(`MaxScript minify failed at: ${posix.basename(newUri.path)}.`);
			throw err;
		}
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
			await window.showInformationMessage(`${posix.basename(fileUri.path)} file does *not* exist`);
			throw err;
		}
		//parse...
		const readData = await workspace.fs.readFile(fileUri);
		const readStr = Buffer.from(readData).toString('utf8');

		let _prefix = prefix ||  workspace.getConfiguration('maxscript').get('minprefix', 'min_');
		let newUri = prefixFile(fileUri, _prefix);
		
		try {
			let parser = new mxsParseSource(readStr);
			let cst = parser.parsedCST;
			// minify
			if (Array.isArray(cst) && cst.length > 0) {
				try {
					await mxsMinifier.minifyWriter(newUri, cst);
					await window.showInformationMessage(`MaxScript minify sucess: ${posix.basename(newUri.path)}`);
					return true;
				} catch (err) {
					await window.showErrorMessage(`MaxScript minify failed at: ${posix.basename(newUri.path)}.`);
					throw err;
				}
			} else {
				throw error;
			}
		} catch (err) {
			await window.showErrorMessage(`MaxScript minify failed: ${posix.basename(fileUri.path)} contains errors and can't be minimized.`);
			throw err;
		}
	}
	/**
	 * Select files to minify
	 */
	static async openAndMinify() {
		let prefix = workspace.getConfiguration('maxscript').get('minprefix', 'min_');
		let files = await window.showOpenDialog({ canSelectMany: true });
		if (files) {
			files.forEach(async fileUri => {
				// check file extension
				let ext = posix.extname(fileUri.path);
				if (ext !== '.ms' && ext !== '.mcr') {
					throw new Error('Invalid file');
				}
				await mxsMinifier.minifyFile(fileUri, prefix);
			});
			return true;
		} else {
			await window.showErrorMessage(`MaxScript minify failed: Unknown error when checking the files.`);
			throw new Error('Unknown error');
		}
		// return false;
	}
}
