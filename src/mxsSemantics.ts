import * as vscode from 'vscode';

import * as moo from 'moo';
import maxAPI from './schema/mxsAPI';
// import { TextDocumentSaveReason } from 'vscode';
/*
import {
    otherprimitives,
    superclass,
    systemvars,
    primitiveclass,
    generictypes
} from './schema/mxsKeywords';
const keywordsDB = {
    kw_primitive: otherprimitives,
    kw_superclass: superclass,
    kw_system: systemvars,
    kw_class: primitiveclass,
    kw_types: generictypes
 };
*/
//-------------------------------------------------------------------------------------------------------------
const caseInsensitiveKeywords = (map: { [k: string]: string | string[]; }) => {
    const transform = moo.keywords(map)
    return (text: string) => transform(text.toLowerCase())
}
let lexer = moo.compile({
    //WS:      /[ \t]+/,
    //string:  /"(?:\\["\\]|[^\n"\\])*"/,
    WS: { match: /(?:[ \t]+|(?:[ \t]*?[\\]+[ \t\r\n;]*)+?)/, lineBreaks: true },

    string: [
        { match: /"(?:\\["\\rn]|[^"\\])*?"/ },
        { match: /@"[^"\\]*(?:\\.[^"\\]*)*"/ },
        { match: /"""[^]*?"""/, lineBreaks: true },
    ],
    // path_name $mounstrosity*/_?
    path: [
        { match: /[$](?:[A-Za-z0-9_\*\?\.\\]*)/ },
        { match: /[$](?:'[^'\r\n]+?')/ },
    ],
    // parameter <param_name>:
    params: { match: /[A-Za-z_\u00C0-\u00FF][A-Za-z0-9_\u00C0-\u00FF]*[:]/ },
    // param: {match: /\:{1}/},
    global_typed: { match: /::[A-Za-z_\u00C0-\u00FF][A-Za-z0-9_\u00C0-\u00FF]*/ },
    // IDENTIFIERS
    // includes special alphanumeric chars
    identity: {
        match: /[&-\.]?[A-Za-z_\u00C0-\u00FF][A-Za-z0-9_\u00C0-\u00FF]*/,
        type: caseInsensitiveKeywords(maxAPI)
    },
    // a mounstrosity
    typed_iden: { match: /'(?:\\['\\rn]|[^'\\\n])*?'/ },
    // the comments
    comment_SL: { match: /--.*$/, lineBreaks: false, },
    comment_BLK: { match: /\/\*(?:.|[\n\r])*?\*\//, lineBreaks: true },
    // strings ~RESOURCE~
    locale: { match: /~[A-Za-z0-9_]+~/ },
    // WHITESPACE -- Should go higher on the chain??
    // also matches line continuations
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
    number: [
        { match: /(?:[-]?[0-9]*[.][0-9]+[eEdD][+-]?[0-9]+)/ },
        { match: /(?:[-]?[0-9]+[eEdD][+-]?[0-9]+)/ },
        { match: /(?:(?:[-]?[0-9]+)?\.[0-9]+)/ },
        { match: /(?:[-]?[0-9]+\.(?:[0-9]+)?)/ },
        { match: /[-]?[0-9]+[LP]?/ },
    ],
    hex: { match: /0[xX][0-9a-fA-F]+/ },
    name:
        [
            { match: /#[A-Za-z0-9_]+\b/ },
            { match: /#'[A-Za-z0-9_]+'/ },
        ],
    comparison: ['==', '!=', '>', '<', '>=', '<='],
    assign: ['=', '+=', '-=', '*=', '/='],
    math: ['+', '-', '*', '/', '^'],
    delimiter: ['.', ',', ':'],
    NL: { match: /(?:\r|\r\n|\n)+/, lineBreaks: true },
    // [\$?`] COMPLETE WITH UNWANTED CHARS HERE THAT CAN BREAK THE TOKENIZER
    error: { match: /[¿¡!`]/, error: true },
})
//-------------------------------------------------------------------------------------------------------------
const tokenTypesLegend = [
    'variable',
    'type',
    'function',
    'class',
    'superclass',
    'interface',
    'struct',
];
const tokenTypesSet = new Set<string>(tokenTypesLegend);

const tokenTypes = new Map<string, number>();
const tokenModifiers = new Map<string, number>();

export const legend = (function () {
    tokenTypesLegend.forEach((tokenType, index) => tokenTypes.set(tokenType, index + 1));
    //*
    const tokenModifiersLegend = [
    	'generic', 'primitive', 'system', 'constant', 'readonly', 'deprecated',
    ];
    tokenModifiersLegend.forEach((tokenModifier, index) => tokenModifiers.set(tokenModifier, index));
    //*/
    return new vscode.SemanticTokensLegend(tokenTypesLegend, []);
})();
//-------------------------------------------------------------------------------------------------------------
/*
export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.languages.registerDocumentSemanticTokensProvider({ language: 'maxscript' }, new DocumentSemanticTokensProvider(), legend));
}
// */
//-------------------------------------------------------------------------------------------------------------
interface IParsedToken {
    line: number;
    startCharacter: number;
    length: number;
    tokenType: string;
    tokenModifiers: string[];
}
//-------------------------------------------------------------------------------------------------------------
// class DocumentSemanticTokensProvider {
export class DocumentSemanticTokensProvider implements vscode.DocumentSemanticTokensProvider {

    async provideDocumentSemanticTokens(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.SemanticTokens> {
        //*
        const allTokens = this._parseText(document.getText());
        const builder = new vscode.SemanticTokensBuilder();
        // /*
        allTokens.forEach((token) => {
            builder.push(token.line, token.startCharacter, token.length, this._encodeTokenType(token.tokenType), this._encodeTokenModifiers(token.tokenModifiers));
        });
        // */
        return builder.build();

        //*/
    }

	private _encodeTokenType(tokenType: string): number {
		if (tokenTypes.has(tokenType)) {
			return tokenTypes.get(tokenType)!;
		} else if (tokenType === 'notInLegend') {
			return tokenTypes.size + 2;
		}
		return 0;
	}

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
    /*
	private _parseText(text: string): IParsedToken[] {
		let r: IParsedToken[] = [];
		let lines = text.split(/\r\n|\r|\n/);
		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];
			let currentOffset = 0;
			do {
				const openOffset = line.indexOf('[', currentOffset);
				if (openOffset === -1) {
					break;
				}
				const closeOffset = line.indexOf(']', openOffset);
				if (closeOffset === -1) {
					break;
				}
				let tokenData = this._parseTextToken(line.substring(openOffset + 1, closeOffset));
				r.push({
					line: i,
					startCharacter: openOffset + 1,
					length: closeOffset - openOffset - 1,
					tokenType: tokenData.tokenType,
					tokenModifiers: tokenData.tokenModifiers
				});
				currentOffset = closeOffset;
			} while (true);
		}
		return r;
	}

	private _parseTextToken(text: string): { tokenType: string; tokenModifiers: string[]; } {
		let parts = text.split('.');
		return {
			tokenType: parts[0],
			tokenModifiers: parts.slice(1)
		};
    }
    */
    private _parseText(text:string) {
        let r: IParsedToken[] = [];

        // tokenize source
        // let tokenizedText = this._tokenize(text);
        // filter tokens
        // let validTokens = this._filterTokens(tokenizedText);
        let getTokens = this._tokenize(text);

        getTokens.forEach(token => r.push({
            line: token.line,
            startCharacter: token.offset - 1,
            length: token.offset + (token.text.length - 1),
            tokenType: token.type,
            tokenModifiers: []
        }));
        return r;
    }

    private _filterTokens(tokens: any[]) {
        return tokens.filter(token => tokenTypesSet.has(token.type));
    }

    private _tokenize(text: string) {
        try {
            // feed the tokenizer
            lexer.reset(text);

            let token: moo.Token;
            let toks = [];

            while (token = lexer.next()) {
                // filter tokens here
                if (tokenTypesSet.has(token.type)) {
                    toks.push(token);
                }
            }
            return toks;
        } catch (err) {
            // just rethrow...
            throw err;
        }
    }
}
/*
function tokenize(text: string) {
    try {
        // feed the tokenizer
        lexer.reset(text);

        let token: moo.Token;
        let toks = [];

        while (token = lexer.next()) {
            // filter tokens here
            if (tokenTypesSet.has(token.type)) {
                toks.push(token);
            }
            //TODO: Catch tokenizer errors.
        }
        return toks;
    } catch (err) {
        // just rethrow...
        throw err;
    }
}

function parseText(text: string): IParsedToken[] {
    let r: IParsedToken[] = [];

    // tokenize source
    let tokenizedText = tokenize(text);
    // filter tokens
    // let validTokens = tokenizedText.filter(token => tokenTypesSet.has(token.type));

    tokenizedText.forEach(token => r.push({
        line: token.line,
        startCharacter: token.offset - 1,
        length: token.offset + (token.text.length - 1),
        tokenType: token.type,
        tokenModifiers: []
    }));
    return r;
}

let res = parseText('some abs script');
console.log(res);
//*/