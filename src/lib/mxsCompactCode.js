/**
 * Visit and reduce CST to compact code
 * @param {any} node CST node
 * @param {any} callbackMap Patterns function
 */
function visit(node, callbackMap) {
	return _visit(node, null, null, 0, 0);
	function _visit(node, parent, key, level = 0) {
		const nodeType = getNodeType(node);
		// captured values
		let stack = {};
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
				let collection = [];
				for (let j = 0; j < child.length; j++) {
					if (isNode(child[j])) {
						collection.push(
							_visit(child[j], node, key, level + 1)
							// setImmediate(_visit, child[j], node, key, level + 1)
						);
					}
					else {
						// not object array items. i.e. null values
					}
				}
				stack[key] = collection;
				// console.log(stack);
			}
			else if (isNode(child)) {
				// value is an object, visit it
				stack[key] = _visit(child, node, key, level + 1);
				// stack[key] = setImmediate(_visit, child, node, key, level + 1);
				// console.log(stack);
			}
			/*
			else if (child === String || child === Number) {
				// eslint-disable-next-line no-empty
				//...
			}
			//*/
		}
		let res;
		if (nodeType && nodeType in callbackMap) {
			// setImmediate( () => callbackMap[nodeType](node, stack));
			res = callbackMap[nodeType](node, stack);
		}
		else if (nodeType) {
			res = node;
		}
		else if (Array.isArray(node)) {
			res = keys.map(x => stack[x]).join(';');
		}
		//--------------------------------
		return res;
	}
}
//-----------------------------------------------------------------------------------
let tokensValue = {
	global_typed: (node) => node.text,
	hex: (node) => node.text,
	identity: (node) => node.text,
	locale: (node) => node.text,
	name: (node) => node.text,
	number: (node) => node.text,
	path: (node) => node.text,
	string: (node) => node.text,
	time: (node) => node.text,
	typed_iden: (node) => node.text,
	property: (node) => node.value,
	params: (node) => node.value,
	math: (node) => node.value,
	assign: (node) => node.value,
	comparison: (node) => node.value,
	keyword: (node) => node.text,
	kw_bool: (node) => node.text,
	kw_on: (node) => node.text,
	kw_return: (node) => node.text,
	kw_exit: (node) => node.text,
	kw_scope: (node) => node.text,
	kw_uicontrols: (node) => node.text,
	kw_group: (node) => node.text,
	kw_objectset: (node) => node.text,
	kw_context: (node) => node.text,
	kw_function: (node) => node.text,
	kw_time: (node) => node.text,
	kw_tool: (node) => node.text,
	kw_utility: (node) => node.text,
	kw_rollout: (node) => node.text,
	kw_level: (node) => node.text,
	kw_global: (node) => node.text,
	kw_local: (node) => node.text,
	kw_do: (node) => node.text,
	kw_then: (node) => node.text,
	// Error tokens
	error: (node) => node.text,
};
let visitorPatterns = {
	// TOKENS
	...tokensValue,
	// LITERALS
	Literal: (node, stack) => stack.value,
	Identifier: (node, stack) => stack.value,
	BitRange: (node, stack) => `${stack.start}..${stack.end}`,
	// Declaration
	Declaration(node, stack) {
		return stack.value ? `${stack.id}=${stack.value}` : stack.id;
	},
	// Types
	ObjectArray(node, stack) {
		if (Array.isArray(stack.elements) && stack.elements.length > 1) {
			return `#(${stack.elements.join(',')})`;
		}
		else {
			return `#(${stack.elements})`;
		}
	},
	ObjectBitArray(node, stack) {
		if (Array.isArray(stack.elements) && stack.elements.length > 1) {
			return `#{${stack.elements.join(',')}}`;
		}
		else {
			return `#{${stack.elements}}`;
		}
	},
	ObjectPoint4(node, stack) { return `[${stack.elements.join(',')}]`; },
	ObjectPoint3(node, stack) { return `[${stack.elements.join(',')}]`; },
	ObjectPoint2(node, stack) { return `[${stack.elements.join(',')}]`; },
	// Accesors
	AccessorIndex(node, stack) { return `${stack.operand}[${stack.index}]`; },
	AccessorProperty(node, stack) { return `${stack.operand}.${stack.property}`; },
	// Call
	CallExpression(node, stack) {
		let args = joinStatements(stack.args);
		return `${stack.calle}${spaceLR(stack.calle, args)}${args}`;
	},
	// Assign
	ParameterAssignment(node, stack) {
		return `${stack.param}:${stack.value || ' '}`;
	},
	AssignmentExpression(node, stack) {
		return `${stack.operand}${stack.operator}${stack.value}`;
	},
	// STATEMENTS
	BlockStatement(node, stack) {
		// CHECK SEMICOLONS AT END!!!
		return `(${exprTerm(stack.body)})`;
	},
	// Struct
	Struct(node, stack) {
		let body;
		if (Array.isArray(stack.body)) {
			body =
				stack.body.reduce((acc, curr, index, src) => {
					if (index < src.length - 1) {
						let sep = /(?:private|public)$/gmi.test(curr) ? ';' : ',';
						return (acc + curr + sep);
					} else {
						return (acc + curr);
					}
				}, '');
		} else {
			body = stack.body;
		}
		return `struct ${stack.id}(${body})`;
	},
	StructScope: (node, stack) => stack.value,
	// Functions
	Function(node, stack) {
		let decl = `${node.mapped ? 'mapped ' : ''}${stack.keyword} ${stack.id}`;
		let args = ('args' in stack) ? joinStatements(stack.args) : '';
		let params = ('params' in stack) ? joinStatements(stack.params) : '';
		let body = exprTerm(stack.body);
		return joinStatements([decl, args, params, '=', body]);
	},
	FunctionReturn(node, stack) {
		return joinStatements(['return', exprTerm(stack.body)]);
	},
	// Plugin
	EntityPlugin(node, stack) {
		let body = exprTerm(stack.body);
		return joinStatements(['plugin', stack.superclass, stack.class, ...stack.params, '(', body, ')']);
	},
	EntityPlugin_params(node, stack) {
		let body = exprTerm(stack.body);
		return `parameters ${stack.id} ${joinStatements(stack.params)}(${body})`;
	},
	PluginParam(node, stack) {
		return `${stack.id} ${joinStatements(stack.params)}`;
	},
	// Tool
	EntityTool(node, stack) {
		return `tool ${stack.id} ${joinStatements(stack.params)}(${exprTerm(stack.body)})`;
	},
	// MacroScript
	EntityMacroscript(node, stack) {
		return `macroScript ${stack.id} ${joinStatements(stack.params)}(${exprTerm(stack.body)})`;
	},
	// rcMenu
	EntityRcmenu(node, stack) {
		return `rcmenu ${stack.id}(${exprTerm(stack.body)})`;
	},
	EntityRcmenu_submenu(node, stack) {
		return `subMenu${stack.label}${stack.params}(${exprTerm(stack.body)})`;
	},
	EntityRcmenu_menuitem(node, stack) {
		return `menuItem ${stack.id}${stack.label}${joinStatements(stack.params)}`;
	},
	EntityRcmenu_separator(node, stack) {
		return joinStatements(['separator', stack.id, ...stack.params]);
	},
	// Utility - Rollout
	EntityUtility(node, stack) {
		return `utility ${stack.id}${stack.title}${joinStatements(stack.params)}(${exprTerm(stack.body)})`;
	},
	EntityRollout(node, stack) {
		return `rollout ${stack.id}${stack.title}${joinStatements(stack.params)}(${exprTerm(stack.body)})`;
	},
	EntityRolloutGroup(node, stack) {
		return `group${stack.id}(${exprTerm(stack.body)})`;
	},
	EntityRolloutControl(node, stack) {
		return joinStatements([stack.class, stack.id, stack.text, ...stack.params]);
	},
	// Event
	Event(node, stack) {
		let body = exprTerm(stack.body);
		return joinStatements(['on', stack.args, stack.modifier, body]);
	},
	EventArgs(node, stack) {
		return [].concat(
			stack.target || '',
			stack.event || '',
			joinStatements(stack.args)
		)
			.filter(x => x.length > 0)
			.join(' ');
	},
	WhenStatement(node, stack) {
		let args = joinStatements(stack.args);
		let body = exprTerm(stack.body);
		return joinStatements(['when', args, 'do', body]);
	},
	// Declarations
	VariableDeclaration(node, stack) {
		if (stack.modifier) {
			return `${stack.modifier} ${stack.scope} ${stack.decls.join(',')}`;
		} else {
			return `${stack.scope} ${stack.decls.join(',')}`;
		}
	},
	// SIMPLE EXPRESSIONS
	MathExpression(node, stack) {
		// binaryNode(stack)
		let left = stack.left || '';
		let right = stack.right || '';

		if (/\w+/gmi.test(stack.operator)) {
			return `${left}${spaceAlphaNum(stack.operator)}${right}`;
		} else {
			let space =
			/[-]$/gmi.test(stack.operator)
				&& /^[-]/gmi.test(right)
				? ' ' : '';
			
			return `${left}${stack.operator}${space}${right}`;
		}
	},
	LogicalExpression: (node, stack) => binaryNode(stack),
	UnaryExpression: (node, stack) => `${stack.operator}${stack.right}`,
	// STATEMENTS
	IfStatement(node, stack) {
		let test = stack.test;
		let operator = stack.operator ? stack.operator : 'then';
		let consequent = stack.consequent;
		let alternate = stack.alternate;
		let res;
		if (alternate) {
			res = ['if', test, operator, consequent, 'else', alternate];
		} else {
			res = ['if', test, operator, consequent];
		}
		return joinStatements(res);
	},
	LoopExit(node, stack) {
		let body = exprTerm(stack.body);
		return joinStatements(['exit with', body]);
	},
	TryStatement(node, stack) {
		return joinStatements(['try', stack.block, 'catch', stack.finalizer]);
	},
	DoWhileStatement(node, stack) {
		let body = exprTerm(stack.body);
		return joinStatements(['do', body, 'while', stack.test]);
	},
	WhileStatement(node, stack) {
		let body = exprTerm(stack.body);
		return joinStatements(['while', stack.test, 'do', body]);
	},
	ForStatement(node, stack) {
		let body = exprTerm(stack.body);

		let it = ['for', stack.variable, stack.iteration];
		let valseq = [stack.value, stack.sequence];
		let act = [stack.action, body];
		return joinStatements([].concat(it, valseq, act));
	},
	ForLoopSequence(node, stack) {
		let _to = (stack.to.length > 0) ? `to${spaceSE(stack.to, false)}` : '';
		let _by = (stack.by.length > 0) ? `by${spaceSE(stack.by, false)}` : '';
		let _while = (stack.while.length > 0) ? `while${spaceSE(stack.while, false)}` : '';
		let _where = (stack.where.length > 0) ? `where${spaceSE(stack.where, false)}` : '';
		return joinStatements([_to, _by, _while, _where]);

	},
	CaseStatement(node, stack) {
		return joinStatements(['case', stack.test, 'of', '(', stack.cases.join(';'), ');']);
	},
	CaseClause(node, stack) {
		let body = exprTerm(stack.body);
		let spacer = /\d$/gmi.test(stack.case) ? ' ' : '';
		return `${stack.case}${spacer}:${body}`;
	},
	// context expressions
	ContextStatement(node, stack) {
		let contx = stack.context.join(',');
		let body = exprTerm(stack.body);
		return joinStatements([contx, body]);
	},
	ContextExpression(node, stack) {
		let prefix = stack.prefix || '';
		let context = stack.context;
		return joinStatements([prefix, context, ...stack.args]);
	},
};
// Basic expressions
/*
function unary(right, op) {
	return `${op}${spaceLR(op, right)}${right}`;
}
function binary(left, right, op) {
	return `${left}${spaceLR(left, op)}${op}${spaceLR(op, right)}${right}`;
}
//*/
function binaryNode(node) {
	let _left = node.left || '';
	let _right = node.right || '';
	let left = `${_left}${spaceLR(_left, node.operator)}`;
	let right = `${spaceLR(node.operator, _right)}${_right}`;
	return `${left}${node.operator}${right}`;
}
function exprTerm(exprArr) {
	return (Array.isArray(exprArr) ? exprArr.join(';') : exprArr);
}
/**
 * Join string array
 * @param {string[] | undefined} arr
 */
function joinStatements(arr) {
	if (!arr || arr.length === 0) return '';
	return arr.reduce((acc, curr) => {
		let term = curr || '';
		return (acc + spaceLR(acc, term) + term);
	});
}
/**
 * Insert whitespace between alphanumerics
 * @param {string} str1 Left string
 * @param {string} str2 Right string
 */
function spaceLR(str1, str2) {
	if (!str2 || !str1) return '';
	return /[\w_$?-]$/gmi.test(str1) && /^(?:[\w_-]|::)/gmi.test(str2) ? ' ' : '';
}
/**
 * Wrap string in spaces if alphanumeric
 * @param {string} str contained string
 * @param {bool} end Add ws at end
 */
function spaceSE(str, end = true) {
	let _start = /^(?:[\w_-]|::)/gmi.test(str) ? ' ' : '';
	let _end = /[\w_$?-]$/gmi.test(str) && end ? ' ' : '';
	return `${_start}${str}${_end}`;
}
function spaceAlphaNum(str) {
	let start = /^[\w]/gmi.test(str) ? ' ' : '';
	let end = /[\w]$/gmi.test(str) ? ' ' : '';
	return `${start}${str}${end}`; 

}
/**
 * Check if value is node
 * @param {any} node CST node
 */
function isNode(node) {
	return (typeof node === 'object' && node != undefined);
}
/**
 * filter nodes by type property
 * @param {any} node CST node
 */
function getNodeType(node) {
	return ('type' in node) ? node.type : undefined;
}
//-----------------------------------------------------------------------------------
function mxsMinify(cst) {
	return visit(cst, visitorPatterns);
}
module.exports = { mxsMinify, visit, visitorPatterns };
