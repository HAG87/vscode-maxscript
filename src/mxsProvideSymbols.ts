"use strict";
// const { find, get, set, drop, info, del, arrayFirstOnly, traverse, } = require('ast-monkey');
// const { pathNext, pathPrev, pathUp } = require('ast-monkey-util');
const traverse2 = require('ast-monkey-traverse-with-lookahead');
const objectPath = require("object-path");
//-----------------------------------------------------------------------------------
const { parentPath, findParentName } = require('./lib/astUtils.js');
//-----------------------------------------------------------------------------------
/**
 * Type to represent a text range with start and end offset
 */
export type Trange = { start: number; end: number };
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
	// Get the range of the statement from the offset of the first and last child of the node
	static fromChilds(node: any): Trange {
		let paths: any[] = [];
		// traverse the node to collect first and last child offset
		traverse2(node, (key1: string, val1: null, innerObj: any, stop: any) => {
			const current = val1 != null ? val1 : key1;
			if (key1 === "offset") {
				paths.push(parentPath(innerObj.path));
			}
			return current;
		});
		// Childs
		let start = objectPath.get(node, paths[0]).offset;
		let last = objectPath.get(node, paths[paths.length - 1]);
		// let start = paths[0].offset;
		// let last = paths[paths.length - 1];

		return this.fromStartEndOffsets(start, last.offset, last.text);
	}
}
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
/**
 * Maps values from type > vcode kind enumeration
 */
let SymbolKind : { [key: string]: number } = {
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
//DECLARATIONS
//-----------------------------------------------------------------------------------
/**
 * collect Nodes visiting the Tree
 * collects all node types in the filter.
 * I'm retrieving only the paths, because will need to get the parents location later.
 * I will not be using this for now, since vscode only cares about definitions, I can later reference-search that definition
 * @param {any[]} AST Abstract Syntax tree source
 * @param {string} filter Object with keys:[] to be collected.
 */
export function collectStatementsFromAST(AST: any[], filter: string = 'id') {
	let statements: string[] = [];
	//traverse the AST
	traverse2(AST, (key1: string, val1: null, innerObj: { path: string }, stop: any) => {
		const current = val1 != null ? val1 : key1;
		if (key1 === filter) statements.push(innerObj.path);
		return current;
	});
	return statements;
}
//-----------------------------------------------------------------------------------
//TODO: Collect identifiers and calls to find references to functions, structs... decl, so on...
// establish a declaration and usage points
// get declarations in statements, set apernt>child>child order, set a declaration póint and implementation points for symbol defintions, and goto

/**
 * For each element of a object-path collection, return a valid {name|parent|kind|location} node
 * @param {any[]} AST the AST
 * @param {string[]} paths Collection of object-paths
 */
export function collectSymbols(AST: any[], paths: string[]) {
	let theSymbols = paths.map(
		path => {
			let currentNode = objectPath.get(AST, parentPath(path));
			let _name = currentNode.id.value.value;
			let theSymbol: ISymbolInformation = {
				name: _name !== '' ? _name : '[unnamed]',
				containerName: findParentName(AST, parentPath(path, 2)) || '',
				location: currentNode.loc || range.fromChilds(currentNode),
				kind: SymbolKind[currentNode.type] || 5,
			};
			return theSymbol;
		});
	return theSymbols;
}
//-----------------------------------------------------------------------------------
// INVALID TOKENS
/**
 * Return errorSymbol from invalid tokens
 * @param {object} AST the AST
 */
export function collectErrors(AST: object) {

	let theSymbols = [];
	let errTokens: any[] = [];

	traverse2(AST, (key1: string, val1: string | null, innerObj: { parent: any }, stop: any) => {
		const current = val1 != null ? val1 : key1;
		if (key1 === 'type' && val1 === 'error') errTokens.push(innerObj.parent);
		return current;
	});
	// return if no errors
	if (errTokens.length === 0) { return; }

	theSymbols = errTokens.map(node => {
		let err: IerrSymbolInformation = {
			message: `Unexpected token: ${node.text}`,
			range: range.fromOffset(node.offset, node.text),
			source: 'MaxScript',
			code: 'ERR_TOKEN',
			severity: 1
		};
		return err;
	});
	return theSymbols;
}
//-----------------------------------------------------------------------------------
// IMPLEMENTATIONS
//-----------------------------------------------------------------------------------
