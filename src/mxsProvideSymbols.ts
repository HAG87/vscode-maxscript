"use strict";
import * as vscode from 'vscode';
// const { find, get, set, drop, info, del, arrayFirstOnly, traverse, } = require('ast-monkey');
// const { pathNext, pathPrev, pathUp } = require('ast-monkey-util');
const traverse2 = require('ast-monkey-traverse-with-lookahead');
const objectPath = require("object-path");
//-----------------------------------------------------------------------------------
// import { parentPath, findParentName } from './astUtils';
const { parentPath, findParentName } = require('./lib/astUtils.js');
//-----------------------------------------------------------------------------------
interface Dictionary<T> {
	[key: string]: T;
}
//-----------------------------------------------------------------------------------
const SymbolKindMap: Dictionary<vscode.SymbolKind> = {
	1: vscode.SymbolKind.Module,
	5: vscode.SymbolKind.Method,
	6: vscode.SymbolKind.Property,
	8: vscode.SymbolKind.Constructor,
	11: vscode.SymbolKind.Function,
	12: vscode.SymbolKind.Variable,
	13: vscode.SymbolKind.Constant,
	18: vscode.SymbolKind.Object,
	22: vscode.SymbolKind.Struct,
	23: vscode.SymbolKind.Event,
};
/**
 * Maps values from type > vcode kind enumeration
 */
const SymbolKind: Dictionary<number> = {
	'EntityRcmenu'          : SymbolKindMap[18],
	'EntityRcmenu_submenu'  : SymbolKindMap[8],
	'EntityRcmenu_separator': SymbolKindMap[18],
	'EntityRcmenu_menuitem' : SymbolKindMap[8],
	'EntityPlugin'          : SymbolKindMap[18],
	'EntityPlugin_params'   : SymbolKindMap[18],
	'PluginParam'           : SymbolKindMap[8],
	'EntityTool'            : SymbolKindMap[18],
	'EntityUtility'         : SymbolKindMap[18],
	'EntityRollout'         : SymbolKindMap[18],
	'EntityRolloutGroup'    : SymbolKindMap[18],
	'EntityRolloutControl'  : SymbolKindMap[8],
	'EntityMacroscript'     : SymbolKindMap[18],
	'Struct'                : SymbolKindMap[22],
	'Event'                 : SymbolKindMap[23],
	'Function'              : SymbolKindMap[11],
	'AssignmentExpression'  : SymbolKindMap[5],
	'CallExpression'        : SymbolKindMap[5],
	'ParameterAssignment'   : SymbolKindMap[6],
	'AccessorProperty'      : SymbolKindMap[6],
	'AccessorIndex'         : SymbolKindMap[6],
	'Literal'               : SymbolKindMap[13],
	'Identifier'            : SymbolKindMap[6],
	'VariableDeclaration'   : SymbolKindMap[12],
	'Declaration'           : SymbolKindMap[12],
	'Include'               : SymbolKindMap[1],
};
//-----------------------------------------------------------------------------------
function hasKey<O>(obj: O, key: keyof any): key is keyof O {
	return key in obj;
}

/**
 * Type to represent a text range with start and end offset
 */
// export type Trange = { start: number; end: number };
interface Trange<T> {
	start: T;
	end: T;
}
interface Tpos {
	line: number;
	col: number;
}
//-----------------------------------------------------------------------------------
/**
 * Functions for getting the range of a statement. Grouped in a static class for coherency
 */
export abstract class range {

	
	static fromStartEndOffsets(startOff: number, endOff: number, value1: string): Trange<number> {
		return {
			start: startOff,
			end: (endOff + value1.length)
		};
	}

	static fromOffset(offset: number, value: string): Trange<number> {
		return {
			start: offset,
			end: (offset + value.length)
		};
	}

	static offsetFromTokenLineCol(src: string | string[], node: any) {

		let lines = Array.isArray(src) ? src : src.split('\n');

		let charcount = lines.slice(0, node.line - 1).reduce((prev, next) => {
			return prev + next.length + 1;
		}, 0);
		return (charcount += node.col - 1);
	}

	static fromLineCol(src: string | string[], node: any) {
		let offset = range.offsetFromTokenLineCol(src, node);
		return {
			start: offset,
			end: offset + node.text.length
		};
	}
	/**
	 * Get the range of the statement from the offset of the first and last child of the node
	 * @param node CST node
	 */
	static fromChilds(node: any): Trange<number> {
		// let paths: any[] = [];
		let childs: any[] = [];
		// traverse the node to collect first and last child offset
		traverse2(node, (key1: string, val1: null, innerObj: any, stop: any) => {
			const current = val1 != null ? val1 : key1;
			if (key1 === "offset") {
				// paths.push(parentPath(innerObj.path));
				childs.push(innerObj.parent);
			}
			return current;
		});
		// Childs
		// let start = objectPath.get(node, paths[0]).offset;
		// let last = objectPath.get(node, paths[paths.length - 1]);
		let start = childs[0].offset;
		let last = childs[childs.length - 1];

		return range.fromStartEndOffsets(start, last.offset, last.text);
	}
	
	/**
	 *  Get the range of the statement from the line-column of the first and last child of the node
	 * @param source Reference, the original string.
	 * @param node CST node
	 */
	static fromChildsLC(node: any): Trange<Tpos>
	{
		let childs: any[] = [];
		// traverse the node to collect first and last child offset
		traverse2(node, (key1: string, val1: null, innerObj: any, stop: any) => {
			const current = val1 != null ? val1 : key1;
			if (key1 === "line") {
				childs.push(innerObj.parent);
			}
			return current;
		});
		let last = childs[childs.length - 1];

		let start = {line: childs[0].line, col: childs[0].col};
		let end = {line: last.line, col: last.col};
		return {start: start, end: end};
	}

	/**
	 * Get the position of the last child
	 * @param node CST node
	 */
	static lastChildPos(node: any): Tpos
	{
		let childs: any[] = [];
		// traverse the node to collect first and last child offset
		traverse2(node, (key1: string, val1: null, innerObj: any, stop: any) => {
			const current = val1 != null ? val1 : key1;
			if (key1 === "line") {
				childs.push(innerObj.parent);
			}
			return current;
		});
		let last = childs[childs.length - 1];
		return {line: last.line, col: last.col};
	}
}
//-----------------------------------------------------------------------------------
/*
export const vsRangeFromToken = (document: vscode.TextDocument, token: moo.Token, source?: string | string[]) => {
	let loc = !source
		? range.fromOffset(token.offset, token.text)
		: range.fromLineCol(source, token);
	return new vscode.Range(
		document.positionAt(loc.start),
		document.positionAt(loc.end)
	);
};
*/
export function getTokenRange(document: vscode.TextDocument, token: moo.Token) {
	let startPosition = new vscode.Position( token.line - 1, token.col );
	let endOffset = token.col + (token.text.length || token.value.length);
	let endPosition= new vscode.Position(token.line - 1, endOffset - 1);

	return new vscode.Range(startPosition, endPosition);
}

export function getDocumentPositions(document: vscode.TextDocument, node: any) {
	let startPosition: vscode.Position;
	let endPosition: vscode.Position;

	if (node.loc) {
		// document.validatePosition()
		// range from loc: {start: number, end?: number}
		startPosition = new vscode.Position(
			node.loc.start.line - 1,
			node.loc.start.col - 1
		);
		// get position of last child
		let childsRange = range.lastChildPos(node);
		endPosition = new vscode.Position(
			childsRange.line - 1,
			childsRange.col - 1
		);
	} else {
		// range from childsLC
		let sRange = range.fromChildsLC(node);
		startPosition = new vscode.Position(
			sRange.start.line - 1,
			sRange.start.col - 1
		);
		endPosition = new vscode.Position(
			sRange.end.line - 1,
			sRange.end.col - 1
		);

	}

	return new vscode.Location(
		document.uri,
		new vscode.Range( startPosition, endPosition)
	);
}
//-----------------------------------------------------------------------------------
//DECLARATIONS
//-----------------------------------------------------------------------------------
/**
 * collect Nodes visiting the Tree
 * collects all node types in the filter.
 * I'm retrieving only the paths, because will need to get the parents location later.
 * I will not be using this for now, since vscode only cares about definitions, I can later reference-search that definition
 * @param {any[]} CST Abstract Syntax tree source
 * @param {string} filter Object with keys:[] to be collected.
 */
export function collectStatementsFromCST(CST: any[], filter: string = 'id') {
	let statements: string[] = [];
	//traverse the CST
	traverse2(CST, (key1: string, val1: null, innerObj: { path: string }, stop: any) => {
		const current = val1 != null ? val1 : key1;
		if (key1 === filter) statements.push(parentPath(innerObj.path));
		return current;
	});
	return statements;
}
//-----------------------------------------------------------------------------------
/**
 * For each element of a object-path collection, return a valid {name|parent|kind|location} node
 * TODO: Implement DocumentSymbol instead
 * @param {any[]} CST the CST
 * @param {string[]} paths Collection of object-paths
 */
export function collectSymbols(document: vscode.TextDocument, CST: any, paths: string[])
{
	let returnSymbol = (CST: any, path: string) => {

		let currentNode = objectPath.get(CST, path);

		let theSymbol: vscode.SymbolInformation = {
			name: currentNode.id.value.text || currentNode.id.text || '[unnamed]',
			kind: SymbolKind[currentNode.type] || SymbolKindMap[5],
			containerName: findParentName(CST, parentPath(path, 1)) || '',
			location: getDocumentPositions(document, currentNode),
		};

		return theSymbol;
	};

	let theSymbols = paths.map(
		path => {
			return returnSymbol(CST, path);
		});

	return theSymbols;
}
//-----------------------------------------------------------------------------------
// INVALID TOKENS
/**
 * Return errorSymbol from invalid tokens
 * @param {object} CST the CST
 */
export function collectTokens(CST: any, key: string = 'type', value?: any) {
	let Tokens: moo.Token[] = [];

	if (value) {
		traverse2(CST, (key1: string, val1: string | null, innerObj: { parent: any }) => {
			const current = val1 != null ? val1 : key1;
			if (key1 === key && val1 === value) {
				Tokens.push(innerObj.parent);
			}
			return current;
		});
	} else {
		traverse2(CST, (key1: string, val1: string | null, innerObj: { parent: any }) => {
			const current = val1 != null ? val1 : key1;
			if (key1 === key) {
				Tokens.push(innerObj.parent);
			}
			return current;
		});
	}
	return Tokens;
}
//-----------------------------------------------------------------------------------
// IMPLEMENTATIONS - TODO
//-----------------------------------------------------------------------------------