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
		if (!path.includes(".")) {
			return path;
		} else {
			let pathTree = path.split('.');
			// will fail if level is greater than the path depth.
			if (level <= pathTree.length) {
				return pathTree.slice(0, -level).join('.');
			} else {
				return;
			}
		}
	}
}
//-----------------------------------------------------------------------------------
/**
 * Looks for a key in the inmediate parent, going up the tree, returns the value of the first match, if any.
 * @param {object} ast The CST
 * @param {string} path The path of the current node/leaf
 */
function findParentName (CST, path, key = 'id.value.value') {
	// this is faster than using ats-money find method
	let roots = path.split('.');

	while (roots.length > 0) {
		roots.pop();
		let thePath = [].concat(roots, key).join('.');
		let theNode = objectPath.get(CST, thePath);
		if (theNode != null) return theNode;
	}
	/*
	let i = roots.length;
	do {
		let thePath = roots.slice(0, i).concat(key).join('.');
		let theNode = objectPath.get(CST, thePath);

		if (theNode != null) return theNode;

		i = i - 1;
	} while (i > 0);
	*/
	return;
}
//-----------------------------------------------------------------------------------
const objFromKeys = (arr, def) => arr.reduce((ac,a) => ({...ac,[a]:def}),{});
//-----------------------------------------------------------------------------------
module.exports = {
	// range,
	parentPath,
	findParentName,
	objFromKeys
};