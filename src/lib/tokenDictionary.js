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
// token descriptions
const tokenDefinitions = {
	'ws': 'White space',
	'newline': 'New Line',
	'comment_BLK': 'Block comment',
	'comment_SL': 'Single line comment',
	'kw_exit': '<exit> keyword',
	'kw_return': '<return> keyword',
	'kw_set': '<set> keyword',
	'kw_when': '<when> keyword',
	'kw_local': '<local> keyword',
	'kw_global': '<global> keyword',
	'kw_persistent': '<persistent global> keyword',
	'kw_if': '<if> keyword',
	'kw_while': '<while> keyword',
	'kw_do': '<do> keyword',
	'kw_for': '<for> keyword',
	'kw_case': '<case> keyword',
	'kw_struct': '<struct> keyword',
	'kw_try': '<try> keyword',
	'kw_at': '<at> keyword',
	'kw_in': '<in> keyword',
	'kw_about': '<about> keyword',
	'kw_with': '<with> keyword',
	'kw_utility': '<utility> declaration',
	'kw_rollout': '<rollout> declaration',
	'kw_tool': '<tool> declaration',
	'kw_rcmenu': '<rcmenu> declaration',
	'kw_macroscript': '<macroscript> declaration',
	'kw_plugin': '<plugin> declaration',
	'kw_not': '<not> keyword',
	'kw_mapped': '<mapped> keyword',
	'string': 'String literal',
	'path': 'pathName literal',
	'name': 'name literal',
	'arraydef': 'Array definition',
	'bitarraydef': 'BitArray definition',
	'time': 'Time literal',
	'kw_null': 'Undefined value',
	'identity': 'Identifier',
	'global_typed': '::global reference',
	'kw_function': 'Function declaration',
	'kw_coordsys': '<coordsys> keyword',
	'kw_context': 'Context statement',
	'kw_undo': '<undo> keyword',
	'posint': 'Number literal <integer>',
	'negint': 'Number literal <-integer>',
	'number': 'Number literal <float>',
	'hex': 'Hex literal',
	'kw_bool': 'Boolean value <false|off>',
	'kw_on': 'Boolean value <true|on>',
	'lparen': 'Left paren <(>',
	'kw_uicontrols': 'UI control',
	'kw_objectset': '<objectset> keyword',
	'kw_time': '<time> keyword',
	'kw_group': '<group> keyword'
};
module.exports = {UIcontrols, kwContext, kwObjectSet, keywordsDB, tokenDefinitions};