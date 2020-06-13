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
/**
 * Maps values from type > vcode kind enumeration
 */
let SymbolKind: Dictionary<number> = {
	'EntityRcmenu': 18,
	'EntityRcmenu_submenu': 8,
	'EntityRcmenu_separator': 18,
	'EntityRcmenu_menuitem': 8,
	'EntityPlugin': 18,
	'EntityPlugin_params': 18,
	'PluginParam': 8,
	'EntityTool': 18,
	'EntityUtility': 18,
	'EntityRollout': 18,
	'EntityRolloutGroup': 18,
	'EntityRolloutControl': 8,
	'EntityMacroscript': 18,
	'Struct': 22,
	'Event': 23,
	'Function': 11,
	'AssignmentExpression': 5,
	'CallExpression': 5,
	'ParameterAssignment': 6,
	'AccessorProperty': 6,
	'AccessorIndex': 6,
	'Literal': 13,
	'Identifier': 6,
	'VariableDeclaration': 12,
	'Declaration': 12,
	'Include': 1,
};
//-----------------------------------------------------------------------------------
function hasKey<O>(obj: O, key: keyof any): key is keyof O {
	return key in obj;
}
/**
 * Type to represent a text range with start and end offset
 */
export type Trange = { start: number; end: number };
//-----------------------------------------------------------------------------------
/**
 * Functions for getting the range of a statement. Grouped in a static class for coherency
 */
export abstract class range {
	static getRange(start: number, end: number): Trange {
		return {
			start: start,
			end: end
		};
	}
	static fromStartEndOffsets(startOff: number, endOff: number, value1: string): Trange {
		return {
			start: startOff,
			end: (endOff + value1.length)
		};
	}
	static fromOffset(offset: number, value: string): Trange {
		return {
			start: offset,
			end: (offset + value.length)
		};
	}
	static posFromLineCol(src: string | string[], line: number, col: number) {
		let lines = Array.isArray(src) ? src : src.split('\n');
		let charcount = lines.slice(0, line - 1).reduce((prev, next) => {
			return prev + next.length + 1;
		}, 0);
		return (charcount += col - 1);
	}
	static tokenOffsetFromLineCol(src: string | string[], node: any) {

		let lines = Array.isArray(src) ? src : src.split('\n');

		let charcount = lines.slice(0, node.line - 1).reduce((prev, next) => {
			return prev + next.length + 1;
		}, 0);
		return (charcount += node.col - 1);
	}
	static fromLineCol(src: string | string[], node: any) {
		let offset = range.tokenOffsetFromLineCol(src, node);
		return {
			start: offset,
			end: offset + node.text.length
		};
	}
	/**
	 * Get the range of the statement from the offset of the first and last child of the node
	 * @param node CST node
	 */
	static fromChilds(node: any): Trange {
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
	static fromChildsLC(source: string | string[], node: any): Trange {
		let childs: any[] = [];
		// traverse the node to collect first and last child offset
		traverse2(node, (key1: string, val1: null, innerObj: any, stop: any) => {
			const current = val1 != null ? val1 : key1;
			if (key1 === "offset") {
				childs.push(innerObj.parent);
			}
			return current;
		});
		let start = range.tokenOffsetFromLineCol(source, childs[0]);
		let last = childs[childs.length - 1];
		return this.fromStartEndOffsets(start, range.tokenOffsetFromLineCol(source, last), last.text);
	}
}
//-----------------------------------------------------------------------------------
export const vsRangeFromToken = (document: vscode.TextDocument, token: moo.Token, source?: string | string[]) => {
	let loc = !source
		? range.fromOffset(token.offset, token.text)
		: range.fromLineCol(source, token);
	return new vscode.Range(
		document.positionAt(loc.start),
		document.positionAt(loc.end)
	);
};
//-----------------------------------------------------------------------------------
/**
 * To vscode.SymbolInformation mapping later
 */
export interface ISymbolInformation {
	name: string;
	kind: number;
	containerName?: string;
	location: Trange;
}
/**
 * To vscode.Diagnostic mapping later
 */
export interface IerrSymbolInformation {
	message: string;
	tag?: string;
	source: string;
	code: string;
	range: Trange;
	severity: number;
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
		if (key1 === filter) statements.push(innerObj.path);
		return current;
	});
	return statements;
}
//-----------------------------------------------------------------------------------
/**
 * For each element of a object-path collection, return a valid {name|parent|kind|location} node
 * @param {any[]} CST the CST
 * @param {string[]} paths Collection of object-paths
 */
export function collectSymbols(CST: any[], paths: string[], source?: string) {
	let theSymbols;

	// let loc = source ? range.fromChildsLC : range.fromChilds;

	if (!source) {
		theSymbols = paths.map(
			path => {
				let currentNode = objectPath.get(CST, parentPath(path));
				let _name = currentNode.id.value.value;
				let theSymbol: ISymbolInformation = {
					name: _name !== '' ? _name : '[unnamed]',
					containerName: findParentName(CST, parentPath(path, 2)) || '',
					location: currentNode.loc || range.fromChilds(currentNode),
					kind: SymbolKind[currentNode.type] || 5,
				};
				return theSymbol;
			});
	} else {
		let src = source.split('\n');
		theSymbols = paths.map(
			path => {
				// This could be dropped, and collect the nodes directly, but maybe it performs better...
				let currentNode = objectPath.get(CST, parentPath(path));
				let _name = currentNode.id.value.value;
				let theSymbol: ISymbolInformation = {
					name: _name !== '' ? _name : '[unnamed]',
					containerName: findParentName(CST, parentPath(path, 2)) || '',
					location: range.fromChildsLC(src, currentNode),
					kind: SymbolKind[currentNode.type] || 5,
				};
				return theSymbol;
			});
	}
	return theSymbols;
}
//-----------------------------------------------------------------------------------
// INVALID TOKENS
/**
 * Return errorSymbol from invalid tokens
 * @param {object} CST the CST
 */
export function collectTokens(CST: any, key: string = 'type', value?: any, source?: string) {
	let Tokens: any[] = [];
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

	if (source) {
		let src = source.split('\n');
		Tokens = Tokens.map(token => {
			token.offset = range.tokenOffsetFromLineCol(src, token);
			return token;
		});
	}
	return Tokens;
}
//-----------------------------------------------------------------------------------
// IMPLEMENTATIONS - TODO
//-----------------------------------------------------------------------------------