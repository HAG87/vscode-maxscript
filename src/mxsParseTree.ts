'use strict';
// import {window} from 'vscode';
// import * as mxsDiagnostics from './mxsDiagnostics';

const mxsParseSource = require('./lib/mxsParser');

export const msxParser = new mxsParseSource('');

/* export const source = (source: string) => {
	try {
		// console.log ('feed parser');
		msxParser.source = source;
		// console.log(msxParser.parsedAST.length);
	} catch (err) {
		// provide-update diagnostics
		// console.log(mxsDiagnostics.parsingErrorMessage(err));
		// console.log(mxsDiagnostics.provideDiagnostic(window.activeTextEditor.document, err));
		throw err;
	}
};
export const ast = () => {
	// console.log(msxParser.parsedAST.length);
	return msxParser.parsedAST;
}; */