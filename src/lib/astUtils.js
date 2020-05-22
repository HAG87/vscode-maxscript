const objectPath = require("object-path");
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
module.exports = {
	parentPath,
	findParentName,
	objFromKeys
};