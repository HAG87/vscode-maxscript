// moo tokenizer
//import moo from 'moo';
const moo = require('moo');
//-----------------------------------------------------------------------------------
// CASE INSENSITIVE FOR KEYWORKDS
const caseInsensitiveKeywords = map => {
	const transform = moo.keywords(map);
	return text => transform(text.toLowerCase());
};
//-----------------------------------------------------------------------------------
// KEYWORDS
const UIcontrols = [
	'angle', 'bitmap', 'button',
	'checkbox', 'checkbutton', 'colorpicker',
	'combobox', 'curvecontrol', 'dropdownlist',
	'edittext', 'groupbox', 'hyperlink',
	'imgtag', 'label', 'listbox',
	'mapbutton', 'materialbutton', 'multilistbox',
	'pickbutton', 'popupmenu', 'progressbar',
	'radiobuttons', 'slider', 'spinner',
	'subrollout', 'timer', 'dotnetcontrol'
];
const kwContext = [
	"animate",
	"redraw",
	"quiet",
	"printallelements",
	"mxscallstackcaptureenabled",
	"dontrepeatmessages",
	"macrorecorderemitterenabled"
];
const kwObjectSet = [
	'objects', 'geometry', 'lights', 'cameras', 'helpers',
	'shapes', 'systems', 'spacewarps', 'selection'
];
const keywordsDB = {
	'kw_about': 'about',
	'kw_as': 'as',
	'kw_at': 'at',
	'kw_bool': ['true', 'false', 'off'],
	'kw_by': 'by',
	'kw_case': 'case',
	'kw_catch': 'catch',
	'kw_collect': 'collect',
	'kw_compare': ['and', 'or'],
	'kw_context': kwContext,
	'kw_coordsys': 'coordsys',
	'kw_defaultAction': 'defaultaction',
	'kw_do': 'do',
	'kw_dontcollect': 'dontcollect',
	'kw_else': 'else',
	'kw_exit': 'exit',
	'kw_for': 'for',
	'kw_from': 'from',
	'kw_function': ['function', 'fn'],
	'kw_global': 'global',
	'kw_group': 'group',
	'kw_if': 'if',
	'kw_in': 'in',
	'kw_level': 'level',
	'kw_local': 'local',
	'kw_macroscript': 'macroscript',
	'kw_mapped': 'mapped',
	'kw_menuitem': 'menuitem',
	'kw_not': 'not',
	'kw_null': ['undefined', 'unsupplied', 'ok', 'silentvalue'],
	'kw_objectset': kwObjectSet,
	'kw_of': 'of',
	'kw_on': 'on',
	'kw_params': 'parameters',
	'kw_persistent': 'persistent',
	'kw_plugin': 'plugin',
	'kw_rcmenu': 'rcmenu',
	'kw_return': 'return',
	'kw_rollout': 'rollout',
	'kw_scope': ['private', 'public'],
	'kw_separator': 'separator',
	'kw_set': 'set',
	'kw_struct': 'struct',
	'kw_submenu': 'submenu',
	'kw_then': 'then',
	'kw_time': 'time',
	'kw_to': 'to',
	'kw_tool': 'tool',
	'kw_try': 'try',
	'kw_uicontrols': UIcontrols,
	'kw_undo': 'undo',
	'kw_utility': 'utility',
	'kw_when': 'when',
	'kw_where': 'where',
	'kw_while': 'while',
	'kw_with': 'with',
	// 'kw_max':         'max',
	// 'kw_throw':       'throw',
	//'kw_continue':    'continue',
	//'kw_redraw':      'redraw',
};
//-----------------------------------------------------------------------------------
// In order to be able to use rules like this, first I need to change All the src src to Lowers..and exclude strings...?
// {type:'declaration', match: /\blocal\b/},
// {type:'declaration', match: /\bglobal\b/},
// {type:'declaration', match: /\bpersistent\b(?:[ \t]+global\b)/},

// Moo Lexer
var mxLexer = moo.compile(
	{
		// the comments
		comment_SL: { match: /--.*$/, lineBreaks: false, },
		comment_BLK: { match: /\/\*(?:.|[\n\r])*?\*\//, lineBreaks: true, },
		// strings
		string:
			[
				{ match: /@"(?:\\["\\rn]|[^"])*?"/, lineBreaks: true, value: x => x.slice(2, -1) },
				{ match: /"(?:\\["\\rn]|[^"])*?"/, lineBreaks: true, value: x => x.slice(1, -1) },
				// { match: /"""[^]*?"""/, lineBreaks: true, value: x => x.slice(3, -3)},
			],
		// whitespace -  also matches line continuations
		ws: { match: /(?:[ \t]+|(?:[ \t]*?[\\][ \t\r\n]*)+?)/, lineBreaks: true },
		// path_name $mounstrosity*/_?
		path: [
			{ match: /[$](?:[A-Za-z0-9_*?.\\]*)/ },
			{ match: /[$](?:'[^'\r\n]+?')/ },
		],
		// strings ~RESOURCE~
		locale: { match: /~[A-Za-z0-9_]+~/, value: x => x.slice(2, -1) },
		// parameter <param_name>:
		params: {
			match: /[A-Za-z_\u00C0-\u00FF][A-Za-z0-9_\u00C0-\u00FF]*[:]/,
			value: x => x.slice(0, -1)
		},
		// just in case...
		param: { match: /:{1}/ },
		// this [3] should go down the chain, under identity??
		// property <object>.<property>
		property: {
			match: /\.[A-Za-z_\u00C0-\u00FF][A-Za-z0-9_\u00C0-\u00FF]*/, value: x => x.slice(1)
		},
		// ::global variable
		global_typed: { match: /::[A-Za-z_\u00C0-\u00FF][A-Za-z0-9_\u00C0-\u00FF]*/ },
		// IDENTIFIERS
		// includes special alphanumeric chars
		identity: {
			match: /[&-]?[A-Za-z_\u00C0-\u00FF][A-Za-z0-9_\u00C0-\u00FF]*/,
			type: caseInsensitiveKeywords(keywordsDB)
		},
		// a mounstrosity
		typed_iden: {
			match: /'(?:\\['\\rn]|[^'\\\n])*?'/, value: x => x.slice(1, -1)
		},
		// DISABLED TOKENS
		//reference: { match: /\&/},
		// cont:     { match: /\\/},
		//res: {match:/\?/},
		//sharp: {match: /#/},
		// ws:       { match: /[ \t]+/},
		// o_ws: {match: /[\w][^a-zA-Z\d\s:]/, value: x => x.slice(1, -1)},
		// this is handled by the parser recursion...
		//voidparens:   { match: /\(\)/},
		//parens:   { match: /\([ \t\n\r]+\)/},

		// array marker #(...) | #{...}
		arraydef: { match: /#[ \t]*\(/ },
		bitarraydef: { match: /#[ \t]*\{/ },
		// PARENS
		lparen: { match: /\(/ },
		rparen: { match: /\)/ },
		// BRACKETS, BRACES...
		lbracket: { match: '[' },
		rbracket: { match: ']' },
		lbrace: { match: '{' },
		rbrace: { match: '}' },
		// time format
		time: [
			{ match: /(?:(?:[-]?[0-9]+[.])*[0-9]+[mMsSfFtT])+/ },
			{ match: /(?:(?:[-]?[0-9]+[.])[0-9]*[mMsSfFtT])+/ },
			{ match: /[0-9]+[:][0-9]+[.][0-9]*/ }
		],
		// number formats
		number: [
			{ match: /(?:[-]?[0-9]*[.][0-9]+[eEdD][+-]?[0-9]+)/ },
			{ match: /(?:[-]?[0-9]+[eEdD][+-]?[0-9]+)/ },
			{ match: /(?:(?:[-]?[0-9]+)?\.[0-9]+)/ },
			{ match: /(?:[-]?[0-9]+\.(?:[0-9]+)?)/ },
		],
		negint: { match: /[-][0-9]+[LP]?/ },
		posint: { match: /[0-9]+[LP]?/ },
		hex: { match: /0[xX][0-9a-fA-F]+/ },
		// #name literals .. should go higher??
		name:
			[
				{ match: /#[A-Za-z0-9_]+\b/ },
				{ match: /#'[A-Za-z0-9_]+'/ },
			],
		// Operators.
		comparison: ['==', '!=', '>', '<', '>=', '<='],
		assign: ['=', '+=', '-=', '*=', '/='],
		math: ['+', '-', '*', '/', '^'],
		// comparison: [
		//   { match: '>=' },
		//   { match: '<=' },
		//   { match: '==' },
		//   { match: '!=' },
		//   { match: '>'  },
		//   { match: '<'  },
		// ],
		// assign: [
		//   { match: '='  },
		//   { match: '+=' },
		//   { match: '-=' },
		//   { match: '*=' },
		//   { match: '/=' }
		// ],
		// math: [
		//   { match: '+' },
		//   { match: '-' },
		//   { match: '*' },
		//   { match: '/' },
		//   { match: '^' },
		// ],
		// DELIMITERS
		delimiter: { match: /\./ },
		sep: { match: /,/ },
		// NEWLINES
		newline: { match: /(?:\r|\r\n|\n)+/, lineBreaks: true },
		statement: { match: /;/ },
		// [\$?`] COMPLETE WITH UNWANTED CHARS HERE THAT CAN BREAK THE TOKENIZER
		error: [
			{ match: /[¿¡!`´]/, /* error: true  */},
			{ match: /[/?\\]{2,}/},
			// { match: /[?]{2,}/},
		],
		// This contains the rest of the stack in case of error.
		fatalError : moo.error
		// ---- MOO RULES END-----
	});
//-----------------------------------------------------------------------------------
//export {mxLexer};
module.exports = mxLexer;