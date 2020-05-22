const { find, get, set, drop, info, del, arrayFirstOnly, traverse, } = require('ast-monkey');
const traverse2 = require('ast-monkey-traverse-with-lookahead');
const { pathNext, pathPrev, pathUp } = require('ast-monkey-util');
const objectPath = require("object-path");
//-----------------------------------------------------------------------------------
const { parentPath, findParentName, objFromKeys } = require('./astUtils.js');
//-----------------------------------------------------------------------------------
/**
 * To vscode.SymbolInformation mapping later
 */
function vscodeSymbolInformation (name, kind, container, loc)  {
	this.name = name;
	this.kind = kind;
	this.containerName = container != undefined ? container : ' ';
	this.location = loc;
}
//-----------------------------------------------------------------------------------
/**
 * Maps values from type > vcode kind enumeration
 */
const SymbolKind = {
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
	'AccessorIndex':6,
	'Literal': 13,
	'Identifier': 6,
	'VariableDeclaration': 12,
	'Declaration': 12,
	'Include': 1,
};
/*
    export enum SymbolKind {
        File = 0,
        Module = 1,
        Namespace = 2,
        Package = 3,
        Class = 4,
        Method = 5,
        Property = 6,
        Field = 7,
        Constructor = 8,
        Enum = 9,
        Interface = 10,
        Function = 11,
        Variable = 12,
        Constant = 13,
        String = 14,
        Number = 15,
        Boolean = 16,
        Array = 17,
        Object = 18,
        Key = 19,
        Null = 20,
        EnumMember = 21,
        Struct = 22,
        Event = 23,
        Operator = 24,
        TypeParameter = 25
	}
*/
//-----------------------------------------------------------------------------------
/**
 * Types: Block statements
 */
const blockStatements = [
	'Struct',
	'Function',
	'EntityMacroscript',
	'EntityRollout',
	'EntityRolloutControl',
	'EntityUtility',
	'EntityTool',
	'EntityPlugin',
	'EntityRcmenu',
	// 'VariableDeclaration',
	'Declaration',
	'EntityRcmenu_menuitem',
	'EntityPlugin_params',
	'PluginParam',
	'EntityRolloutGroup',
];
/**
 * Types: Expression, one-line statements only
 */
const plainScript = [];
/**
 * Implementations, references..
 */
const usageExpressions = [
	'Itentifier',
	'CallExpression',
];
//-----------------------------------------------------------------------------------
/**
 * Functions for getting the range of a statement. Grouped in a static class for coherency
 */
class range {
	static getRange(start, end) {
		return {
			start: start,
			end: end
		};
	}
	static FromStartEndOffsets (startOff, endOff, value1) {
		return {
			start: startOff - 1,
			end: endOff + (value1.length - 1)
		};
	}
	static FromOffset (offset, value) {
		return {
			start: offset - 1,
			end: (offset + (value.length - 1))
		};
	}
	// Get the range of the statement from the offset of the first and last child of the node
	static FromChilds (node) {
		let paths = [];
		// traverse the node to collect first and last child offset
		traverse2(node, (key1, val1, innerObj, stop) => {
			const current = val1 != null ? val1 : key1;
			if (key1 === "offset") {
				paths.push(parentPath(innerObj.path));
			}
			return current;
		});
		// Childs
		let start = objectPath.get(node, paths[0]).offset - 1;
		let last = objectPath.get(node, paths[paths.length - 1]);

		return this.FromStartEndOffsets(start, last.offset, last.text);
	}
}
//-----------------------------------------------------------------------------------
//DECLARATIONS
//-----------------------------------------------------------------------------------
/**
 * collect Nodes visiting the Tree
 * collects all node types in the filter.
 * I'm retrieving only the paths, because will need to get the parents location later.
 * I will not be using this for now, since vscode only cares about definitions, I can later reference-search that definition
 *
 * @param {any} AST Abstract Syntax tree source
 * @param {object} filter Object with keys:[] to be collected.
 */
// function collectStatementsFromAST(AST, filter = blockStatements) {
function collectStatementsFromAST(AST, filter = 'id') {
	let statements = [];
	//let result = objFromKeys(filter, []);
	//traverse the AST
	traverse2(AST, (key1, val1, innerObj, stop) => {
		const current = val1 != null ? val1 : key1;
		// if (val1 != null && filter.includes(val1)) statements.push(innerObj.path);
		if (key1 === filter) statements.push(innerObj.path);
		// if (!val1) { /*going through an array.*/ }
		// else { /*going through a key/value pair.*/ }
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
 * @param {object} AST the AST
 * @param {string[]} paths Collection of object-paths
 */
function collectSymbols(AST, paths) {
	let theSymbols = [];
	paths.forEach(path => {
		// each path represent a key in the node, I need to get the path of the node
		let currentNode = objectPath.get(AST, parentPath(path));
		// since Im searching the tree for the id key, it should exist. more complex search will need to check for valid keys
		let theSymbol = new vscodeSymbolInformation();
		// each id has a type and a value, this one is the token object, so is id.value.value
		theSymbol.name = currentNode.id.value.value;
		// parent name is needed to provide vscode with the tree structure
		// parent will not be an object, if the node is in a parent key or array, so i need the parent of the parent.. and so on..
		theSymbol.containerName = findParentName(AST, parentPath(path, 2)) || '';
		// Location
		// if loc.end is undefined, i will need to traverse the node anyways, so...
		theSymbol.location = currentNode.loc || range.FromChilds(currentNode);
		// Kind
		theSymbol.kind = SymbolKind[currentNode.type];
		// parents... ? no need, they will be in the collection anyways
		// let result = new vscodeSymbolInformation(name, kind, containerName, loc);
		// theSymbols.push(result);
		theSymbols.push(theSymbol);
	});
	return theSymbols;
}
//-----------------------------------------------------------------------------------
// IMPLEMENTATIONS
//-----------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------
module.exports = {
	range,
	collectStatementsFromAST,
	collectSymbols,
};