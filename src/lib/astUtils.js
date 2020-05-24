"use strict";
const objectPath = require("object-path");
// const traverse2 = require('ast-monkey-traverse-with-lookahead');
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
/**
 * Retrieve an object-path notation pruning n branches/leafs
 * Partially extracted from ast-monkey-util
 * @param {string} path The path of the current node/key
 * @param {int} level Level to retrieve
 */
function parentPath(path, level = 1) {
	if (typeof path === "string") {
		// AST must have at least two dots:
		if (!path.includes(".") || !path.slice(path.indexOf(".") + 1).includes(".")) {
			// zero is the root level's first element
			return "0";
		}
		return (
			path.split('.').slice(0, -level).join('.')
		);
	}
}
//-----------------------------------------------------------------------------------
/**
 * Looks for a key in the inmediate parent, going up the tree, returns the value of the first match, if any.
 * @param {object} ast The AST
 * @param {string} path The path of the current node/leaf
 */
function findParentName (ast, path, key = 'id.value.value') {
	// this is faster than using ats-money find method
	let roots = path.split('.');

	while (roots.length > 0) {
		roots.pop();
		let thePath = [].concat(roots, key).join('.');
		let theNode = objectPath.get(ast, thePath);
		if (theNode != null) return theNode;
	}
	/*
	let i = roots.length;
	do {
		let thePath = roots.slice(0, i).concat(key).join('.');
		let theNode = objectPath.get(ast, thePath);

		if (theNode != null) return theNode;

		i = i - 1;
	} while (i > 0);
	*/
	return;
}
//-----------------------------------------------------------------------------------
const objFromKeys = (arr, def) => arr.reduce((ac,a) => ({...ac,[a]:def}),{});
//-----------------------------------------------------------------------------------
/**
 * Functions for getting the range of a statement. Grouped in a static class for coherency
 */
/* class range {
	static getRange(start, end) {
		return {
			start: start,
			end: end
		};
	}
	static fromStartEndOffsets (startOff, endOff, value1) {
		return {
			start: startOff,
			end: (endOff + value1.length)
		};
	}
	static fromOffset (offset, value) {
		return {
			start: offset,
			end: (offset + value.length)
		};
	}
	// Get the range of the statement from the offset of the first and last child of the node
	static fromChilds (node) {
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
		let start = objectPath.get(node, paths[0]).offset;
		let last = objectPath.get(node, paths[paths.length - 1]);

		return this.fromStartEndOffsets(start, last.offset, last.text);
	}
}
//*/
//-----------------------------------------------------------------------------------
module.exports = {
	// range,
	parentPath,
	findParentName,
	objFromKeys
};