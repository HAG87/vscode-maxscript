'use strict';
import {
	CancellationToken,
	DocumentSemanticTokensProvider,
	SemanticTokens,
	SemanticTokensBuilder,
	SemanticTokensLegend,
	TextDocument
} from 'vscode';
//-------------------------------------------------------------------------------------------------------------
import * as moo from 'moo';
import maxAPI from './schema/mxsAPI';
//-------------------------------------------------------------------------------------------------------------
const caseInsensitiveKeywords = (map: { [k: string]: string | string[] }) => {
	const transform = moo.keywords(map);
	return (text: string) => transform(text.toLowerCase());
};
// This is a simplified ruleset of the parser tokenizer
let lexer = moo.compile({
	// the comments
	commentSL: { match: /--.*$/, lineBreaks: false, },
	commentBLK: { match: /\/\*(?:.|[\n\r])*?\*\//, lineBreaks: true },
	// there is a problem with the strings
	string: [
		{ match: /@"(?:\\"|[^"])*?(?:"|\\")/, lineBreaks: true},
		{ match: /"(?:\\["\\rntsx]|[^"])*?"/, lineBreaks: true},
		// { match: /"""[^]*?"""/, lineBreaks: true, value: x => x.slice(3, -3)},
	],
	//string:  /"(?:\\["\\]|[^\n"\\])*"/,
	// WHITESPACE --  also matches line continuations
	WS: { match: /(?:[ \t]+|(?:[ \t]*?[\\]+[ \t\r\n]*)+?)/, lineBreaks: true },
	// path_name $mounstrosity*/_?
	path: [
		{ match: /[$](?:(?:[A-Za-z0-9_*?/\\]|[.]{3})*)/ },
		{ match: /[$]/ }
	],
	// parameter <param_name>:
	parameter: { match: /[A-Za-z_\u00C0-\u00FF][A-Za-z0-9_\u00C0-\u00FF]*(?=[ \t]*[:])/ },
	param: { match: /:{1}/ },
	property: { match: /\.[A-Za-z_\u00C0-\u00FF][A-Za-z0-9_\u00C0-\u00FF]*/},

	globalTyped: { match: /::[A-Za-z_\u00C0-\u00FF][A-Za-z0-9_\u00C0-\u00FF]*/ },
	// a mounstrosity
	typedIden: { match: /'(?:\\['\\rn]|[^'\\\n])*?'/ },
	// strings ~RESOURCE~
	locale: { match: /~[A-Za-z0-9_]+~/ },
	arraydef: { match: /\#[ \t]*\(/ },
	bitarraydef: { match: /\#[ \t]*\{/ },
	// PARENS
	lparen: '(',
	rparen: ')',
	lbracket: '[',
	rbracket: ']',
	lbrace: '{',
	rbrace: '}',
	time: [
		{ match: /(?:(?:[-]?[0-9]+[.])*[0-9]+[mMsSfFtT])+/ },
		{ match: /(?:(?:[-]?[0-9]+[.])[0-9]*[mMsSfFtT])+/ },
		{ match: /[0-9]+[:][0-9]+[.][0-9]*/ }
	],
	bitrange: { match: /[.]{2}/ },
	hex: { match: /0[xX][0-9a-fA-F]+/ },
	number: [
		{ match: /(?:[-]?[0-9]*)[.](?:[0-9]+(?:[eEdD][+-]?[0-9]+)?)/ },
		{ match: /(?:[-]?[0-9]+\.(?!\.))/ },
		{ match: /[-]?[0-9]+(?:[LP]|[eEdD][+-]?[0-9]+)?/ },
		{ match: /(?:(?<!\.)[-]?\.[0-9]+(?:[eEdD][+-]?[0-9]+)?)/ },
	],
	name:
		[
			{ match: /#[A-Za-z0-9_]+\b/ },
			{ match: /#'[A-Za-z0-9_]+'/ },
		],
	comparison: ['==', '!=', '>', '<', '>=', '<='],
	assign: ['=', '+=', '-=', '*=', '/='],
	math: ['+', '-', '*', '/', '^'],
	delimiter: ['.', ',', ':', ';'],
	// IDENTIFIERS - includes special alphanumeric chars
	identity: {
		match: /[&-]?[A-Za-z_\u00C0-\u00FF][A-Za-z0-9_\u00C0-\u00FF]*/,
		type: caseInsensitiveKeywords(maxAPI)
	},
	NL: { match: /(?:\r|\r\n|\n)+/, lineBreaks: true },
	// [\$?`] COMPLETE WITH UNWANTED CHARS HERE THAT CAN BREAK THE TOKENIZER
	error: [
		{ match: /[¿¡!`´]/, /* error: true  */},
		{ match: /[?\\]{2,}/},
		// { match: /[?]{2,}/},
	],
	// This contains the rest of the stack in case of error.
	fatalError : moo.error
});
//-------------------------------------------------------------------------------------------------------------
const tokenTypes = new Map<string, number>();
const tokenModifiers = new Map<string, number>();
const tokenTypesSet = new Set<string>();

export const legend = (function () {
	const tokenTypesLegend = [
		'comment', 'keyword', 'regexp', 'operator', 'namespace',
		'type', 'struct', 'class', 'interface', 'enum', 'typeParameter', 'function',
		'member', 'macro', 'variable', 'parameter',
		// 'property', 'label',
		//'string', 'number',
	];

	tokenTypesLegend.forEach((tokenType, index) => tokenTypes.set(tokenType, index));
	tokenTypesLegend.forEach(item => tokenTypesSet.add(item));

	const tokenModifiersLegend = [
		'declaration', 'documentation', 'readonly', 'static', 'abstract', 'deprecated',
		'modification', 'async'
	];
	tokenModifiersLegend.forEach((tokenModifier, index) => tokenModifiers.set(tokenModifier, index));

	return new SemanticTokensLegend(tokenTypesLegend, tokenModifiersLegend);
})();

interface IParsedToken {
	line: number;
	startCharacter: number;
	length: number;
	tokenType: string;
	tokenModifiers: string[];
}

export class mxsDocumentSemanticTokensProvider implements DocumentSemanticTokensProvider {
	async provideDocumentSemanticTokens(document: TextDocument, token: CancellationToken): Promise<SemanticTokens> {
		const allTokens = this._parseText(document.getText());

		const builder = new SemanticTokensBuilder();
		allTokens.forEach((token) => {
			builder.push(token.line, token.startCharacter, token.length, this._encodeTokenType(token.tokenType), this._encodeTokenModifiers(token.tokenModifiers));
		});
		return builder.build();
	}
	// This comes directly from the extension-example
	private _encodeTokenType(tokenType: string): number {
		if (tokenTypes.has(tokenType)) {
			return tokenTypes.get(tokenType)!;
		} else if (tokenType === 'notInLegend') {
			return tokenTypes.size + 2;
		}
		return 0;
	}
	// This comes directly from the extension-example
	private _encodeTokenModifiers(strTokenModifiers: string[]): number {
		let result = 0;
		for (let i = 0; i < strTokenModifiers.length; i++) {
			const tokenModifier = strTokenModifiers[i];
			if (tokenModifiers.has(tokenModifier)) {
				result = result | (1 << tokenModifiers.get(tokenModifier)!);
			} else if (tokenModifier === 'notInLegend') {
				result = result | (1 << tokenModifiers.size + 2);
			}
		}
		return result;
	}
	// using moo for tokenizing the source
	private _parseText(text: string): IParsedToken[] {
		let r: IParsedToken[] = [];

		let getTokens = this._tokenize(text);

		getTokens.forEach(token => {
			let typing = token.type.split('_');
			r.push({
				line: token.line - 1,
				startCharacter: token.col - 1,
				length: (token.text.length),
				tokenType: typing[0],
				tokenModifiers: typing.slice(1)
			});
		});
		return r;
	}
	// this will need to catch errors. currently it tries to dump all errors to a token and skip them.
	private _tokenize(text: string): any[] {
		let toks = [];
		let save_state;
		// feed the tokenizer
		lexer.reset(text);
		let _token;

		while (_token = lexer.next()) {
			// filter tokens here
			if (tokenTypesSet.has(_token.type?.split('_')[0]!)) {
				toks.push(_token);
			}
		}
		return toks;
	}
}
