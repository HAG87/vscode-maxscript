// Generated automatically by nearley, version 2.19.2
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

	const mxLexer = require('./mooTokenize.js');
    // Utilities
    // WARN! THIS COULD NOT BE COMPATIBLE!!
    const empty = '';

    const flatten = arr => arr != null ? arr.flat().filter(e => e != null) : [];

    const collectSub = (arr, index) => arr !== null ? arr.map(e => e[index]) : [];

    const filterNull = arr => arr !== null ? arr.filter(e => e != null) : [];

    const tokenType = (t, newytpe) => {t.type = newytpe; return t;}

    const merge = (a, b) => {
        if (a != null && b != null) {
            return ([].concat(a, ...b).filter(e => e != null));
        } else if (a !== null) {
            return (Array.isArray(a) ? a.filter(e => e != null) : [a]);
        } else return null;
    }

    const convertToken = (token, newytpe) => {
        let node = {...token};
            node.type = newtype;
        return node;
    }
    // Offset is not reilable, changed to line - col
    const getLoc = (start, end) => {
        if (!start) {return null;}

        let startOffset = start.loc ? start.loc.start : {line: start.line, col: start.col};
        let endOffset;

        if (!end) {
            if (start.loc) {
                endOffset = start.loc.end;
            } else {
                endOffset = {
                    line: start.line,
                    col: (start.text != null ? start.col + (start.text.length - 1): start.col)
                };                
            }
        } else {
            if (end.loc) {
                endOffset = end.loc.end;
            } else {
                endOffset = {
                    line: end.line,
                    col: (end.text != null ? end.col + (end.text.length - 1) : end.col)                
                };
            }
        };
        return ({start: startOffset, end: endOffset});
    }
    // parser configuration
    //let capture_ws = false;
    //let capture_comments = false;
var grammar = {
    Lexer: mxLexer,
    ParserRules: [
    {"name": "Main", "symbols": ["_", "_expr_seq", "_"], "postprocess": d => d[1]},
    {"name": "expr", "symbols": ["simple_expr"], "postprocess": id},
    {"name": "expr", "symbols": ["variable_decl"], "postprocess": id},
    {"name": "expr", "symbols": ["assignment"], "postprocess": id},
    {"name": "expr", "symbols": ["if_expr"], "postprocess": id},
    {"name": "expr", "symbols": ["while_loop"], "postprocess": id},
    {"name": "expr", "symbols": ["do_loop"], "postprocess": id},
    {"name": "expr", "symbols": ["for_loop"], "postprocess": id},
    {"name": "expr", "symbols": ["loop_exit"], "postprocess": id},
    {"name": "expr", "symbols": ["case_expr"], "postprocess": id},
    {"name": "expr", "symbols": ["struct_def"], "postprocess": id},
    {"name": "expr", "symbols": ["try_expr"], "postprocess": id},
    {"name": "expr", "symbols": ["function_def"], "postprocess": id},
    {"name": "expr", "symbols": ["fn_return"], "postprocess": id},
    {"name": "expr", "symbols": ["context_expr"], "postprocess": id},
    {"name": "expr", "symbols": ["utility_def"], "postprocess": id},
    {"name": "expr", "symbols": ["rollout_def"], "postprocess": id},
    {"name": "expr", "symbols": ["tool_def"], "postprocess": id},
    {"name": "expr", "symbols": ["rcmenu_def"], "postprocess": id},
    {"name": "expr", "symbols": ["macroscript_def"], "postprocess": id},
    {"name": "expr", "symbols": ["plugin_def"], "postprocess": id},
    {"name": "expr", "symbols": ["change_handler"], "postprocess": id},
    {"name": "simple_expr", "symbols": ["math_expr"], "postprocess": id},
    {"name": "simple_expr", "symbols": ["compare_expr"], "postprocess": id},
    {"name": "simple_expr", "symbols": ["logical_expr"], "postprocess": id},
    {"name": "expr_seq", "symbols": ["LPAREN", "_expr_seq", "RPAREN"], "postprocess":  d => ({
            type: 'BlockStatement',
            body: d[1],
            //loc: getLoc(d[0], d[2])
        })},
    {"name": "expr_seq", "symbols": [{"literal":"("}, "_", {"literal":")"}], "postprocess":  d => ({
            type: 'BlockStatement',
            body: [],
            //loc: getLoc(d[0], d[2])
        })},
    {"name": "_expr_seq", "symbols": ["_expr_seq", "EOL", "expr"], "postprocess": d => [].concat(d[0], d[2])},
    {"name": "_expr_seq", "symbols": ["expr"]},
    {"name": "rcmenu_def$subexpression$1", "symbols": [(mxLexer.has("kw_rcmenu") ? {type: "kw_rcmenu"} : kw_rcmenu), "__"]},
    {"name": "rcmenu_def$ebnf$1", "symbols": ["rcmenu_clauses"], "postprocess": id},
    {"name": "rcmenu_def$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "rcmenu_def", "symbols": ["rcmenu_def$subexpression$1", "var_name", "_", "LPAREN", "rcmenu_def$ebnf$1", "RPAREN"], "postprocess":  d => ({
            type: 'EntityRcmenu',
            id:   d[1],
            body: d[4],
            loc: getLoc(d[0][0], d[5])
        })},
    {"name": "rcmenu_clauses", "symbols": ["rcmenu_clauses", "EOL", "rcmenu_clause"], "postprocess": d => [].concat(d[0], d[2])},
    {"name": "rcmenu_clauses", "symbols": ["rcmenu_clause"], "postprocess": id},
    {"name": "rcmenu_clause", "symbols": ["variable_decl"], "postprocess": id},
    {"name": "rcmenu_clause", "symbols": ["function_def"], "postprocess": id},
    {"name": "rcmenu_clause", "symbols": ["struct_def"], "postprocess": id},
    {"name": "rcmenu_clause", "symbols": ["event_handler"], "postprocess": id},
    {"name": "rcmenu_clause", "symbols": ["rcmenu_submenu"], "postprocess": id},
    {"name": "rcmenu_clause", "symbols": ["rcmenu_sep"], "postprocess": id},
    {"name": "rcmenu_clause", "symbols": ["rcmenu_item"], "postprocess": id},
    {"name": "rcmenu_submenu$subexpression$1", "symbols": [(mxLexer.has("kw_submenu") ? {type: "kw_submenu"} : kw_submenu), "_"]},
    {"name": "rcmenu_submenu$ebnf$1$subexpression$1", "symbols": ["_", "parameter"]},
    {"name": "rcmenu_submenu$ebnf$1", "symbols": ["rcmenu_submenu$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "rcmenu_submenu$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "rcmenu_submenu$ebnf$2", "symbols": ["rcmenu_clauses"], "postprocess": id},
    {"name": "rcmenu_submenu$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "rcmenu_submenu", "symbols": ["rcmenu_submenu$subexpression$1", "string", "rcmenu_submenu$ebnf$1", "_", "LPAREN", "rcmenu_submenu$ebnf$2", "RPAREN"], "postprocess":  d => ({
            type:   'EntityRcmenu_submenu',
            label:  d[1],
            params: flatten(d[2]),
            body:   d[5],
            loc: getLoc(d[0][0], d[6])
        })},
    {"name": "rcmenu_sep$subexpression$1", "symbols": [(mxLexer.has("kw_separator") ? {type: "kw_separator"} : kw_separator), "__"]},
    {"name": "rcmenu_sep$ebnf$1$subexpression$1", "symbols": ["_", "rcmenu_param"]},
    {"name": "rcmenu_sep$ebnf$1", "symbols": ["rcmenu_sep$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "rcmenu_sep$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "rcmenu_sep", "symbols": ["rcmenu_sep$subexpression$1", "var_name", "rcmenu_sep$ebnf$1"], "postprocess":  d => ({
            type:   'EntityRcmenu_separator',
            id:     d[1],
            params: flatten(d[2]),
        })},
    {"name": "rcmenu_item$subexpression$1", "symbols": [(mxLexer.has("kw_menuitem") ? {type: "kw_menuitem"} : kw_menuitem), "__"]},
    {"name": "rcmenu_item$ebnf$1", "symbols": []},
    {"name": "rcmenu_item$ebnf$1$subexpression$1", "symbols": ["_", "rcmenu_param"]},
    {"name": "rcmenu_item$ebnf$1", "symbols": ["rcmenu_item$ebnf$1", "rcmenu_item$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "rcmenu_item", "symbols": ["rcmenu_item$subexpression$1", "var_name", "_", "string", "rcmenu_item$ebnf$1"], "postprocess":  d => ({
            type:   'EntityRcmenu_menuitem',
            id:     d[1],
            label:  d[3],
            params: flatten(d[4]),
        })},
    {"name": "rcmenu_param$subexpression$1", "symbols": ["operand"]},
    {"name": "rcmenu_param$subexpression$1", "symbols": ["function_def"]},
    {"name": "rcmenu_param", "symbols": ["param_name", "_", "rcmenu_param$subexpression$1"], "postprocess":  d => ({
            type: 'ParameterAssignment',
            param: d[0],
            value: d[2],
        })},
    {"name": "plugin_def$subexpression$1", "symbols": [(mxLexer.has("kw_plugin") ? {type: "kw_plugin"} : kw_plugin), "__"]},
    {"name": "plugin_def$ebnf$1", "symbols": []},
    {"name": "plugin_def$ebnf$1$subexpression$1", "symbols": ["_", "parameter"]},
    {"name": "plugin_def$ebnf$1", "symbols": ["plugin_def$ebnf$1", "plugin_def$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "plugin_def", "symbols": ["plugin_def$subexpression$1", "var_name", "__", "var_name", "plugin_def$ebnf$1", "_", "LPAREN", "plugin_clauses", "RPAREN"], "postprocess":  d => ({
            type:       'EntityPlugin',
            superclass: d[1],
            class:      d[3],
            params:     flatten(d[4]),
            body:       d[7],
            loc:    getLoc(d[0][0], d[8])
        })},
    {"name": "plugin_clauses$ebnf$1", "symbols": []},
    {"name": "plugin_clauses$ebnf$1$subexpression$1", "symbols": ["EOL", "plugin_clause"]},
    {"name": "plugin_clauses$ebnf$1", "symbols": ["plugin_clauses$ebnf$1", "plugin_clauses$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "plugin_clauses", "symbols": ["plugin_clause", "plugin_clauses$ebnf$1"], "postprocess": d => merge(d[0], d[1])},
    {"name": "plugin_clause", "symbols": ["variable_decl"], "postprocess": id},
    {"name": "plugin_clause", "symbols": ["function_def"], "postprocess": id},
    {"name": "plugin_clause", "symbols": ["struct_def"], "postprocess": id},
    {"name": "plugin_clause", "symbols": ["tool_def"], "postprocess": id},
    {"name": "plugin_clause", "symbols": ["rollout_def"], "postprocess": id},
    {"name": "plugin_clause", "symbols": ["event_handler"], "postprocess": id},
    {"name": "plugin_clause", "symbols": ["plugin_parameter"], "postprocess": id},
    {"name": "plugin_parameter$subexpression$1", "symbols": [(mxLexer.has("kw_parameters") ? {type: "kw_parameters"} : kw_parameters), "__"]},
    {"name": "plugin_parameter$ebnf$1", "symbols": []},
    {"name": "plugin_parameter$ebnf$1$subexpression$1", "symbols": ["_", "parameter"]},
    {"name": "plugin_parameter$ebnf$1", "symbols": ["plugin_parameter$ebnf$1", "plugin_parameter$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "plugin_parameter$ebnf$2", "symbols": ["param_clauses"], "postprocess": id},
    {"name": "plugin_parameter$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "plugin_parameter", "symbols": ["plugin_parameter$subexpression$1", "var_name", "plugin_parameter$ebnf$1", "_", "LPAREN", "plugin_parameter$ebnf$2", "RPAREN"], "postprocess":  d => ({
            type:   'EntityPlugin_params',
            id:     d[1],
            params: flatten(d[2]),
            body:   d[5] || [],
            loc: getLoc(d[0][0], d[6])
        })},
    {"name": "param_clauses", "symbols": ["param_clauses", "EOL", "param_clause"], "postprocess": d => [].concat(d[0], d[2])},
    {"name": "param_clauses", "symbols": ["param_clause"]},
    {"name": "param_clause", "symbols": ["param_defs"], "postprocess": id},
    {"name": "param_clause", "symbols": ["event_handler"], "postprocess": id},
    {"name": "param_defs$ebnf$1", "symbols": []},
    {"name": "param_defs$ebnf$1$subexpression$1", "symbols": ["_", "parameter"]},
    {"name": "param_defs$ebnf$1", "symbols": ["param_defs$ebnf$1", "param_defs$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "param_defs", "symbols": ["var_name", "param_defs$ebnf$1"], "postprocess":  d => ({
                type:   'PluginParam',
                id:     d[0],
                params: flatten(d[1])
        })},
    {"name": "tool_def$subexpression$1", "symbols": [(mxLexer.has("kw_tool") ? {type: "kw_tool"} : kw_tool), "__"]},
    {"name": "tool_def$ebnf$1", "symbols": []},
    {"name": "tool_def$ebnf$1$subexpression$1", "symbols": ["_", "parameter"]},
    {"name": "tool_def$ebnf$1", "symbols": ["tool_def$ebnf$1", "tool_def$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "tool_def", "symbols": ["tool_def$subexpression$1", "var_name", "tool_def$ebnf$1", "_", "LPAREN", "tool_clauses", "RPAREN"], "postprocess":  d => ({
            type:   'EntityTool',
            id:     d[1],
            params: flatten(d[2]),
            body:   d[5],
            loc:    getLoc(d[0][0], d[6])
        })},
    {"name": "tool_clauses$ebnf$1", "symbols": []},
    {"name": "tool_clauses$ebnf$1$subexpression$1", "symbols": ["EOL", "tool_clause"]},
    {"name": "tool_clauses$ebnf$1", "symbols": ["tool_clauses$ebnf$1", "tool_clauses$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "tool_clauses", "symbols": ["tool_clause", "tool_clauses$ebnf$1"], "postprocess": d => merge(...d)},
    {"name": "tool_clause", "symbols": ["variable_decl"], "postprocess": id},
    {"name": "tool_clause", "symbols": ["function_def"], "postprocess": id},
    {"name": "tool_clause", "symbols": ["struct_def"], "postprocess": id},
    {"name": "tool_clause", "symbols": ["event_handler"], "postprocess": id},
    {"name": "utility_def$subexpression$1", "symbols": [(mxLexer.has("kw_utility") ? {type: "kw_utility"} : kw_utility), "__"]},
    {"name": "utility_def$ebnf$1", "symbols": []},
    {"name": "utility_def$ebnf$1$subexpression$1", "symbols": ["_", "parameter"]},
    {"name": "utility_def$ebnf$1", "symbols": ["utility_def$ebnf$1", "utility_def$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "utility_def", "symbols": ["utility_def$subexpression$1", "var_name", "_", "operand", "utility_def$ebnf$1", "_", "LPAREN", "utility_clauses", "RPAREN"], "postprocess":  d => ({
            type:   'EntityUtility',
            id:     d[1],
            title:  d[3],
            params: flatten(d[4]),
            body:   d[7],
            loc:    getLoc(d[0][0], d[8])
        })},
    {"name": "utility_clauses$ebnf$1", "symbols": []},
    {"name": "utility_clauses$ebnf$1$subexpression$1", "symbols": ["EOL", "utility_clause"]},
    {"name": "utility_clauses$ebnf$1", "symbols": ["utility_clauses$ebnf$1", "utility_clauses$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "utility_clauses", "symbols": ["utility_clause", "utility_clauses$ebnf$1"], "postprocess": d => merge(...d)},
    {"name": "utility_clause", "symbols": ["rollout_clause"], "postprocess": id},
    {"name": "utility_clause", "symbols": ["rollout_def"], "postprocess": id},
    {"name": "rollout_def$subexpression$1", "symbols": [(mxLexer.has("kw_rollout") ? {type: "kw_rollout"} : kw_rollout), "__"]},
    {"name": "rollout_def$ebnf$1", "symbols": []},
    {"name": "rollout_def$ebnf$1$subexpression$1", "symbols": ["_", "parameter"]},
    {"name": "rollout_def$ebnf$1", "symbols": ["rollout_def$ebnf$1", "rollout_def$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "rollout_def", "symbols": ["rollout_def$subexpression$1", "var_name", "_", "operand", "rollout_def$ebnf$1", "_", "LPAREN", "rollout_clauses", "RPAREN"], "postprocess":  d => ({
            type:   'EntityRollout',
            id:     d[1],
            title:  d[3],
            params: flatten(d[4]),
            body:   d[7],
            loc:    getLoc(d[0][0], d[8])
        })},
    {"name": "rollout_clauses$ebnf$1", "symbols": []},
    {"name": "rollout_clauses$ebnf$1$subexpression$1", "symbols": ["EOL", "rollout_clause"]},
    {"name": "rollout_clauses$ebnf$1", "symbols": ["rollout_clauses$ebnf$1", "rollout_clauses$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "rollout_clauses", "symbols": ["rollout_clause", "rollout_clauses$ebnf$1"], "postprocess": d => merge(...d)},
    {"name": "rollout_clause", "symbols": ["variable_decl"], "postprocess": id},
    {"name": "rollout_clause", "symbols": ["function_def"], "postprocess": id},
    {"name": "rollout_clause", "symbols": ["struct_def"], "postprocess": id},
    {"name": "rollout_clause", "symbols": ["item_group"], "postprocess": id},
    {"name": "rollout_clause", "symbols": ["rollout_item"], "postprocess": id},
    {"name": "rollout_clause", "symbols": ["event_handler"], "postprocess": id},
    {"name": "rollout_clause", "symbols": ["tool_def"], "postprocess": id},
    {"name": "rollout_clause", "symbols": ["rollout_def"], "postprocess": id},
    {"name": "item_group$subexpression$1", "symbols": [(mxLexer.has("kw_group") ? {type: "kw_group"} : kw_group), "_"]},
    {"name": "item_group", "symbols": ["item_group$subexpression$1", "string", "_", "LPAREN", "group_clauses", "RPAREN"], "postprocess":  d => ({
            type: 'EntityRolloutGroup',
            id:   d[1],
            body: d[4],
            loc:getLoc(d[0][0], d[5])
        })},
    {"name": "group_clauses", "symbols": ["group_clauses", "EOL", "rollout_item"], "postprocess": d => [].concat(d[0], d[2])},
    {"name": "group_clauses", "symbols": ["rollout_item"]},
    {"name": "rollout_item$ebnf$1$subexpression$1", "symbols": ["_", "operand"]},
    {"name": "rollout_item$ebnf$1", "symbols": ["rollout_item$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "rollout_item$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "rollout_item$ebnf$2", "symbols": []},
    {"name": "rollout_item$ebnf$2$subexpression$1", "symbols": ["_", "parameter"]},
    {"name": "rollout_item$ebnf$2", "symbols": ["rollout_item$ebnf$2", "rollout_item$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "rollout_item", "symbols": [(mxLexer.has("kw_uicontrols") ? {type: "kw_uicontrols"} : kw_uicontrols), "__", "var_name", "rollout_item$ebnf$1", "rollout_item$ebnf$2"], "postprocess":  d => ({
            type:   'EntityRolloutControl',
            class:  d[0],
            id:     d[2],
            text:   (d[3] != null ? d[3][1] : null),
            params: flatten(d[4])
        })},
    {"name": "macroscript_def$subexpression$1", "symbols": [(mxLexer.has("kw_macroscript") ? {type: "kw_macroscript"} : kw_macroscript), "__"]},
    {"name": "macroscript_def$ebnf$1", "symbols": []},
    {"name": "macroscript_def$ebnf$1$subexpression$1", "symbols": ["_", "macro_script_param"]},
    {"name": "macroscript_def$ebnf$1", "symbols": ["macroscript_def$ebnf$1", "macroscript_def$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "macroscript_def$ebnf$2$subexpression$1", "symbols": ["macro_script_body"]},
    {"name": "macroscript_def$ebnf$2", "symbols": ["macroscript_def$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "macroscript_def$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "macroscript_def", "symbols": ["macroscript_def$subexpression$1", "var_name", "macroscript_def$ebnf$1", "_", "LPAREN", "macroscript_def$ebnf$2", "RPAREN"], "postprocess":  d => ({
            type:   'EntityMacroscript',
            id:     d[1],
            params: flatten(d[2]),
            body:   d[5] || [],
            loc:    getLoc(d[0][0], d[6])
        })},
    {"name": "macro_script_param$subexpression$1", "symbols": ["operand"]},
    {"name": "macro_script_param$subexpression$1", "symbols": ["resource"]},
    {"name": "macro_script_param", "symbols": ["param_name", "_", "macro_script_param$subexpression$1"], "postprocess":  d => ({
            type: 'ParameterAssignment',
            param: d[0],
            value: d[2][0]
        })},
    {"name": "macro_script_body$ebnf$1", "symbols": []},
    {"name": "macro_script_body$ebnf$1$subexpression$1", "symbols": ["EOL", "macro_script_clause"]},
    {"name": "macro_script_body$ebnf$1", "symbols": ["macro_script_body$ebnf$1", "macro_script_body$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "macro_script_body", "symbols": ["macro_script_clause", "macro_script_body$ebnf$1"], "postprocess": d => merge(...d)},
    {"name": "macro_script_clause", "symbols": ["expr"], "postprocess": id},
    {"name": "macro_script_clause", "symbols": ["event_handler"], "postprocess": id},
    {"name": "struct_def$subexpression$1", "symbols": [(mxLexer.has("kw_struct") ? {type: "kw_struct"} : kw_struct), "__"]},
    {"name": "struct_def", "symbols": ["struct_def$subexpression$1", "var_name", "_", "LPAREN", "struct_members", "RPAREN"], "postprocess":  d => ({
            type: 'Struct',
            id:   d[1],
            body: d[4],
            loc:  getLoc(d[0][0], d[5])
        })},
    {"name": "struct_members$subexpression$1", "symbols": ["_", {"literal":","}, "_"]},
    {"name": "struct_members", "symbols": ["struct_members", "struct_members$subexpression$1", "_struct_member"], "postprocess": d => [].concat(d[0], d[2])},
    {"name": "struct_members", "symbols": ["_struct_member"]},
    {"name": "_struct_member", "symbols": ["str_scope", "_EOL_", "struct_member"], "postprocess": d => [].concat(d[0], d[2])},
    {"name": "_struct_member", "symbols": ["struct_member"], "postprocess": id},
    {"name": "_struct_member", "symbols": ["str_scope"], "postprocess": id},
    {"name": "str_scope", "symbols": [(mxLexer.has("kw_scope") ? {type: "kw_scope"} : kw_scope)], "postprocess":  d => ({
            type:'StructScope',
            value: d[0]
        }) },
    {"name": "struct_member", "symbols": ["decl"], "postprocess": id},
    {"name": "struct_member", "symbols": ["function_def"], "postprocess": id},
    {"name": "struct_member", "symbols": ["event_handler"], "postprocess": id},
    {"name": "event_handler$subexpression$1", "symbols": [(mxLexer.has("kw_on") ? {type: "kw_on"} : kw_on), "__"]},
    {"name": "event_handler", "symbols": ["event_handler$subexpression$1", "event_args", "__", "event_action", "_", "expr"], "postprocess":  d => ({
            type:     'Event',
            args:     d[1],
            modifier: d[3],
            body:     d[5]
        }) },
    {"name": "event_action", "symbols": [(mxLexer.has("kw_do") ? {type: "kw_do"} : kw_do)], "postprocess": id},
    {"name": "event_action", "symbols": [(mxLexer.has("kw_return") ? {type: "kw_return"} : kw_return)], "postprocess": id},
    {"name": "event_args", "symbols": ["var_name"], "postprocess": d => ({type: 'EventArgs', event: d[0]})},
    {"name": "event_args", "symbols": ["var_name", "__", "var_name"], "postprocess": d => ({type: 'EventArgs', target: d[0], event: d[2]})},
    {"name": "event_args$ebnf$1$subexpression$1", "symbols": ["__", "var_name"]},
    {"name": "event_args$ebnf$1", "symbols": ["event_args$ebnf$1$subexpression$1"]},
    {"name": "event_args$ebnf$1$subexpression$2", "symbols": ["__", "var_name"]},
    {"name": "event_args$ebnf$1", "symbols": ["event_args$ebnf$1", "event_args$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "event_args", "symbols": ["var_name", "__", "var_name", "event_args$ebnf$1"], "postprocess":  d => ({
            type: 'EventArgs',
            target: d[0],
            event: d[2],
            args: flatten(d[3])}
        )},
    {"name": "change_handler$ebnf$1$subexpression$1", "symbols": ["when_param", "_"]},
    {"name": "change_handler$ebnf$1$subexpression$1", "symbols": ["when_param", "_", "when_param", "_"]},
    {"name": "change_handler$ebnf$1", "symbols": ["change_handler$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "change_handler$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "change_handler$ebnf$2$subexpression$1", "symbols": ["var_name", "__"]},
    {"name": "change_handler$ebnf$2", "symbols": ["change_handler$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "change_handler$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "change_handler", "symbols": [(mxLexer.has("kw_when") ? {type: "kw_when"} : kw_when), "__", "var_name", "__", "operand", "__", "var_name", "__", "change_handler$ebnf$1", "change_handler$ebnf$2", (mxLexer.has("kw_do") ? {type: "kw_do"} : kw_do), "_", "expr"], "postprocess":  d=> ({
            type:'WhenStatement',
            args: filterNull( [].concat(d[2],d[4],d[6],d[8],d[9]) ),
            body:d[12],
            loc:getLoc(d[0])
        })},
    {"name": "change_handler$ebnf$3$subexpression$1", "symbols": ["when_param", "_"]},
    {"name": "change_handler$ebnf$3$subexpression$1", "symbols": ["when_param", "_", "when_param", "_"]},
    {"name": "change_handler$ebnf$3", "symbols": ["change_handler$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "change_handler$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "change_handler$ebnf$4$subexpression$1", "symbols": ["var_name", "_"]},
    {"name": "change_handler$ebnf$4", "symbols": ["change_handler$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "change_handler$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "change_handler", "symbols": [(mxLexer.has("kw_when") ? {type: "kw_when"} : kw_when), "__", "operand", "__", "var_name", "__", "change_handler$ebnf$3", "change_handler$ebnf$4", (mxLexer.has("kw_do") ? {type: "kw_do"} : kw_do), "_", "expr"], "postprocess":  d=> ({
            type:'WhenStatement',
            args:filterNull( [].concat(d[2],d[4],d[6],d[7]) ),
            body:d[10],
            loc:getLoc(d[0])
        })},
    {"name": "when_param", "symbols": ["param_name", "_", "name_value"], "postprocess":  d => ({
            type: 'ParameterAssignment',
            param: d[0],
            value: d[2],
        })},
    {"name": "function_def$ebnf$1$subexpression$1", "symbols": ["_", "var_name"]},
    {"name": "function_def$ebnf$1", "symbols": ["function_def$ebnf$1$subexpression$1"]},
    {"name": "function_def$ebnf$1$subexpression$2", "symbols": ["_", "var_name"]},
    {"name": "function_def$ebnf$1", "symbols": ["function_def$ebnf$1", "function_def$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "function_def$ebnf$2$subexpression$1", "symbols": ["_", "fn_params"]},
    {"name": "function_def$ebnf$2", "symbols": ["function_def$ebnf$2$subexpression$1"]},
    {"name": "function_def$ebnf$2$subexpression$2", "symbols": ["_", "fn_params"]},
    {"name": "function_def$ebnf$2", "symbols": ["function_def$ebnf$2", "function_def$ebnf$2$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "function_def$subexpression$1", "symbols": ["_", {"literal":"="}, "_"]},
    {"name": "function_def", "symbols": ["function_decl", "__", "var_name", "function_def$ebnf$1", "function_def$ebnf$2", "function_def$subexpression$1", "expr"], "postprocess":  d => ({
            ...d[0],
            id:     d[2],
            args:   (d[3].map(x => x[1])),
            params: (d[4].map(x => x[1])),
            body:   d[6],
        
        })},
    {"name": "function_def$ebnf$3$subexpression$1", "symbols": ["_", "var_name"]},
    {"name": "function_def$ebnf$3", "symbols": ["function_def$ebnf$3$subexpression$1"]},
    {"name": "function_def$ebnf$3$subexpression$2", "symbols": ["_", "var_name"]},
    {"name": "function_def$ebnf$3", "symbols": ["function_def$ebnf$3", "function_def$ebnf$3$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "function_def$subexpression$2", "symbols": ["_", {"literal":"="}, "_"]},
    {"name": "function_def", "symbols": ["function_decl", "__", "var_name", "function_def$ebnf$3", "function_def$subexpression$2", "expr"], "postprocess":  d => ({
            ...d[0],
            id:     d[2],
            args:   (d[3].map(x => x[1])),
            params: [],
            body:   d[5],
        })},
    {"name": "function_def$ebnf$4$subexpression$1", "symbols": ["_", "fn_params"]},
    {"name": "function_def$ebnf$4", "symbols": ["function_def$ebnf$4$subexpression$1"]},
    {"name": "function_def$ebnf$4$subexpression$2", "symbols": ["_", "fn_params"]},
    {"name": "function_def$ebnf$4", "symbols": ["function_def$ebnf$4", "function_def$ebnf$4$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "function_def$subexpression$3", "symbols": ["_", {"literal":"="}, "_"]},
    {"name": "function_def", "symbols": ["function_decl", "__", "var_name", "function_def$ebnf$4", "function_def$subexpression$3", "expr"], "postprocess":  d => ({
            ...d[0],
            id:     d[2],
            args:   [],
            params: (d[3].map(x => x[1])),
            body:   d[5],
        })},
    {"name": "function_def$subexpression$4", "symbols": ["_", {"literal":"="}, "_"]},
    {"name": "function_def", "symbols": ["function_decl", "__", "var_name", "function_def$subexpression$4", "expr"], "postprocess":  d => ({
            ...d[0],
            id:     d[2],
            args:   [],
            params: [],
            body:   d[4],
        })},
    {"name": "function_decl$ebnf$1$subexpression$1", "symbols": [(mxLexer.has("kw_mapped") ? {type: "kw_mapped"} : kw_mapped), "__"]},
    {"name": "function_decl$ebnf$1", "symbols": ["function_decl$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "function_decl$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "function_decl", "symbols": ["function_decl$ebnf$1", (mxLexer.has("kw_function") ? {type: "kw_function"} : kw_function)], "postprocess":  d => ({
            type:   'Function',
            mapped: (d[0] != null),
            keyword: d[1],
            loc: (getLoc(d[0] != null ? d[0][0] : d[1]))
        })},
    {"name": "fn_params", "symbols": ["parameter"], "postprocess": id},
    {"name": "fn_params", "symbols": ["param_name"], "postprocess":  d => ({
            type: 'ParameterAssignment',
            param: d[0],
            value: null,
        })},
    {"name": "fn_return$ebnf$1", "symbols": ["expr"], "postprocess": id},
    {"name": "fn_return$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "fn_return", "symbols": [(mxLexer.has("kw_return") ? {type: "kw_return"} : kw_return), "_", "fn_return$ebnf$1"], "postprocess":  d => ({
            type: 'FunctionReturn',
            body: d[2]
        })},
    {"name": "context_expr$ebnf$1", "symbols": []},
    {"name": "context_expr$ebnf$1$subexpression$1$subexpression$1", "symbols": ["_S", {"literal":","}, "_"]},
    {"name": "context_expr$ebnf$1$subexpression$1", "symbols": ["context_expr$ebnf$1$subexpression$1$subexpression$1", "context"]},
    {"name": "context_expr$ebnf$1", "symbols": ["context_expr$ebnf$1", "context_expr$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "context_expr", "symbols": ["context", "context_expr$ebnf$1", "_", "expr"], "postprocess":  d => ({
            type: 'ContextStatement',
            context: merge(d[0], collectSub(d[1], 1)),
            body: d[3]
        })},
    {"name": "context$subexpression$1", "symbols": [(mxLexer.has("kw_level") ? {type: "kw_level"} : kw_level)]},
    {"name": "context$subexpression$1", "symbols": [(mxLexer.has("kw_time") ? {type: "kw_time"} : kw_time)]},
    {"name": "context$subexpression$2", "symbols": ["operand"]},
    {"name": "context", "symbols": [(mxLexer.has("kw_at") ? {type: "kw_at"} : kw_at), "__", "context$subexpression$1", "_", "context$subexpression$2"], "postprocess":  d => ({
            type: 'ContextExpression',
            prefix : empty,
            context: d[0],
            args: d[2].concat(d[4])
        })},
    {"name": "context$subexpression$3", "symbols": ["operand"]},
    {"name": "context", "symbols": [(mxLexer.has("kw_in") ? {type: "kw_in"} : kw_in), "_", "context$subexpression$3"], "postprocess":  d => ({
            type: 'ContextExpression',
            prefix : empty,
            context: d[0],
            args: d[2]
        })},
    {"name": "context$ebnf$1$subexpression$1", "symbols": [(mxLexer.has("kw_in") ? {type: "kw_in"} : kw_in), "__"]},
    {"name": "context$ebnf$1", "symbols": ["context$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "context$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "context$subexpression$4", "symbols": [(mxLexer.has("kw_local") ? {type: "kw_local"} : kw_local)]},
    {"name": "context$subexpression$4", "symbols": ["operand"]},
    {"name": "context", "symbols": ["context$ebnf$1", (mxLexer.has("kw_coordsys") ? {type: "kw_coordsys"} : kw_coordsys), "_", "context$subexpression$4"], "postprocess":  d => ({
            type: 'ContextExpression',
            prefix : (d[0] != null ? d[0][0] : empty),
            context: d[1],
            args: d[3]
        })},
    {"name": "context$subexpression$5", "symbols": [(mxLexer.has("kw_coordsys") ? {type: "kw_coordsys"} : kw_coordsys)]},
    {"name": "context$subexpression$5", "symbols": ["operand"]},
    {"name": "context", "symbols": [(mxLexer.has("kw_about") ? {type: "kw_about"} : kw_about), "_", "context$subexpression$5"], "postprocess":  d => ({
            type: 'ContextExpression',
            prefix : empty,
            context: d[0],
            args: d[2]
        })},
    {"name": "context$ebnf$2$subexpression$1", "symbols": [(mxLexer.has("kw_with") ? {type: "kw_with"} : kw_with), "__"]},
    {"name": "context$ebnf$2", "symbols": ["context$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "context$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "context$subexpression$6", "symbols": ["logical_expr"]},
    {"name": "context$subexpression$6", "symbols": ["bool"]},
    {"name": "context", "symbols": ["context$ebnf$2", (mxLexer.has("kw_context") ? {type: "kw_context"} : kw_context), "_", "context$subexpression$6"], "postprocess":  d => ({
            type: 'ContextExpression',
            prefix : (d[0] != null ? d[0][0] : empty),
            context: d[1],
            args: d[3]
        })},
    {"name": "context$subexpression$7", "symbols": [{"literal":"#logmsg"}]},
    {"name": "context$subexpression$7", "symbols": [{"literal":"#logtofile"}]},
    {"name": "context$subexpression$7", "symbols": [{"literal":"#abort"}]},
    {"name": "context", "symbols": [(mxLexer.has("kw_with") ? {type: "kw_with"} : kw_with), "__", (mxLexer.has("kw_defaultAction") ? {type: "kw_defaultAction"} : kw_defaultAction), "_", "context$subexpression$7"], "postprocess":  d => ({
            type: 'ContextExpression',
            prefix : d[0],
            context: d[2],
            args: d[4]
        })},
    {"name": "context$ebnf$3$subexpression$1", "symbols": [(mxLexer.has("kw_with") ? {type: "kw_with"} : kw_with), "__"]},
    {"name": "context$ebnf$3", "symbols": ["context$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "context$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "context$ebnf$4$subexpression$1", "symbols": ["undo_label", "_"]},
    {"name": "context$ebnf$4", "symbols": ["context$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "context$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "context$subexpression$8", "symbols": ["logical_expr"]},
    {"name": "context$subexpression$8", "symbols": ["bool"]},
    {"name": "context", "symbols": ["context$ebnf$3", (mxLexer.has("kw_undo") ? {type: "kw_undo"} : kw_undo), "_", "context$ebnf$4", "context$subexpression$8"], "postprocess":  d => ({
            type: 'ContextExpression',
            prefix : (d[0] != null ? d[0][0] : empty),
            context: d[1],
            args: (filterNull(d[3])).concat(d[4])
        })},
    {"name": "undo_label", "symbols": ["string"], "postprocess": id},
    {"name": "undo_label", "symbols": ["parameter"], "postprocess": id},
    {"name": "undo_label", "symbols": ["var_name"], "postprocess": id},
    {"name": "case_expr$subexpression$1", "symbols": [(mxLexer.has("kw_case") ? {type: "kw_case"} : kw_case), "_"]},
    {"name": "case_expr$ebnf$1", "symbols": []},
    {"name": "case_expr$ebnf$1$subexpression$1", "symbols": ["EOL", "case_item"]},
    {"name": "case_expr$ebnf$1", "symbols": ["case_expr$ebnf$1", "case_expr$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "case_expr", "symbols": ["case_expr$subexpression$1", "case_src", (mxLexer.has("kw_of") ? {type: "kw_of"} : kw_of), "_", "LPAREN", "case_item", "case_expr$ebnf$1", "RPAREN"], "postprocess":  d => ({
            type:  'CaseStatement',
            test:  d[1],
            cases: merge(d[5], d[6]),
            loc:   getLoc(d[0][0], d[7])
        })},
    {"name": "case_src", "symbols": ["expr", "_"], "postprocess": d => d[0]},
    {"name": "case_src", "symbols": ["__"], "postprocess": id},
    {"name": "case_item$subexpression$1", "symbols": ["factor"]},
    {"name": "case_item$subexpression$1", "symbols": [(mxLexer.has("params") ? {type: "params"} : params)]},
    {"name": "case_item$subexpression$2", "symbols": [{"literal":":"}, "_"]},
    {"name": "case_item", "symbols": ["case_item$subexpression$1", "case_item$subexpression$2", "expr"], "postprocess": d => ({type:'CaseClause', case: d[0], body: d[2] })},
    {"name": "for_loop$subexpression$1", "symbols": [(mxLexer.has("kw_for") ? {type: "kw_for"} : kw_for), "__"]},
    {"name": "for_loop$ebnf$1$subexpression$1", "symbols": ["_", "for_sequence"]},
    {"name": "for_loop$ebnf$1", "symbols": ["for_loop$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "for_loop$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "for_loop", "symbols": ["for_loop$subexpression$1", "var_name", "_S", "for_iterator", "_S", "expr", "for_loop$ebnf$1", "_", "for_action", "_", "expr"], "postprocess":  d => ({
            type:     'ForStatement',
            variable:  d[1],
            iteration: d[3],
            value:     d[5],
            sequence: filterNull(d[6]),
            action:    d[8],
            body:      d[10],
            loc: getLoc(d[0][0])
        })},
    {"name": "for_sequence$ebnf$1$subexpression$1", "symbols": ["_", "for_by"]},
    {"name": "for_sequence$ebnf$1", "symbols": ["for_sequence$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "for_sequence$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "for_sequence$ebnf$2$subexpression$1", "symbols": ["_", "for_while"]},
    {"name": "for_sequence$ebnf$2", "symbols": ["for_sequence$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "for_sequence$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "for_sequence$ebnf$3$subexpression$1", "symbols": ["_", "for_where"]},
    {"name": "for_sequence$ebnf$3", "symbols": ["for_sequence$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "for_sequence$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "for_sequence", "symbols": ["for_to", "for_sequence$ebnf$1", "for_sequence$ebnf$2", "for_sequence$ebnf$3"], "postprocess":  d => ({
            type: 'ForLoopSequence',
            to: d[0],
            by: filterNull(d[1]),
            while: filterNull(d[2]),
            where: filterNull(d[3])
        })},
    {"name": "for_sequence$ebnf$4$subexpression$1", "symbols": ["for_while", "_"]},
    {"name": "for_sequence$ebnf$4", "symbols": ["for_sequence$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "for_sequence$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "for_sequence", "symbols": ["for_sequence$ebnf$4", "for_where"], "postprocess":  d => ({
            type: 'ForLoopSequence',
            to: [],
            by: [],
            while: filterNull(d[0]),
            where: d[1]
        })},
    {"name": "for_iterator", "symbols": [{"literal":"="}], "postprocess": id},
    {"name": "for_iterator", "symbols": [(mxLexer.has("kw_in") ? {type: "kw_in"} : kw_in)], "postprocess": id},
    {"name": "for_to$subexpression$1", "symbols": [(mxLexer.has("kw_to") ? {type: "kw_to"} : kw_to), "_S"]},
    {"name": "for_to", "symbols": ["for_to$subexpression$1", "expr"], "postprocess": d => d[1]},
    {"name": "for_by$subexpression$1", "symbols": [(mxLexer.has("kw_by") ? {type: "kw_by"} : kw_by), "_S"]},
    {"name": "for_by", "symbols": ["for_by$subexpression$1", "expr"], "postprocess": d => d[1]},
    {"name": "for_where$subexpression$1", "symbols": [(mxLexer.has("kw_where") ? {type: "kw_where"} : kw_where), "_S"]},
    {"name": "for_where", "symbols": ["for_where$subexpression$1", "expr"], "postprocess": d => d[1]},
    {"name": "for_while$subexpression$1", "symbols": [(mxLexer.has("kw_while") ? {type: "kw_while"} : kw_while), "_S"]},
    {"name": "for_while", "symbols": ["for_while$subexpression$1", "expr"], "postprocess": d => d[1]},
    {"name": "for_action", "symbols": [(mxLexer.has("kw_do") ? {type: "kw_do"} : kw_do)], "postprocess": id},
    {"name": "for_action", "symbols": [(mxLexer.has("kw_collect") ? {type: "kw_collect"} : kw_collect)], "postprocess": id},
    {"name": "loop_exit", "symbols": [(mxLexer.has("kw_exit") ? {type: "kw_exit"} : kw_exit)], "postprocess": id},
    {"name": "loop_exit$subexpression$1", "symbols": ["__", (mxLexer.has("kw_with") ? {type: "kw_with"} : kw_with), "_"]},
    {"name": "loop_exit", "symbols": [(mxLexer.has("kw_exit") ? {type: "kw_exit"} : kw_exit), "loop_exit$subexpression$1", "expr"], "postprocess":  d => ({
            type : 'LoopExit',
            body:  d[2],
            loc: getLoc(d[0])
        })},
    {"name": "do_loop$subexpression$1", "symbols": [(mxLexer.has("kw_do") ? {type: "kw_do"} : kw_do), "_"]},
    {"name": "do_loop$subexpression$2", "symbols": ["_", (mxLexer.has("kw_while") ? {type: "kw_while"} : kw_while), "_"]},
    {"name": "do_loop", "symbols": ["do_loop$subexpression$1", "expr", "do_loop$subexpression$2", "expr"], "postprocess":  d => ({
            type: 'DoWhileStatement',
            body: d[1],
            test: d[3],
            loc: getLoc(d[0][0])
        })},
    {"name": "while_loop$subexpression$1", "symbols": [(mxLexer.has("kw_while") ? {type: "kw_while"} : kw_while), "_S"]},
    {"name": "while_loop$subexpression$2", "symbols": ["_S", (mxLexer.has("kw_do") ? {type: "kw_do"} : kw_do), "_"]},
    {"name": "while_loop", "symbols": ["while_loop$subexpression$1", "expr", "while_loop$subexpression$2", "expr"], "postprocess":  d => ({
            type: 'WhileStatement',
            test: d[1],
            body: d[3],
            loc: getLoc(d[0][0])
        })},
    {"name": "if_expr$subexpression$1", "symbols": [(mxLexer.has("kw_if") ? {type: "kw_if"} : kw_if), "_"]},
    {"name": "if_expr", "symbols": ["if_expr$subexpression$1", "expr", "_", "if_action", "_", "expr"], "postprocess":  d => ({
            type:       'IfStatement',
            test:       d[1],
            operator:   d[3],
            consequent: d[5],
            loc: getLoc(d[0][0])
        })},
    {"name": "if_expr$subexpression$2", "symbols": [(mxLexer.has("kw_if") ? {type: "kw_if"} : kw_if), "_"]},
    {"name": "if_expr$subexpression$3", "symbols": ["_", (mxLexer.has("kw_then") ? {type: "kw_then"} : kw_then), "_"]},
    {"name": "if_expr$subexpression$4", "symbols": ["_", (mxLexer.has("kw_else") ? {type: "kw_else"} : kw_else), "_"]},
    {"name": "if_expr", "symbols": ["if_expr$subexpression$2", "expr", "if_expr$subexpression$3", "expr", "if_expr$subexpression$4", "expr"], "postprocess":  d => ({
            type:       'IfStatement',
            test:       d[1],
            consequent: d[3],
            alternate:  d[5],
            loc: getLoc(d[0][0])
        })},
    {"name": "if_action", "symbols": [(mxLexer.has("kw_do") ? {type: "kw_do"} : kw_do)], "postprocess": id},
    {"name": "if_action", "symbols": [(mxLexer.has("kw_then") ? {type: "kw_then"} : kw_then)], "postprocess": id},
    {"name": "try_expr$subexpression$1", "symbols": [(mxLexer.has("kw_try") ? {type: "kw_try"} : kw_try), "_"]},
    {"name": "try_expr$subexpression$2", "symbols": ["_", (mxLexer.has("kw_catch") ? {type: "kw_catch"} : kw_catch), "_"]},
    {"name": "try_expr", "symbols": ["try_expr$subexpression$1", "expr", "try_expr$subexpression$2", "expr"], "postprocess":  d => ({
            type:      'TryStatement',
            block:     d[1],
            finalizer: d[3],
            loc: getLoc(d[0][0])
        })},
    {"name": "kw_try", "symbols": [(mxLexer.has("kw_try") ? {type: "kw_try"} : kw_try), "_"], "postprocess": d => d[0]},
    {"name": "variable_decl", "symbols": ["kw_decl", "_", "decl_args"], "postprocess":  d => ({
            type: 'VariableDeclaration',
            ...d[0],
            decls: d[2],
            loc: getLoc(d[0])
        })},
    {"name": "kw_decl", "symbols": [(mxLexer.has("kw_local") ? {type: "kw_local"} : kw_local)], "postprocess": d => ({modifier:null, scope: d[0], loc:getLoc(d[0])})},
    {"name": "kw_decl", "symbols": [(mxLexer.has("kw_global") ? {type: "kw_global"} : kw_global)], "postprocess": d => ({modifier:null, scope: d[0], loc:getLoc(d[0])})},
    {"name": "kw_decl", "symbols": [(mxLexer.has("kw_persistent") ? {type: "kw_persistent"} : kw_persistent), "__", (mxLexer.has("kw_global") ? {type: "kw_global"} : kw_global)], "postprocess": d => ({modifier: d[0], scope: d[2], loc:getLoc(d[0], d[2])})},
    {"name": "decl_args", "symbols": ["decl"]},
    {"name": "decl_args$ebnf$1$subexpression$1$subexpression$1", "symbols": ["_S", {"literal":","}, "_"]},
    {"name": "decl_args$ebnf$1$subexpression$1", "symbols": ["decl_args$ebnf$1$subexpression$1$subexpression$1", "decl"]},
    {"name": "decl_args$ebnf$1", "symbols": ["decl_args$ebnf$1$subexpression$1"]},
    {"name": "decl_args$ebnf$1$subexpression$2$subexpression$1", "symbols": ["_S", {"literal":","}, "_"]},
    {"name": "decl_args$ebnf$1$subexpression$2", "symbols": ["decl_args$ebnf$1$subexpression$2$subexpression$1", "decl"]},
    {"name": "decl_args$ebnf$1", "symbols": ["decl_args$ebnf$1", "decl_args$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decl_args", "symbols": ["decl", "decl_args$ebnf$1"], "postprocess": d =>{ return merge(d[0], collectSub(d[1], 1)); }},
    {"name": "decl", "symbols": ["var_name"], "postprocess": d => ({type:'Declaration', id:d[0]})},
    {"name": "decl$subexpression$1", "symbols": ["_S", {"literal":"="}, "_"]},
    {"name": "decl", "symbols": ["var_name", "decl$subexpression$1", "expr"], "postprocess": d => ({type:'Declaration', id:d[0], value: d[2]})},
    {"name": "assignment$subexpression$1", "symbols": ["_S", (mxLexer.has("assign") ? {type: "assign"} : assign), "_"]},
    {"name": "assignment", "symbols": ["destination", "assignment$subexpression$1", "expr"], "postprocess":  d => ({
            type:     'AssignmentExpression',
            operator: d[1][1],
            operand:  d[0],
            value:    d[2]
        })},
    {"name": "destination", "symbols": ["var_name"], "postprocess": id},
    {"name": "destination", "symbols": ["property"], "postprocess": id},
    {"name": "destination", "symbols": ["index"], "postprocess": id},
    {"name": "destination", "symbols": ["path_name"], "postprocess": id},
    {"name": "math_expr", "symbols": ["rest"], "postprocess": id},
    {"name": "rest", "symbols": ["rest", "minus_ws", "sum"], "postprocess":  d => ({
            type:     'MathExpression',
            operator: d[1],
            left:     d[0],
            right:    d[2]
        })},
    {"name": "rest", "symbols": ["sum"], "postprocess": id},
    {"name": "minus_ws", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "minus_ws", "symbols": [{"literal":"-"}, "__"], "postprocess": d => d[0]},
    {"name": "minus_ws", "symbols": ["__", {"literal":"-"}, "__"], "postprocess": d => d[1]},
    {"name": "sum", "symbols": ["sum", "_S", {"literal":"+"}, "_", "prod"], "postprocess":  d => ({
            type:     'MathExpression',
            operator: d[2],
            left:     d[0],
            right:    d[4]
        })},
    {"name": "sum", "symbols": ["prod"], "postprocess": id},
    {"name": "prod$subexpression$1", "symbols": [{"literal":"*"}]},
    {"name": "prod$subexpression$1", "symbols": [{"literal":"/"}]},
    {"name": "prod", "symbols": ["prod", "_S", "prod$subexpression$1", "_", "exp"], "postprocess":  d => ({
            type:     'MathExpression',
            operator: d[2],
            left:     d[0],
            right:    d[4]
        })},
    {"name": "prod", "symbols": ["exp"], "postprocess": id},
    {"name": "exp", "symbols": ["as", "_S", {"literal":"^"}, "_", "exp"], "postprocess":  d => ({
            type:     'MathExpression',
            operator: d[2],
            left:     d[0],
            right:    d[4]
        })},
    {"name": "exp", "symbols": ["as"], "postprocess": id},
    {"name": "as", "symbols": ["as", "_S", (mxLexer.has("kw_as") ? {type: "kw_as"} : kw_as), "_", "var_name"], "postprocess":  d => ({
            type:     'MathExpression',
            operator: d[2],
            left:     d[0],
            right:    d[4]
        })},
    {"name": "as", "symbols": ["uny"], "postprocess": id},
    {"name": "uny", "symbols": [{"literal":"-"}, "_", "math_operand"], "postprocess":  d => ({
            type: 'UnaryExpression',
            operator: d[0],
            right:    d[2]
        }) },
    {"name": "uny", "symbols": ["math_operand"], "postprocess": id},
    {"name": "math_operand", "symbols": ["operand"], "postprocess": id},
    {"name": "math_operand", "symbols": ["fn_call"], "postprocess": id},
    {"name": "logical_expr$subexpression$1", "symbols": ["logical_operand"]},
    {"name": "logical_expr$subexpression$1", "symbols": ["not_operand"]},
    {"name": "logical_expr", "symbols": ["logical_expr", "_S", (mxLexer.has("kw_compare") ? {type: "kw_compare"} : kw_compare), "_", "logical_expr$subexpression$1"], "postprocess":  d => ({
            type :    'LogicalExpression',
            operator: d[2],
            left:     d[0],
            right:    d[4][0]
        }) },
    {"name": "logical_expr$subexpression$2", "symbols": ["logical_operand"]},
    {"name": "logical_expr$subexpression$2", "symbols": ["not_operand"]},
    {"name": "logical_expr", "symbols": ["logical_operand", "_S", (mxLexer.has("kw_compare") ? {type: "kw_compare"} : kw_compare), "_", "logical_expr$subexpression$2"], "postprocess":  d => ({
            type :    'LogicalExpression',
            operator: d[2],
            left:     d[0],
            right:    d[4][0]
        }) },
    {"name": "logical_expr", "symbols": ["not_operand"], "postprocess": id},
    {"name": "not_operand", "symbols": [(mxLexer.has("kw_not") ? {type: "kw_not"} : kw_not), "_", "logical_operand"], "postprocess":  d => ({
            type :    'LogicalExpression',
            operator: d[0],
            right:    d[2]
        }) },
    {"name": "logical_operand", "symbols": ["operand"], "postprocess": id},
    {"name": "logical_operand", "symbols": ["compare_expr"], "postprocess": id},
    {"name": "logical_operand", "symbols": ["fn_call"], "postprocess": id},
    {"name": "compare_expr", "symbols": ["compare_operand", "_S", (mxLexer.has("comparison") ? {type: "comparison"} : comparison), "_", "compare_operand"], "postprocess":  d => ({
            type:     'LogicalExpression',
            operator: d[2],
            left:     d[0],
            right:    d[4]
        }) },
    {"name": "compare_operand", "symbols": ["math_expr"], "postprocess": id},
    {"name": "fn_call$ebnf$1$subexpression$1", "symbols": ["_S", "call_params"]},
    {"name": "fn_call$ebnf$1", "symbols": ["fn_call$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "fn_call$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "fn_call", "symbols": ["call_caller", "_S", "call_args", "fn_call$ebnf$1"], "postprocess":  d => ({
            type:  'CallExpression',
            calle: d[0],
            args:  merge(d[2], d[3])
        })},
    {"name": "fn_call", "symbols": ["call_caller", "_S", "call_params"], "postprocess":  d => ({
            type:  'CallExpression',
            calle: d[0],
            args:  d[2]
        })},
    {"name": "call_params", "symbols": ["call_params", "_S", "parameter"], "postprocess": d => [].concat(d[0], d[2])},
    {"name": "call_params", "symbols": ["parameter"]},
    {"name": "call_args", "symbols": ["call_args", "_S", "call_arg"], "postprocess": d => [].concat(d[0], d[2])},
    {"name": "call_args", "symbols": ["call_arg"]},
    {"name": "call_arg", "symbols": ["__", "u_operand"], "postprocess": d => d[1]},
    {"name": "call_arg", "symbols": ["operand"], "postprocess": id},
    {"name": "call_caller", "symbols": ["operand"], "postprocess": id},
    {"name": "parameter$subexpression$1", "symbols": ["operand"]},
    {"name": "parameter$subexpression$1", "symbols": ["u_operand"]},
    {"name": "parameter", "symbols": ["param_name", "_", "parameter$subexpression$1"], "postprocess":  d => ({
            type: 'ParameterAssignment',
            param: d[0],
            value: d[2][0],
            //loc: d[0].loc
        })},
    {"name": "param_name", "symbols": ["param_kw", "_S", {"literal":":"}], "postprocess": d => ({type:'Identifier', value:d[0]})},
    {"name": "param_kw", "symbols": ["var_name"], "postprocess": id},
    {"name": "param_kw", "symbols": [(mxLexer.has("kw_rollout") ? {type: "kw_rollout"} : kw_rollout)], "postprocess": id},
    {"name": "param_kw", "symbols": [(mxLexer.has("kw_plugin") ? {type: "kw_plugin"} : kw_plugin)], "postprocess": id},
    {"name": "param_kw", "symbols": [(mxLexer.has("kw_rcmenu") ? {type: "kw_rcmenu"} : kw_rcmenu)], "postprocess": id},
    {"name": "param_kw", "symbols": [(mxLexer.has("kw_tool") ? {type: "kw_tool"} : kw_tool)], "postprocess": id},
    {"name": "param_kw", "symbols": [(mxLexer.has("kw_to") ? {type: "kw_to"} : kw_to)], "postprocess": id},
    {"name": "param_kw", "symbols": [(mxLexer.has("kw_utility") ? {type: "kw_utility"} : kw_utility)], "postprocess": id},
    {"name": "property", "symbols": ["operand", (mxLexer.has("delimiter") ? {type: "delimiter"} : delimiter), "var_name"], "postprocess":  d => ({
            type:     'AccessorProperty',
            operand:  d[0],
            property: d[2],
            //loc:      getLoc(d[0], d[1])
        })},
    {"name": "index", "symbols": ["operand", "_", "p_start", "expr", "p_end"], "postprocess":  d => ({
            type:    'AccessorIndex',
            operand: d[0],
            index:   d[3],
            //loc:     getLoc(d[0], d[4])
        })},
    {"name": "u_operand", "symbols": [{"literal":"-"}, "operand"], "postprocess":  d => ({
            type: 'UnaryExpression',
            operator: d[0],
            right:    d[1]
        }) },
    {"name": "operand", "symbols": ["factor"], "postprocess": id},
    {"name": "operand", "symbols": ["property"], "postprocess": id},
    {"name": "operand", "symbols": ["index"], "postprocess": id},
    {"name": "factor", "symbols": ["string"], "postprocess": id},
    {"name": "factor", "symbols": ["number"], "postprocess": id},
    {"name": "factor", "symbols": ["path_name"], "postprocess": id},
    {"name": "factor", "symbols": ["name_value"], "postprocess": id},
    {"name": "factor", "symbols": ["var_name"], "postprocess": id},
    {"name": "factor", "symbols": ["bool"], "postprocess": id},
    {"name": "factor", "symbols": ["void"], "postprocess": id},
    {"name": "factor", "symbols": ["time"], "postprocess": id},
    {"name": "factor", "symbols": ["array"], "postprocess": id},
    {"name": "factor", "symbols": ["bitarray"], "postprocess": id},
    {"name": "factor", "symbols": ["point4"], "postprocess": id},
    {"name": "factor", "symbols": ["point3"], "postprocess": id},
    {"name": "factor", "symbols": ["point2"], "postprocess": id},
    {"name": "factor", "symbols": ["expr_seq"], "postprocess": id},
    {"name": "factor", "symbols": [{"literal":"?"}], "postprocess": d => ({type: 'Keyword', value: d[0]})},
    {"name": "factor", "symbols": [(mxLexer.has("error") ? {type: "error"} : error)], "postprocess": id},
    {"name": "point4$subexpression$1", "symbols": ["_S", {"literal":","}, "_"]},
    {"name": "point4$subexpression$2", "symbols": ["_S", {"literal":","}, "_"]},
    {"name": "point4$subexpression$3", "symbols": ["_S", {"literal":","}, "_"]},
    {"name": "point4", "symbols": ["p_start", "expr", "point4$subexpression$1", "expr", "point4$subexpression$2", "expr", "point4$subexpression$3", "expr", "p_end"], "postprocess":  d => ({
            type: 'ObjectPoint4',
            elements: [].concat(d[1], d[3], d[5], d[7]),
            loc: getLoc(d[0], d[8])
        }) },
    {"name": "point3$subexpression$1", "symbols": ["_S", {"literal":","}, "_"]},
    {"name": "point3$subexpression$2", "symbols": ["_S", {"literal":","}, "_"]},
    {"name": "point3", "symbols": ["p_start", "expr", "point3$subexpression$1", "expr", "point3$subexpression$2", "expr", "p_end"], "postprocess":  d => ({
            type: 'ObjectPoint3',
            elements: [].concat(d[1], d[3], d[5]),
            loc: getLoc(d[0], d[6])
        }) },
    {"name": "point2$subexpression$1", "symbols": ["_S", {"literal":","}, "_"]},
    {"name": "point2", "symbols": ["p_start", "expr", "point2$subexpression$1", "expr", "p_end"], "postprocess":  d => ({
            type: 'ObjectPoint2',
            elements: [].concat(d[1], d[3]),
            loc: getLoc(d[0], d[4])
        }) },
    {"name": "p_start", "symbols": [{"literal":"["}, "_"], "postprocess": d => d[0]},
    {"name": "p_end", "symbols": ["_", {"literal":"]"}], "postprocess": d => d[1]},
    {"name": "array", "symbols": [(mxLexer.has("arraydef") ? {type: "arraydef"} : arraydef), "_", (mxLexer.has("rparen") ? {type: "rparen"} : rparen)], "postprocess":  d => ({
            type:      'ObjectArray',
            elements:  [],
            loc:       getLoc(d[0], d[2])
        }) },
    {"name": "array$subexpression$1", "symbols": [(mxLexer.has("arraydef") ? {type: "arraydef"} : arraydef), "_"]},
    {"name": "array$subexpression$2", "symbols": ["_", (mxLexer.has("rparen") ? {type: "rparen"} : rparen)]},
    {"name": "array", "symbols": ["array$subexpression$1", "array_expr", "array$subexpression$2"], "postprocess":  d => ({
            type:     'ObjectArray',
            elements: d[1],
            loc:      getLoc(d[0][0], d[2][1])
        }) },
    {"name": "array_expr$subexpression$1", "symbols": ["_", {"literal":","}, "_"]},
    {"name": "array_expr", "symbols": ["array_expr", "array_expr$subexpression$1", "expr"], "postprocess": d => [].concat(d[0], d[2])},
    {"name": "array_expr", "symbols": ["expr"]},
    {"name": "bitarray", "symbols": [(mxLexer.has("bitarraydef") ? {type: "bitarraydef"} : bitarraydef), "_", (mxLexer.has("rbrace") ? {type: "rbrace"} : rbrace)], "postprocess":  d => ({
            type:     'ObjectBitArray',
            elements: [],
            loc:      getLoc(d[0], d[2])
        }) },
    {"name": "bitarray$subexpression$1", "symbols": [(mxLexer.has("bitarraydef") ? {type: "bitarraydef"} : bitarraydef), "_"]},
    {"name": "bitarray$subexpression$2", "symbols": ["_", (mxLexer.has("rbrace") ? {type: "rbrace"} : rbrace)]},
    {"name": "bitarray", "symbols": ["bitarray$subexpression$1", "bitarray_expr", "bitarray$subexpression$2"], "postprocess":  d => ({
            type:     'ObjectBitArray',
            elements: d[1],
            loc:      getLoc(d[0][0], d[2][1])
        }) },
    {"name": "bitarray_expr$subexpression$1", "symbols": ["_", {"literal":","}, "_"]},
    {"name": "bitarray_expr", "symbols": ["bitarray_expr", "bitarray_expr$subexpression$1", "bitarray_item"], "postprocess": d => [].concat(d[0], d[2])},
    {"name": "bitarray_expr", "symbols": ["bitarray_item"]},
    {"name": "bitarray_item$subexpression$1", "symbols": ["_S", (mxLexer.has("bitrange") ? {type: "bitrange"} : bitrange), "_"]},
    {"name": "bitarray_item", "symbols": ["expr", "bitarray_item$subexpression$1", "expr"], "postprocess": d => ({type: 'BitRange', start: d[0], end: d[2]})},
    {"name": "bitarray_item", "symbols": ["expr"], "postprocess": id},
    {"name": "var_name", "symbols": ["var_type"], "postprocess": d => ({ type: 'Identifier', value: d[0] })},
    {"name": "var_type", "symbols": [(mxLexer.has("identity") ? {type: "identity"} : identity)], "postprocess": id},
    {"name": "var_type", "symbols": [(mxLexer.has("global_typed") ? {type: "global_typed"} : global_typed)], "postprocess": id},
    {"name": "var_type", "symbols": ["kw_reserved"], "postprocess": id},
    {"name": "kw_reserved", "symbols": [(mxLexer.has("kw_uicontrols") ? {type: "kw_uicontrols"} : kw_uicontrols)], "postprocess": id},
    {"name": "kw_reserved", "symbols": [(mxLexer.has("kw_group") ? {type: "kw_group"} : kw_group)], "postprocess": id},
    {"name": "kw_reserved", "symbols": [(mxLexer.has("kw_level") ? {type: "kw_level"} : kw_level)], "postprocess": id},
    {"name": "kw_reserved", "symbols": [(mxLexer.has("kw_menuitem") ? {type: "kw_menuitem"} : kw_menuitem)], "postprocess": id},
    {"name": "kw_reserved", "symbols": [(mxLexer.has("kw_objectset") ? {type: "kw_objectset"} : kw_objectset)], "postprocess": id},
    {"name": "kw_reserved", "symbols": [(mxLexer.has("kw_separator") ? {type: "kw_separator"} : kw_separator)], "postprocess": id},
    {"name": "kw_reserved", "symbols": [(mxLexer.has("kw_submenu") ? {type: "kw_submenu"} : kw_submenu)], "postprocess": id},
    {"name": "kw_reserved", "symbols": [(mxLexer.has("kw_time") ? {type: "kw_time"} : kw_time)], "postprocess": id},
    {"name": "kw_reserved", "symbols": [(mxLexer.has("kw_set") ? {type: "kw_set"} : kw_set)], "postprocess": id},
    {"name": "time", "symbols": [(mxLexer.has("time") ? {type: "time"} : time)], "postprocess": d => ({ type: 'Literal', value: d[0] })},
    {"name": "bool", "symbols": [(mxLexer.has("kw_bool") ? {type: "kw_bool"} : kw_bool)], "postprocess": d => ({ type: 'Literal', value: d[0] })},
    {"name": "bool", "symbols": [(mxLexer.has("kw_on") ? {type: "kw_on"} : kw_on)], "postprocess": d => ({ type: 'Literal', value: d[0] })},
    {"name": "void", "symbols": [(mxLexer.has("kw_null") ? {type: "kw_null"} : kw_null)], "postprocess": d => ({ type: 'Literal', value: d[0] })},
    {"name": "number", "symbols": ["number_types"], "postprocess": d => ({ type: 'Literal', value: d[0] })},
    {"name": "number_types", "symbols": [(mxLexer.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "number_types", "symbols": [(mxLexer.has("hex") ? {type: "hex"} : hex)], "postprocess": id},
    {"name": "string", "symbols": [(mxLexer.has("string") ? {type: "string"} : string)], "postprocess": d => ({ type: 'Literal', value: d[0] })},
    {"name": "name_value", "symbols": [(mxLexer.has("name") ? {type: "name"} : name)], "postprocess": d => ({ type: 'Literal', value: d[0] })},
    {"name": "resource", "symbols": [(mxLexer.has("locale") ? {type: "locale"} : locale)], "postprocess": d => ({ type: 'Literal', value: d[0] })},
    {"name": "path_name", "symbols": [(mxLexer.has("path") ? {type: "path"} : path)], "postprocess": d => ({ type: 'Identifier', value: d[0] })},
    {"name": "LPAREN", "symbols": [(mxLexer.has("lparen") ? {type: "lparen"} : lparen), "_"], "postprocess": d => d[0]},
    {"name": "RPAREN", "symbols": ["___", (mxLexer.has("rparen") ? {type: "rparen"} : rparen)], "postprocess": d => d[1]},
    {"name": "_EOL_$subexpression$1", "symbols": ["junk"]},
    {"name": "_EOL_$subexpression$1", "symbols": [(mxLexer.has("statement") ? {type: "statement"} : statement)]},
    {"name": "_EOL_", "symbols": ["_EOL_", "_EOL_$subexpression$1"], "postprocess": d => null},
    {"name": "_EOL_", "symbols": ["wsl"], "postprocess": d => null},
    {"name": "_EOL_", "symbols": [(mxLexer.has("statement") ? {type: "statement"} : statement)], "postprocess": d => null},
    {"name": "EOL$ebnf$1", "symbols": []},
    {"name": "EOL$ebnf$1", "symbols": ["EOL$ebnf$1", "_eol"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "EOL$subexpression$1", "symbols": [(mxLexer.has("newline") ? {type: "newline"} : newline)]},
    {"name": "EOL$subexpression$1", "symbols": [(mxLexer.has("statement") ? {type: "statement"} : statement)]},
    {"name": "EOL", "symbols": ["EOL$ebnf$1", "EOL$subexpression$1", "_S"], "postprocess": d => null},
    {"name": "_eol", "symbols": [(mxLexer.has("ws") ? {type: "ws"} : ws)]},
    {"name": "_eol", "symbols": [(mxLexer.has("statement") ? {type: "statement"} : statement)]},
    {"name": "_eol", "symbols": [(mxLexer.has("newline") ? {type: "newline"} : newline)]},
    {"name": "_eol", "symbols": [(mxLexer.has("comment_BLK") ? {type: "comment_BLK"} : comment_BLK)]},
    {"name": "_eol", "symbols": [(mxLexer.has("comment_SL") ? {type: "comment_SL"} : comment_SL)]},
    {"name": "_SL_", "symbols": ["wsl"], "postprocess": d => null},
    {"name": "_SL_", "symbols": ["_SL_", "junk"], "postprocess": d => null},
    {"name": "_S_", "symbols": ["ws"], "postprocess": d => null},
    {"name": "_S_", "symbols": ["_S_", "ws"], "postprocess": d => null},
    {"name": "_S", "symbols": []},
    {"name": "_S", "symbols": ["_S", "ws"], "postprocess": d => null},
    {"name": "__", "symbols": ["ws"], "postprocess": d => null},
    {"name": "__", "symbols": ["__", "junk"], "postprocess": d => null},
    {"name": "_", "symbols": []},
    {"name": "_", "symbols": ["_", "junk"], "postprocess": d => null},
    {"name": "___", "symbols": []},
    {"name": "___$subexpression$1", "symbols": ["junk"]},
    {"name": "___$subexpression$1", "symbols": [(mxLexer.has("statement") ? {type: "statement"} : statement)]},
    {"name": "___", "symbols": ["___", "___$subexpression$1"], "postprocess": d => null},
    {"name": "ws", "symbols": [(mxLexer.has("ws") ? {type: "ws"} : ws)]},
    {"name": "ws", "symbols": [(mxLexer.has("comment_BLK") ? {type: "comment_BLK"} : comment_BLK)]},
    {"name": "wsl", "symbols": [(mxLexer.has("ws") ? {type: "ws"} : ws)]},
    {"name": "wsl", "symbols": [(mxLexer.has("newline") ? {type: "newline"} : newline)]},
    {"name": "wsl", "symbols": [(mxLexer.has("comment_BLK") ? {type: "comment_BLK"} : comment_BLK)]},
    {"name": "junk", "symbols": [(mxLexer.has("ws") ? {type: "ws"} : ws)]},
    {"name": "junk", "symbols": [(mxLexer.has("newline") ? {type: "newline"} : newline)]},
    {"name": "junk", "symbols": [(mxLexer.has("comment_BLK") ? {type: "comment_BLK"} : comment_BLK)]},
    {"name": "junk", "symbols": [(mxLexer.has("comment_SL") ? {type: "comment_SL"} : comment_SL)]}
]
  , ParserStart: "Main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
