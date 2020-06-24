'use strict';
// import * as cp from 'child_process';
import {
	CancellationToken,
	Diagnostic,
	DocumentSymbolProvider,
	SymbolInformation,
	DocumentSymbol,
	TextDocument,
	window
} from 'vscode';
import {
	provideParserDiagnostic,
	setDiagnostics,
	provideTokenDiagnostic,
	ParserError
} from './mxsDiagnostics';

import {
	collectStatementsFromCST,
	collectSymbols,
	ReCollectStatementsFromCST,
	ReCollectSymbols,
	collectTokens
} from './mxsProvideSymbols';
import { mxsParseSource } from './mxsParser';

//--------------------------------------------------------------------------------
/**
 * Provide document symbols. Impements the parser.
 * TODO:
 *  - fallback to safe regex match
 *  - implement async version
 * 	- implement child_process
 */
export class mxsDocumentSymbolProvider implements DocumentSymbolProvider
{
	/** Start a parser instance */
	msxParser = new mxsParseSource('');
	/** Current active document */
	activeDocument!: TextDocument | undefined;
	/** Current document symbols */
	// activeDocumentSymbols: SymbolInformation[] = [];

	private async documentSymbolsFromCST(
		document: TextDocument,
		CST: any,
		options = {remapLocations: false}
	):Promise<SymbolInformation[] | DocumentSymbol[]>
	{
		let CSTstatements = ReCollectStatementsFromCST(CST)!;
		let Symbols = await ReCollectSymbols(document, CSTstatements);
		// let CSTstatements = collectStatementsFromCST(CST);		
		// let Symbols = collectSymbols(document, CST, CSTstatements);
		return Symbols;
	}

	private async parseDocument(document: TextDocument):Promise<SymbolInformation[] | DocumentSymbol[]>
	{
		this.activeDocument = undefined;
		return new Promise((resolve, reject) => {
			setTimeout( () => {
				if (window.activeTextEditor?.document == document) {
					this._getDocumentSymbols(document)
						.then(
							result => {
								this.activeDocument = document;
								resolve(result);
							},
							err => reject(err)
						);
				} else {
					reject('document closed');
				}
			}, 500);
		});
	}

	private async _getDocumentSymbols(document: TextDocument)
	{
		let SymbolInfCol: SymbolInformation[] | DocumentSymbol[] = [];
		let diagnostics: Diagnostic[] = [];

		try {
			// console.log('> PARSER MAIN CALL');
			// feed the parser
			this.msxParser.source = document.getText();
			await this.msxParser.ParseSourceAsync();
			// this.documentCST = this.msxParser.parsedCST;
			SymbolInfCol = await this.documentSymbolsFromCST(document, this.msxParser.parsedCST);
			diagnostics.push(...provideTokenDiagnostic(document, collectTokens(this.msxParser.parsedCST, 'type', 'error')));
		} catch (err) {
			// console.log(err);
			if (err.recoverable !== undefined) {
				// console.log('parse error! recover?: '+ err.recoverable);
				if (err.recoverable === true) {
					//recovered from error
					SymbolInfCol = await this.documentSymbolsFromCST(document, this.msxParser.parsedCST,{remapLocations: true});
					diagnostics.push(...provideTokenDiagnostic(document, collectTokens(this.msxParser.parsedCST, 'type', 'error')));
					diagnostics.push(...provideParserDiagnostic(document, <ParserError>err));
					// throw err;
				} else {
					// fatal error
					// console.log('parse error! recover?: '+ err.recoverable);
					diagnostics.push(...provideParserDiagnostic(document, <ParserError>err));
					// throw err;
				}
			} else {
				// not a parser error
				setDiagnostics(document, undefined);
				console.log('ERROR:' + err.message);
				throw err;
			}
		}
		// setDiagnostics
		setDiagnostics(document, diagnostics.length !== 0 ? diagnostics : undefined);
		// return
		// return SymbolInfCol.length > 0 ? SymbolInfCol : undefined;
		// console.log(SymbolInfCol);

		return SymbolInfCol;
	}

	// Function called from Main !!
	public provideDocumentSymbols(document: TextDocument, token: CancellationToken): Thenable<SymbolInformation[] | DocumentSymbol[]>
	{
		return new Promise((resolve, reject) => {
			if (token.isCancellationRequested) {
				setDiagnostics(document, undefined);
				resolve([]);
			}
			this.parseDocument(document)
				.then((symbols) => {
					// console.log(symbols);
					resolve(symbols);
				},
				(err) => {
					console.log('err:'+err);
					reject(err);
				});
			/*
			try {
				// this hack tries to limit the parser execution. will keep it until I find a better solution.
				// if (!document.isDirty || DiagnosticCollection.has(document.uri) ) {
				//	this.activeDocumentSymbols = this._getDocumentSymbols(document);
				// }
				// resolve(this.activeDocumentSymbols);
				resolve(this._getDocumentSymbols(document));
			} catch (err) {
				console.log(err);
				setDiagnostics(document, undefined);
				reject(err);
			}
			*/
		});
	}
}

/**
 * Initialized mxsDocumentSymbolProvider. Intended to be consumed by the SymbolProviders and be persistent for the current editor, i norder to acces it from the minifier
 */
export const mxsDocumentSymbols = new mxsDocumentSymbolProvider();