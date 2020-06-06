"use strict";
import { window, workspace, Uri } from 'vscode';
import { posix } from 'path';
//--------------------------------------------------------------------------------
import { prefixFile } from './utils';
import { mxsDocumentSymbols } from './mxsOutline';
const { mxsMinify } = require('./lib/mxsCompactCode');
// const mxsParseSource = require('./lib/mxsParser');
import { mxsParseSource } from './mxsParser';
import { error } from 'moo';


export default class mxsMinifier {
	//--------------------------------------------------------------------------------
	private static async minifyWriter(fileUri: Uri, parsed: any[], prefix: string) {
		let newUri = prefixFile(fileUri, prefix);
		try {
			let min: string = mxsMinify(parsed);
			await workspace.fs.writeFile(newUri, Buffer.from(min, 'utf8'));
			await window.showInformationMessage(`MaxScript minify sucess: ${posix.basename(newUri.path)}`);
		}
		catch (err) {
			// console.log(err);
			await window.showErrorMessage(`MaxScript minify failed at: ${posix.basename(newUri.path)}.`);
			throw err;
		}
	}
	/**
	 * Minify current editor
	 */
	static async minifyOpenEditor() {
		let parsed = mxsDocumentSymbols.msxParser.parsedCST;
		let document = mxsDocumentSymbols.ActiveDocument;

		if (!Array.isArray(parsed) || parsed.length === 0) {
			await window.showErrorMessage(`MaxScript minify failed: ${posix.basename(document.uri.path)} contains errors and can't be minimized.`);
			return;
		}
		// check current document here...
		if (document.isDirty) {
			await window.showWarningMessage(`MaxScript minify: Check document edits and save it first.`);
			return;
		}
		let prefix = workspace.getConfiguration('maxscript.').get('minprefix', 'min_');
		await mxsMinifier.minifyWriter(document.uri, parsed, prefix);
		// return;
	}
	/**
	 * Minify a specific file
	 * @param fileUri file Uri
	 */
	static async minifyFile(fileUri: Uri, prefix?: string) {
		// console.log(fileUri);
		try {
			await workspace.fs.stat(fileUri);
		} catch {
			await window.showInformationMessage(`${posix.basename(fileUri.path)} file does *not* exist`);
			return;
		}
		//parse...
		const readData = await workspace.fs.readFile(fileUri);
		const readStr = Buffer.from(readData).toString('utf8');
		let _prefix = prefix ||  workspace.getConfiguration('maxscript.').get('minprefix', 'min_');
		// console.log(readStr);
		try {
			let parser = new mxsParseSource(readStr);
			let cst = parser.parsedCST;
			// minify
			if (Array.isArray(cst) && cst.length > 0) {
				await mxsMinifier.minifyWriter(fileUri, cst, _prefix);
			} else {
				throw error;
			}
		} catch (err) {
			// console.log(err);
			await window.showErrorMessage(`MaxScript minify failed: ${posix.basename(fileUri.path)} contains errors and can't be minimized.`);
		}
		return;
	}
	/**
	 * Select files to minify
	 */
	static async openAndMinify() {
		let prefix = workspace.getConfiguration('maxscript.').get('minprefix', 'min_');

		let files = await window.showOpenDialog({ canSelectMany: true });
		if (files) {
			files.forEach(async fileUri => {
				// check file extension
				let ext = posix.extname(fileUri.path);
				if (ext !== '.ms' && ext !== '.mcr') {
					return;
				}
				await mxsMinifier.minifyFile(fileUri, prefix);
			});
		}
	}
}
