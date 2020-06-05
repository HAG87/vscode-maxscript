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
						collection.push(_visit(child[j], node, key, level + 1));
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
			res = callbackMap[nodeType](node, stack);
		}
		else if (nodeType) {
			res = node;
		}
		else if (Array.isArray(node)) {
			res = keys.map(x => stack[x]).join(';');
		}
		//--------------------------------
		// console.log(chalk.inverse(res));
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
	Declaration(node, stack) {
		return stack.value ? `${stack.id}=${stack.value}` : stack.id;
	},
	BitRange(node, stack) {
		return `${stack.start}..${stack.end}`;
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
		let args = joinStr(stack.args);
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
	StructScope(node, stack) {
		return stack.value;
	},
	// Functions
	Function(node, stack) {
		let decl = `${node.mapped ? 'mapped ' : ''}${stack.keyword} ${stack.id}`;

		let args = ('args' in stack) ? joinStr(stack.args) : '';
		let params = ('params' in stack) ? joinStr(stack.params) : '';

		let body = exprTerm(stack.body);

		let spacer = args.length > 0 ? spaceLR(decl, args) : spaceLR(decl, params);

		return `${decl}${spacer}${args}${spaceLR(args, params)}${params}=${body}`
		// return (decl + args + params + '=' + spaceLR('=', body) + body);
	},
	FunctionReturn(node, stack) {
		let body = exprTerm(stack.body);
		return `return${spaceLR('return', body)}${body}`;
	},
	// Plugin
	EntityPlugin(node, stack) {
		let body = exprTerm(stack.body);
		return `plugin ${stack.superclass} ${stack.class} ${joinStr(stack.params)}(${body})`;
	},
	EntityPlugin_params(node, stack) {
		let body = exprTerm(stack.body);
		return `parameters ${stack.id} ${joinStr(stack.params)}(${body})`;
	},
	PluginParam(node, stack) {
		return `${stack.id} ${joinStr(stack.params)}`;
	},
	// Tool
	EntityTool(node, stack) {
		return `tool ${stack.id} ${joinStr(stack.params)}(${exprTerm(stack.body)})`;
	},
	// MacroScript
	EntityMacroscript(node, stack) {
		return `macroScript ${stack.id} ${joinStr(stack.params)}(${exprTerm(stack.body)})`;
	},
	// rcMenu
	EntityRcmenu(node, stack) {
		return `rcmenu ${stack.id}(${exprTerm(stack.body)})`;
	},
	EntityRcmenu_submenu(node, stack) {
		return `subMenu${stack.label}${stack.params}(${exprTerm(stack.body)})`;
	},
	EntityRcmenu_menuitem(node, stack) {
		return `menuItem ${stack.id}${stack.label}${joinStr(stack.params)}`;
	},
	EntityRcmenu_separator(node, stack) {
		let params = joinStr(stack.params);
		return `separator ${stack.id}${spaceLR(stack.id, params)}${params}`;
	},
	// Utility - Rollout
	EntityUtility(node, stack) {
		return `utility ${stack.id}${stack.title}${joinStr(stack.params)}(${exprTerm(stack.body)})`;
	},
	EntityRollout(node, stack) {
		return `rollout ${stack.id}${stack.title}${joinStr(stack.params)}(${exprTerm(stack.body)})`;
	},
	EntityRolloutGroup(node, stack) {
		return `group${stack.id}(${exprTerm(stack.body)})`;
	},
	EntityRolloutControl(node, stack) {
		return `${stack.class} ${stack.id}${stack.text || ' '}${joinStr(stack.params)}`;
	},
	// Event
	Event(node, stack) {
		let body = exprTerm(stack.body);
		return `on ${stack.args} ${stack.modifier}${spaceLR(stack.modifier, body)}${body}`;
	},
	EventArgs(node, stack) {
		let args = [].concat((stack.target || ''), (stack.event || ''), (joinStr(stack.args))).filter(x => x.length > 0).join(' ');
		return args;
	},
	WhenStatement(node, stack) {
		let args = joinStr(stack.args);
		let body = exprTerm(stack.body);

		return `when${spaceLR('when', args)}${args}${spaceLR(args, 'do')}do${spaceLR('do', body)}${body}`;
	},
	// Declarations
	VariableDeclaration(node, stack) {
		return `${node.scope} ${stack.decls.join(',')}`;
	},
	// SIMPLE EXPRESSIONS
	MathExpression(node, stack) { return binaryNode(stack); },
	LogicalExpression(node, stack) { return binaryNode(stack); },
	UnaryExpression(node, stack) {
		let ws = stack.right[0] !== '-' ? '' : ' ';
		return `-${ws}${stack.right}`;
	},
	IfStatement(node, stack) {
		let test = spaceSE(stack.test);
		let operator = stack.operator && stack.operator === 'do' ? 'do' : 'then';
		let consequent;
		let res;
		if (stack.alternate) {
			consequent = spaceSE(stack.consequent);
			let alternate = spaceSE(stack.alternate, false);
			res = `if${test}${operator}${consequent}else${alternate}`;
		}
		else {
			consequent = spaceSE(stack.consequent, false);
			res = `if${test}${operator}${consequent}`;
		}
		return res;
	},
	LoopExit(node, stack) {
		let body = exprTerm(stack.body);
		return `exit with${spaceLR('with', body)}${body}`;
	},
	TryStatement(node, stack) {
		let block = spaceSE(stack.block);
		let finalizer = spaceSE(stack.finalizer, false);
		return `try${block}catch${finalizer}`;
	},
	DoWhileStatement(node, stack) {
		let body = exprTerm(stack.body);
		return `do${spaceSE(body)}while${spaceLR('while', stack.test)}${stack.test}`;
	},
	WhileStatement(node, stack) {
		let test = spaceSE(stack.test);
		let body = exprTerm(stack.body);
		return `while${test}do${spaceLR('do', body)}${body}`;
	},
	ForStatement(node, stack) {
		let it = `for ${stack.variable}${spaceLR(stack.variable, stack.iteration)}${stack.iteration}`;
		let val = `${spaceLR(stack.iteration, stack.value)}${stack.value}`;
		let seq = spaceSE(stack.sequence);
		let body = exprTerm(stack.body);
		let spacer = (stack.sequence.length > 0) ? spaceLR(seq, stack.action) : spaceLR(val, stack.action);
		let act = `${spacer}${stack.action}${spaceLR(stack.action, body)}${body}`;
		return (it + val + seq + act);
	},
	ForLoopSequence(node, stack) {
		let _to = (stack.to.length > 0) ? `to${spaceSE(stack.to)}` : '';
		let _by = (stack.by.length > 0) ? `by${spaceSE(stack.by)}` : '';
		let _while = (stack.while.length > 0) ? `while${spaceSE(stack.while)}` : '';
		let _where = (stack.where.length > 0) ? `where${spaceSE(stack.where, false)}` : '';
		return (_to + _by + _while + _where);
	},
	CaseStatement(node, stack) {
		return `case${spaceSE(stack.test)}of(${stack.cases.join(';')});`;
	},
	CaseClause(node, stack) {
		let body = exprTerm(stack.body);
		return `${stack.case}:${body}`;
	},
	// context expressions
	ContextStatement(node, stack) {
		let contx = stack.context.join(',');
		let body = exprTerm(stack.body);
		return `${contx}${spaceLR(contx, body)}${body}`;
	},
	ContextExpression(node, stack) {
		let prefix = stack.prefix || '';
		let context = stack.context;
		let args = joinStr(stack.args);
		return `${prefix}${spaceLR(prefix, context)}${context}${spaceLR(context, args)}${args}`;
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
	if (Array.isArray(exprArr)) {
		return exprArr.join(';');
	} else {
		return exprArr;
	}
}
/**
 * Join string array
 * @param {string[] | undefined} arr
 */
function joinStr(arr) {
	if (!arr || arr.length === 0) {
		return '';
	}
	return arr.reduce((acc, curr) => {
		return acc + spaceLR(acc, curr) + curr;
	});
}
/**
 * Insert whitespace between alphanumerics
 * @param {string} str1 Left string
 * @param {string} str2 Right string
 */
function spaceLR(str1, str2) {
	if (!str2 || !str1) {
		return '';
	}
	else {
		return /[\w_$?-]$/gmi.test(str1) && /^[\w_-]/gmi.test(str2) ? ' ' : '';
	}
}
/**
 * Wrap string in spaces if alphanumeric
 * @param {string} str contained string
 * @param {bool} end Add ws at end
 */
function spaceSE(str, end = true) {
	let _start = /^[\w_-]/gmi.test(str) ? ' ' : '';
	let _end = /[\w_$?-]$/gmi.test(str) && end ? ' ' : '';
	return `${_start}${str}${_end}`;
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
