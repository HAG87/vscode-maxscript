"use strict";
import {
	Location,
	Position,
	Range,
	SymbolInformation,
	DocumentSymbol,
	SymbolKind,
	TextDocument
} from 'vscode';
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
const SymbolKindMatch: Dictionary<SymbolKind> = {
	'EntityRcmenu'          : SymbolKind.Object,
	'EntityRcmenu_submenu'  : SymbolKind.Constructor,
	'EntityRcmenu_separator': SymbolKind.Object,
	'EntityRcmenu_menuitem' : SymbolKind.Constructor,
	'EntityPlugin'          : SymbolKind.Object,
	'EntityPlugin_params'   : SymbolKind.Object,
	'PluginParam'           : SymbolKind.Constructor,
	'EntityTool'            : SymbolKind.Object,
	'EntityUtility'         : SymbolKind.Object,
	'EntityRollout'         : SymbolKind.Object,
	'EntityRolloutGroup'    : SymbolKind.Object,
	'EntityRolloutControl'  : SymbolKind.Constructor,
	'EntityMacroscript'     : SymbolKind.Object,
	'Struct'                : SymbolKind.Struct,
	'Event'                 : SymbolKind.Event,
	'Function'              : SymbolKind.Function,
	'AssignmentExpression'  : SymbolKind.Method,
	'CallExpression'        : SymbolKind.Method,
	'ParameterAssignment'   : SymbolKind.Property,
	'AccessorProperty'      : SymbolKind.Property,
	'AccessorIndex'         : SymbolKind.Property,
	'Literal'               : SymbolKind.Constant,
	'Identifier'            : SymbolKind.Property,
	'VariableDeclaration'   : SymbolKind.Variable,
	'Declaration'           : SymbolKind.Variable,
	'Include'               : SymbolKind.Module,
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
export function getTokenRange(document: TextDocument, token: moo.Token) {
	let startPosition = new Position( token.line - 1, token.col );
	let endOffset = token.col + (token.text.length || token.value.length);
	let endPosition= new Position(token.line - 1, endOffset - 1);

	return new Range(startPosition, endPosition);
}

export function getDocumentPositions(document: TextDocument, node: any) {
	let startPosition: Position;
	let endPosition: Position;

	if (node.loc) {
		// document.validatePosition()
		// range from loc: {start: number, end?: number}
		startPosition = new Position(
			node.loc.start.line - 1,
			node.loc.start.col - 1
		);
		// get position of last child
		let childsRange = range.lastChildPos(node);
		endPosition = new Position(
			childsRange.line - 1,
			childsRange.col - 1
		);
	} else {
		// range from childsLC
		let sRange = range.fromChildsLC(node);
		startPosition = new Position(
			sRange.start.line - 1,
			sRange.start.col - 1
		);
		endPosition = new Position(
			sRange.end.line - 1,
			sRange.end.col - 1
		);

	}

	return new Location(
		document.uri,
		new Range( startPosition, endPosition)
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

function isNode(node:  any) {
	return (typeof node === 'object' && node != undefined);
}

interface NodeMap {
	node: any;
	childs: NodeMap[];
}

export function ReCollectStatementsFromCST(node: any) {

	return _visit(node, undefined);

	function _visit(node: any, parent: any) {
		let childStack: NodeMap[] = [];
		// get the node keys
		const keys = Object.keys(node);
		// loop through the keys
		for (let i = 0; i < keys.length; i++) {
			// child is the value of each key
			let key = keys[i];
			const child = node[key];
			// could be an array of nodes or just an object
			if (Array.isArray(child)) {
				// value is an array, visit each item
				for (let j = 0; j < child.length; j++) {
					// visit each node in the array
					if (isNode(child[j])) {
						let res = _visit(child[j], node);
						if (res) childStack = childStack.concat(res);
					}
				}
			} else if (isNode(child)) {
				let res = _visit(child, node);
				if (res) childStack = childStack.concat(res);
			}
		}
		// if (isNode(node) && childStack.length > 0) {
		// }
		if ('id' in node ) {			
			return {node: node, childs: childStack};
		} else {
			return childStack.length > 0 ? childStack : undefined;
		}
	}
}
//-----------------------------------------------------------------------------------
/**
 * For each element of a object-path collection, return a valid {name|parent|kind|location} node
 * TODO: Implement DocumentSymbol instead
 * @param {any[]} CST the CST
 * @param {string[]} paths Collection of object-paths
 */
export function collectSymbols(document: TextDocument, CST: any, paths: string[])
{
	let returnSymbol = (CST: any, path: string) => {
		let currentNode = objectPath.get(CST, path);
		let theSymbol: SymbolInformation = {
			name: currentNode.id.value.text || currentNode.id.text || '[unnamed]',
			kind: SymbolKindMatch[currentNode.type] || SymbolKind.Method,
			containerName: findParentName(CST, parentPath(path, 1)) || ' ',
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

export async function ReCollectSymbols(document: TextDocument, nodes: NodeMap[] | NodeMap):Promise<DocumentSymbol[]>
{
	let _transformStatements = (_nodes: NodeMap[]):Promise<DocumentSymbol[]> => {
		return new Promise((resolve, reject) =>
		{
			let SymbolCollection: DocumentSymbol[] = [];
			for (let node of _nodes) {
				try {
					let symbolLoc = getDocumentPositions(document, node.node);
					let symbolName = node.node.id.value.toString();
					let symbolKind = SymbolKindMatch[node.node.type] || SymbolKind.Method;
					let theSymbol = new DocumentSymbol(
						symbolName,
						SymbolKind[symbolKind],
						symbolKind,
						symbolLoc.range,
						symbolLoc.range
					);
					if (node.childs.length > 0) {
						_transformStatements(node.childs)
							.then ((result) => {
								theSymbol.children = result;
							});
					}
					SymbolCollection.push(theSymbol);
				} catch (err) {
					reject(err);
				}
			}
			resolve(SymbolCollection);
		});
	};
	return new Promise((resolve, reject) => {
		_transformStatements(Array.isArray(nodes) ? nodes : [nodes])
			.then(
				(result) => resolve(result),
				(err) => reject(err)
			);
	});
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