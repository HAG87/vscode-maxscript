import { window, workspace, Uri } from 'vscode';
import { posix } from 'path';
//--------------------------------------------------------------------------------

import { prefixFile } from './utils';
const { mxsMinify } = require('./lib/mxsCompactCode');
import { mxsDocumentSymbols } from './mxsOutline';
const mxsParseSource = require('./lib/mxsParser');
//--------------------------------------------------------------------------------

async function minifyWriter(fileUri: Uri, parsed: any[], prefix: string) {
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
export async function minifyOpenEditor() {
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
	await minifyWriter(document.uri, parsed, prefix);
	// return;
}
/**
 * Minify a specific file
 * @param fileUri file Uri
 */
export async function minifyFile(fileUri: Uri) {

	try {
		await workspace.fs.stat(fileUri);
	} catch {
		await window.showInformationMessage(`${posix.basename(fileUri.path)} file does *not* exist`);
		return;
	}
	//parse...
	const readData = await workspace.fs.readFile(fileUri);
	const readStr = Buffer.from(readData).toString('utf8');
	// console.log(readStr);
	let parser = new mxsParseSource(readStr);
	let cst = parser.parsedCST;
	// minify
	if (Array.isArray(cst) && cst.length > 0) {
		let prefix = workspace.getConfiguration('maxscript.').get('minprefix', 'min_');
		await minifyWriter(fileUri, cst, prefix);
	}
	/* else {
		window.showErrorMessage(`MaxScript minify failed: ${fileUri.toString(false)} contains errors and can't be minimized.`);
	} */
	return;
}
/**
 * Select files to minify
 */
export async function openAndMinify() {

	let prefix = workspace.getConfiguration('maxscript.').get('minprefix', 'min_');

	async function _minifyFiles(fileUri: Uri, prefix: string) {

		try {
			await workspace.fs.stat(fileUri);
		} catch {
			await window.showInformationMessage(`${posix.basename(fileUri.path)} file does *not* exist`);
			return;
		}
		//parse...
		const readData = await workspace.fs.readFile(fileUri);
		const readStr = Buffer.from(readData).toString('utf8');
		// console.log(readStr);
		let parser = new mxsParseSource(readStr);
		let cst = parser.parsedCST;
		// minify
		if (Array.isArray(cst) && cst.length > 0) {
			await minifyWriter(fileUri, cst, prefix);
		} /*else {
			await window.showErrorMessage(`MaxScript minify failed: ${fileUri.toString(false)} contains errors and can't be minimized.`);
		}*/
		return;
	}
	let files = await window.showOpenDialog({ canSelectMany: true });
	if (files) {
		files.forEach(async fileUri => {
			// check file extension
			let ext = posix.extname(fileUri.path);
			if (ext !== '.ms' && ext !== '.mcr') {
				return;
			}
			await (_minifyFiles(fileUri, prefix));
		});
	}
}
