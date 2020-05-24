// Generated automatically by nearley, version 2.19.2
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

	const mxLexer = require('./mooTokenize.js');
    // utilities
    const flatten = arr => arr !== null ? [].concat(...arr).filter(e => e != null ) : null;
    const merge = (a, b) => a !== null && b != null ? [].concat(a, ...b).filter(e => e != null ) : null;
    const filterNull = (arr) => arr !== null ? arr.filter(e => e != null ) : null;

    const tokenType = (t, newytpe) => {t.type = newytpe; return t};

    const convertToken = (token, newytpe) => {
        let node = {...token};
            node.type = newtype;
        return node;
    };

    const getLoc = (start, end) =>
        {
            if (!start) {return null;}

            let startOffset;
            let endOffset;

            if (start.loc) {
                startOffset = start.loc.start;
            } else {
                startOffset = start.offset;
            }

            if (!end) {
                if (!start.loc) {
                    endOffset = start.text != null ? start.offset + (start.text.length - 1): null;
                } else {
                    endOffset = start.loc.end
                }
            } else {
                if (end.loc) {
                    endOffset = end.loc.end
                } else {
                    endOffset = end.text != null ? end.offset + (end.text.length - 1) : null;
                }
            };

            return ({start: startOffset, end: endOffset});
        };
    // parser configuration
    //let out_logic_expr = false;
    //let out_simple_expr = false;
var grammar = {
    Lexer: mxLexer,
    ParserRules: [
    {"name": "Main", "symbols": ["_", "_EXPR", "_"], "postprocess": d => d[1]},
    {"name": "_EXPR$ebnf$1", "symbols": []},
    {"name": "_EXPR$ebnf$1$subexpression$1", "symbols": ["EOL", "expr"]},
    {"name": "_EXPR$ebnf$1", "symbols": ["_EXPR$ebnf$1", "_EXPR$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_EXPR", "symbols": ["expr", "_EXPR$ebnf$1"], "postprocess": d => merge(...d)},
    {"name": "expr_seq", "symbols": ["LPAREN", "_expr_seq", "RPAREN"], "postprocess": d => d[1]},
    {"name": "expr_seq", "symbols": [{"literal":"("}, "_", {"literal":")"}], "postprocess": d => null},
    {"name": "_expr_seq$ebnf$1", "symbols": []},
    {"name": "_expr_seq$ebnf$1$subexpression$1", "symbols": ["EOL", "expr"]},
    {"name": "_expr_seq$ebnf$1", "symbols": ["_expr_seq$ebnf$1", "_expr_seq$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_expr_seq", "symbols": ["expr", "_expr_seq$ebnf$1"], "postprocess":  d => ({
            type: 'BlockStatement',
            body: merge(...d)}
        ) },
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
    {"name": "expr", "symbols": ["function_return"], "postprocess": id},
    {"name": "expr", "symbols": ["context_expr"], "postprocess": id},
    {"name": "expr", "symbols": ["set_context"], "postprocess": id},
    {"name": "expr", "symbols": ["utility_def"], "postprocess": id},
    {"name": "expr", "symbols": ["rollout_def"], "postprocess": id},
    {"name": "expr", "symbols": ["tool_def"], "postprocess": id},
    {"name": "expr", "symbols": ["rcmenu_def"], "postprocess": id},
    {"name": "expr", "symbols": ["macroscript_def"], "postprocess": id},
    {"name": "expr", "symbols": ["plugin_def"], "postprocess": id},
    {"name": "expr", "symbols": ["change_handler"], "postprocess": id},
    {"name": "simple_expr", "symbols": ["operand"], "postprocess": id},
    {"name": "simple_expr", "symbols": ["math_expr"], "postprocess": id},
    {"name": "simple_expr", "symbols": ["compare_expr"], "postprocess": id},
    {"name": "simple_expr", "symbols": ["logical_expr"], "postprocess": id},
    {"name": "simple_expr", "symbols": ["fn_call"], "postprocess": id},
    {"name": "rcmenu_def$subexpression$1", "symbols": [(mxLexer.has("kw_rcmenu") ? {type: "kw_rcmenu"} : kw_rcmenu), "__"]},
    {"name": "rcmenu_def$ebnf$1", "symbols": ["rcmenu_clauses"], "postprocess": id},
    {"name": "rcmenu_def$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "rcmenu_def", "symbols": ["rcmenu_def$subexpression$1", "var_name", "_", "LPAREN", "rcmenu_def$ebnf$1", "RPAREN"], "postprocess":  d => ({
            type: 'EntityRcmenu',
            id:   d[1],
            body: d[4]
        })},
    {"name": "rcmenu_clauses", "symbols": ["rcmenu_clause"], "postprocess": id},
    {"name": "rcmenu_clauses", "symbols": ["rcmenu_clauses", "EOL", "rcmenu_clause"], "postprocess": d => [].concat(d[0], d[2])},
    {"name": "rcmenu_clause", "symbols": ["variable_decl"], "postprocess": id},
    {"name": "rcmenu_clause", "symbols": ["function_def"], "postprocess": id},
    {"name": "rcmenu_clause", "symbols": ["struct_def"], "postprocess": id},
    {"name": "rcmenu_clause", "symbols": ["event_handler"], "postprocess": id},
    {"name": "rcmenu_clause", "symbols": ["rcmenu_submenu"], "postprocess": id},
    {"name": "rcmenu_clause", "symbols": ["rcmenu_sep"], "postprocess": id},
    {"name": "rcmenu_clause", "symbols": ["rcmenu_item"], "postprocess": id},
    {"name": "rcmenu_submenu$subexpression$1", "symbols": [(mxLexer.has("kw_submenu") ? {type: "kw_submenu"} : kw_submenu), "_"]},
    {"name": "rcmenu_submenu$ebnf$1$subexpression$1", "symbols": ["_", {"literal":"filter:"}, "_", "function_def"]},
    {"name": "rcmenu_submenu$ebnf$1", "symbols": ["rcmenu_submenu$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "rcmenu_submenu$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "rcmenu_submenu$ebnf$2", "symbols": ["rcmenu_clauses"], "postprocess": id},
    {"name": "rcmenu_submenu$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "rcmenu_submenu", "symbols": ["rcmenu_submenu$subexpression$1", "string", "rcmenu_submenu$ebnf$1", "_", "LPAREN", "rcmenu_submenu$ebnf$2", "RPAREN"], "postprocess":  d => ({
            type:   'EntityRcmenu_submenu',
            label:  d[1],
            filter: d[2],
            body:   d[5]
        })},
    {"name": "rcmenu_sep$subexpression$1", "symbols": [(mxLexer.has("kw_separator") ? {type: "kw_separator"} : kw_separator), "__"]},
    {"name": "rcmenu_sep$ebnf$1$subexpression$1", "symbols": ["_", {"literal":"filter:"}, "_", "function_def"]},
    {"name": "rcmenu_sep$ebnf$1", "symbols": ["rcmenu_sep$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "rcmenu_sep$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "rcmenu_sep", "symbols": ["rcmenu_sep$subexpression$1", "var_name", "rcmenu_sep$ebnf$1"], "postprocess":  d => ({
            type:   'EntityRcmenu_separator',
            label:  d[1],
            filter: d[2],
        })},
    {"name": "rcmenu_item$subexpression$1", "symbols": [(mxLexer.has("kw_menuitem") ? {type: "kw_menuitem"} : kw_menuitem), "__"]},
    {"name": "rcmenu_item$ebnf$1", "symbols": []},
    {"name": "rcmenu_item$ebnf$1$subexpression$1", "symbols": ["_", "parameter"]},
    {"name": "rcmenu_item$ebnf$1", "symbols": ["rcmenu_item$ebnf$1", "rcmenu_item$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "rcmenu_item", "symbols": ["rcmenu_item$subexpression$1", "var_name", "_", "string", "rcmenu_item$ebnf$1"], "postprocess":  d => ({
            type:   'EntityRcmenu_menuitem',
            id:     d[1],
            label:  d[3],
            params: flatten(d[4]),
        })},
    {"name": "plugin_def$subexpression$1", "symbols": [(mxLexer.has("kw_plugin") ? {type: "kw_plugin"} : kw_plugin), "__"]},
    {"name": "plugin_def$ebnf$1", "symbols": []},
    {"name": "plugin_def$ebnf$1$subexpression$1", "symbols": ["_", "parameter"]},
    {"name": "plugin_def$ebnf$1", "symbols": ["plugin_def$ebnf$1", "plugin_def$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "plugin_def", "symbols": ["plugin_def$subexpression$1", "var_name", "__", "var_name", "plugin_def$ebnf$1", "_", "LPAREN", "plugin_clauses", "RPAREN"], "postprocess":  d => ({
            type:       'EntityPlugin',
            superclass: d[1],
            class:      d[2],
            params:     flatten(d[4]),
            body:       d[7]
        })},
    {"name": "plugin_clauses", "symbols": []},
    {"name": "plugin_clauses", "symbols": ["plugin_clause"], "postprocess": id},
    {"name": "plugin_clauses", "symbols": ["plugin_clauses", "EOL", "plugin_clause"], "postprocess": d => [].concat(d[0], d[2])},
    {"name": "plugin_clause", "symbols": ["variable_decl"], "postprocess": id},
    {"name": "plugin_clause", "symbols": ["function_def"], "postprocess": id},
    {"name": "plugin_clause", "symbols": ["struct_def"], "postprocess": id},
    {"name": "plugin_clause", "symbols": ["tool_def"], "postprocess": id},
    {"name": "plugin_clause", "symbols": ["rollout_def"], "postprocess": id},
    {"name": "plugin_clause", "symbols": ["event_handler"], "postprocess": id},
    {"name": "plugin_clause", "symbols": ["plugin_parameter"], "postprocess": id},
    {"name": "plugin_parameter$subexpression$1", "symbols": [(mxLexer.has("kw_parameters") ? {type: "kw_parameters"} : kw_parameters), "__"]},
    {"name": "plugin_parameter$ebnf$1", "symbols": []},
    {"name": "plugin_parameter$ebnf$1$subexpression$1", "symbols": ["__", "parameter"]},
    {"name": "plugin_parameter$ebnf$1", "symbols": ["plugin_parameter$ebnf$1", "plugin_parameter$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "plugin_parameter", "symbols": ["plugin_parameter$subexpression$1", "var_name", "plugin_parameter$ebnf$1", "_", "LPAREN", "param_clauses", "RPAREN"], "postprocess":  d => ({
            type:   'EntityPlugin_params',
            id:     d[1],
            params: flatten(d[2]),
            body:   d[5]
        })},
    {"name": "param_clauses", "symbols": []},
    {"name": "param_clauses", "symbols": ["param_clause"], "postprocess": id},
    {"name": "param_clauses", "symbols": ["param_clauses", "__", "param_clause"], "postprocess": d => [].concat(d[0], d[2])},
    {"name": "param_clause", "symbols": ["param_defs"], "postprocess": id},
    {"name": "param_clause", "symbols": ["event_handler"], "postprocess": id},
    {"name": "param_defs$ebnf$1", "symbols": []},
    {"name": "param_defs$ebnf$1$subexpression$1", "symbols": ["__", "parameter"]},
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
    {"name": "tool_def$ebnf$2", "symbols": []},
    {"name": "tool_def$ebnf$2$subexpression$1", "symbols": ["EOL", "tool_clause"]},
    {"name": "tool_def$ebnf$2", "symbols": ["tool_def$ebnf$2", "tool_def$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "tool_def", "symbols": ["tool_def$subexpression$1", "var_name", "tool_def$ebnf$1", "_", "LPAREN", "tool_clause", "tool_def$ebnf$2", "RPAREN"], "postprocess":  d => ({
            type:   'EntityTool',
            id:     d[1],
            params: flatten(d[2]),
            body:   merge(d[5], d[6]),
            loc:    getLoc(d[0][0], d[7])
        })},
    {"name": "tool_clause", "symbols": ["variable_decl"], "postprocess": id},
    {"name": "tool_clause", "symbols": ["function_def"], "postprocess": id},
    {"name": "tool_clause", "symbols": ["struct_def"], "postprocess": id},
    {"name": "tool_clause", "symbols": ["event_handler"], "postprocess": id},
    {"name": "utility_def$subexpression$1", "symbols": [(mxLexer.has("kw_utility") ? {type: "kw_utility"} : kw_utility), "__"]},
    {"name": "utility_def$ebnf$1", "symbols": []},
    {"name": "utility_def$ebnf$1$subexpression$1", "symbols": ["_", "parameter"]},
    {"name": "utility_def$ebnf$1", "symbols": ["utility_def$ebnf$1", "utility_def$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "utility_def$ebnf$2", "symbols": []},
    {"name": "utility_def$ebnf$2$subexpression$1", "symbols": ["EOL", "utility_clause"]},
    {"name": "utility_def$ebnf$2", "symbols": ["utility_def$ebnf$2", "utility_def$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "utility_def", "symbols": ["utility_def$subexpression$1", "var_name", "_", "string", "utility_def$ebnf$1", "_", "LPAREN", "utility_clause", "utility_def$ebnf$2", "RPAREN"], "postprocess":  d => ({
            type:   'EntityUtility',
            id:     d[1],
            title:  d[3],
            params: flatten(d[4]),
            body:   merge(d[7], d[8]),
            loc:    getLoc(d[0][0], d[9])
        })},
    {"name": "utility_clause", "symbols": ["rollout_clause"], "postprocess": id},
    {"name": "utility_clause", "symbols": ["rollout_def"], "postprocess": id},
    {"name": "rollout_def$subexpression$1", "symbols": [(mxLexer.has("kw_rollout") ? {type: "kw_rollout"} : kw_rollout), "__"]},
    {"name": "rollout_def$ebnf$1", "symbols": []},
    {"name": "rollout_def$ebnf$1$subexpression$1", "symbols": ["_", "parameter"]},
    {"name": "rollout_def$ebnf$1", "symbols": ["rollout_def$ebnf$1", "rollout_def$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "rollout_def$ebnf$2", "symbols": []},
    {"name": "rollout_def$ebnf$2$subexpression$1", "symbols": ["EOL", "rollout_clause"]},
    {"name": "rollout_def$ebnf$2", "symbols": ["rollout_def$ebnf$2", "rollout_def$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "rollout_def", "symbols": ["rollout_def$subexpression$1", "var_name", "_", "string", "rollout_def$ebnf$1", "_", "LPAREN", "rollout_clause", "rollout_def$ebnf$2", "RPAREN"], "postprocess":  d => ({
            type:   'EntityRollout',
            id:     d[1],
            title:  d[3],
            params: flatten(d[4]),
            body:   merge(d[7], d[8]),
            loc:    getLoc(d[0][0], d[9])
        })},
    {"name": "rollout_clause", "symbols": ["variable_decl"], "postprocess": id},
    {"name": "rollout_clause", "symbols": ["function_def"], "postprocess": id},
    {"name": "rollout_clause", "symbols": ["struct_def"], "postprocess": id},
    {"name": "rollout_clause", "symbols": ["item_group"], "postprocess": id},
    {"name": "rollout_clause", "symbols": ["rollout_item"], "postprocess": id},
    {"name": "rollout_clause", "symbols": ["event_handler"], "postprocess": id},
    {"name": "rollout_clause", "symbols": ["tool_def"], "postprocess": id},
    {"name": "rollout_clause", "symbols": ["rollout_def"], "postprocess": id},
    {"name": "item_group$subexpression$1", "symbols": [(mxLexer.has("kw_group") ? {type: "kw_group"} : kw_group), "_"]},
    {"name": "item_group$ebnf$1", "symbols": []},
    {"name": "item_group$ebnf$1$subexpression$1", "symbols": ["EOL", "rollout_item"]},
    {"name": "item_group$ebnf$1", "symbols": ["item_group$ebnf$1", "item_group$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "item_group", "symbols": ["item_group$subexpression$1", "string", "_", "LPAREN", "rollout_item", "item_group$ebnf$1", "RPAREN"], "postprocess":  d => ({
            type: 'EntityRolloutGroup',
            id:   d[1],
            body: merge(d[4], d[5]),
            loc:getLoc(d[0][0], d[6])
        })},
    {"name": "rollout_item$ebnf$1$subexpression$1", "symbols": ["_", "string"]},
    {"name": "rollout_item$ebnf$1", "symbols": ["rollout_item$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "rollout_item$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "rollout_item$ebnf$2", "symbols": []},
    {"name": "rollout_item$ebnf$2$subexpression$1", "symbols": ["_", "parameter"]},
    {"name": "rollout_item$ebnf$2", "symbols": ["rollout_item$ebnf$2", "rollout_item$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "rollout_item", "symbols": ["item_type", "__", "var_name", "rollout_item$ebnf$1", "rollout_item$ebnf$2"], "postprocess":  d => ({
            type:   'EntityRolloutControl',
            class:  d[0],
            id:     d[2],
            text:   filterNull(d[3]),
            params: flatten(d[4])
        })},
    {"name": "item_type", "symbols": [(mxLexer.has("kw_uicontrols") ? {type: "kw_uicontrols"} : kw_uicontrols)]},
    {"name": "macroscript_def$subexpression$1", "symbols": [(mxLexer.has("kw_macroscript") ? {type: "kw_macroscript"} : kw_macroscript), "__"]},
    {"name": "macroscript_def$ebnf$1", "symbols": []},
    {"name": "macroscript_def$ebnf$1$subexpression$1", "symbols": ["_", "macro_script_param"]},
    {"name": "macroscript_def$ebnf$1", "symbols": ["macroscript_def$ebnf$1", "macroscript_def$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "macroscript_def$ebnf$2$subexpression$1$ebnf$1", "symbols": []},
    {"name": "macroscript_def$ebnf$2$subexpression$1$ebnf$1$subexpression$1", "symbols": ["EOL", "macro_script_clauses"]},
    {"name": "macroscript_def$ebnf$2$subexpression$1$ebnf$1", "symbols": ["macroscript_def$ebnf$2$subexpression$1$ebnf$1", "macroscript_def$ebnf$2$subexpression$1$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "macroscript_def$ebnf$2$subexpression$1", "symbols": ["macro_script_clauses", "macroscript_def$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "macroscript_def$ebnf$2", "symbols": ["macroscript_def$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "macroscript_def$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "macroscript_def", "symbols": ["macroscript_def$subexpression$1", "var_name", "macroscript_def$ebnf$1", "_", "LPAREN", "macroscript_def$ebnf$2", "RPAREN"], "postprocess":  d => ({
            type:   'EntityMacroscript',
            id:     d[1],
            params: d[3],
            body:   merge(...d[5]),
            loc:    getLoc(d[0][0], d[6])
        })},
    {"name": "macro_script_param$subexpression$1", "symbols": ["operand"]},
    {"name": "macro_script_param$subexpression$1", "symbols": ["resource"]},
    {"name": "macro_script_param", "symbols": ["param_name", "_", "macro_script_param$subexpression$1"], "postprocess":  d => ({
            ...d[0],
            value: d[2]
        })},
    {"name": "macro_script_body", "symbols": []},
    {"name": "macro_script_body", "symbols": ["macro_script_clauses"]},
    {"name": "macro_script_body", "symbols": ["macro_script_body", "EOL", "macro_script_clauses"], "postprocess": d => [].concat(d[0], d[2])},
    {"name": "macro_script_clauses", "symbols": ["expr"], "postprocess": id},
    {"name": "macro_script_clauses", "symbols": ["event_handler"], "postprocess": id},
    {"name": "struct_def$subexpression$1", "symbols": [(mxLexer.has("kw_struct") ? {type: "kw_struct"} : kw_struct), "__"]},
    {"name": "struct_def$ebnf$1", "symbols": []},
    {"name": "struct_def$ebnf$1", "symbols": ["struct_def$ebnf$1", "struct_members"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "struct_def", "symbols": ["struct_def$subexpression$1", "var_name", "_", "LPAREN", "struct_def$ebnf$1", "struct_member", "RPAREN"], "postprocess":  d => ({
            type: 'Struct',
            id:   d[1],
            body: [...d[4], d[5]],
            loc:  getLoc(d[0][0], d[6])
        })},
    {"name": "struct_members$subexpression$1", "symbols": ["_", {"literal":","}, "_"]},
    {"name": "struct_members", "symbols": ["struct_member", "struct_members$subexpression$1"], "postprocess": d => d[0]},
    {"name": "struct_members", "symbols": ["struct_mod", "_"], "postprocess": d => d[0]},
    {"name": "struct_mod", "symbols": [(mxLexer.has("kw_scope") ? {type: "kw_scope"} : kw_scope)], "postprocess": d => ({scope: d[0].value, loc:getLoc(d[0])})},
    {"name": "struct_member", "symbols": ["decl"], "postprocess": id},
    {"name": "struct_member", "symbols": ["function_def"], "postprocess": id},
    {"name": "struct_member", "symbols": ["event_handler"], "postprocess": id},
    {"name": "event_handler$subexpression$1", "symbols": [(mxLexer.has("kw_on") ? {type: "kw_on"} : kw_on), "__"]},
    {"name": "event_handler$subexpression$2", "symbols": [(mxLexer.has("kw_do") ? {type: "kw_do"} : kw_do)]},
    {"name": "event_handler$subexpression$2", "symbols": [(mxLexer.has("kw_return") ? {type: "kw_return"} : kw_return)]},
    {"name": "event_handler", "symbols": ["event_handler$subexpression$1", "event_args", "__", "event_handler$subexpression$2", "_", "expr"], "postprocess":  d => ({
            type:     'Event',
            args:     d[1],
            modifier: d[3],
            body:     d[5]
        }) },
    {"name": "event_args", "symbols": ["var_name"], "postprocess": d => ({event: d[0]})},
    {"name": "event_args", "symbols": ["var_name", "__", "var_name"], "postprocess": d => ({target: d[0], event: d[2]})},
    {"name": "event_args$ebnf$1$subexpression$1", "symbols": ["__", "var_name"]},
    {"name": "event_args$ebnf$1", "symbols": ["event_args$ebnf$1$subexpression$1"]},
    {"name": "event_args$ebnf$1$subexpression$2", "symbols": ["__", "var_name"]},
    {"name": "event_args$ebnf$1", "symbols": ["event_args$ebnf$1", "event_args$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "event_args", "symbols": ["var_name", "__", "var_name", "event_args$ebnf$1"], "postprocess":  d => ({
            target: d[0],
            event: d[2],
            args: flatten(d[3])}
        )},
    {"name": "change_handler$subexpression$1", "symbols": ["var_name"]},
    {"name": "change_handler$subexpression$1", "symbols": ["path_name"]},
    {"name": "change_handler$ebnf$1$subexpression$1", "symbols": ["parameter", "_"]},
    {"name": "change_handler$ebnf$1$subexpression$1", "symbols": ["parameter", "_", "parameter", "_"]},
    {"name": "change_handler$ebnf$1", "symbols": ["change_handler$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "change_handler$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "change_handler$ebnf$2$subexpression$1", "symbols": ["var_name", "__"]},
    {"name": "change_handler$ebnf$2", "symbols": ["change_handler$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "change_handler$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "change_handler", "symbols": [(mxLexer.has("kw_when") ? {type: "kw_when"} : kw_when), "__", "var_name", "__", "change_handler$subexpression$1", "__", "var_name", "__", "change_handler$ebnf$1", "change_handler$ebnf$2", (mxLexer.has("kw_do") ? {type: "kw_do"} : kw_do), "_", "expr"]},
    {"name": "change_handler$subexpression$2", "symbols": ["var_name"]},
    {"name": "change_handler$subexpression$2", "symbols": ["path_name"]},
    {"name": "change_handler$ebnf$3$subexpression$1", "symbols": ["parameter", "_"]},
    {"name": "change_handler$ebnf$3$subexpression$1", "symbols": ["parameter", "_", "parameter", "_"]},
    {"name": "change_handler$ebnf$3", "symbols": ["change_handler$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "change_handler$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "change_handler$ebnf$4$subexpression$1", "symbols": ["var_name", "_"]},
    {"name": "change_handler$ebnf$4", "symbols": ["change_handler$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "change_handler$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "change_handler", "symbols": [(mxLexer.has("kw_when") ? {type: "kw_when"} : kw_when), "__", "change_handler$subexpression$2", "__", "var_name", "__", "change_handler$ebnf$3", "change_handler$ebnf$4", (mxLexer.has("kw_do") ? {type: "kw_do"} : kw_do), "_", "expr"]},
    {"name": "function_def$ebnf$1", "symbols": []},
    {"name": "function_def$ebnf$1$subexpression$1", "symbols": ["_", "var_name"]},
    {"name": "function_def$ebnf$1", "symbols": ["function_def$ebnf$1", "function_def$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "function_def$ebnf$2", "symbols": []},
    {"name": "function_def$ebnf$2$subexpression$1", "symbols": ["_", "arg"]},
    {"name": "function_def$ebnf$2", "symbols": ["function_def$ebnf$2", "function_def$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "function_def$subexpression$1", "symbols": ["_", {"literal":"="}, "_"]},
    {"name": "function_def", "symbols": ["function_decl", "__", "var_name", "function_def$ebnf$1", "function_def$ebnf$2", "function_def$subexpression$1", "expr"], "postprocess":  d => ({
            ...d[0],
            id:     d[2],
            args:   flatten(d[3]),
            params: flatten(d[4]),
            body:   d[6],
        })},
    {"name": "function_decl$ebnf$1$subexpression$1", "symbols": [(mxLexer.has("kw_mapped") ? {type: "kw_mapped"} : kw_mapped), "__"]},
    {"name": "function_decl$ebnf$1", "symbols": ["function_decl$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "function_decl$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "function_decl", "symbols": ["function_decl$ebnf$1", (mxLexer.has("kw_function") ? {type: "kw_function"} : kw_function)], "postprocess":  d => ({
            type:   'Function',
            mapped: (d[0] != null),
            loc: (getLoc(d[0] != null ? d[0][0] : d[1]))
        })},
    {"name": "arg", "symbols": ["parameter"], "postprocess": id},
    {"name": "arg", "symbols": ["param_name"], "postprocess": id},
    {"name": "function_return$ebnf$1", "symbols": ["expr"], "postprocess": id},
    {"name": "function_return$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "function_return", "symbols": [(mxLexer.has("kw_return") ? {type: "kw_return"} : kw_return), "_", "function_return$ebnf$1"], "postprocess":  d => ({
            type: 'FunctionReturn',
            body: d[2]
        })},
    {"name": "set_context", "symbols": [(mxLexer.has("kw_set") ? {type: "kw_set"} : kw_set), "_", "context"]},
    {"name": "context_expr$ebnf$1", "symbols": []},
    {"name": "context_expr$ebnf$1$subexpression$1", "symbols": ["_S", {"literal":","}, "_", "context"]},
    {"name": "context_expr$ebnf$1", "symbols": ["context_expr$ebnf$1", "context_expr$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "context_expr", "symbols": ["context", "context_expr$ebnf$1", "_", "expr"]},
    {"name": "context$subexpression$1", "symbols": [(mxLexer.has("kw_level") ? {type: "kw_level"} : kw_level)]},
    {"name": "context$subexpression$1", "symbols": [(mxLexer.has("kw_time") ? {type: "kw_time"} : kw_time)]},
    {"name": "context", "symbols": [(mxLexer.has("kw_at") ? {type: "kw_at"} : kw_at), "__", "context$subexpression$1", "__", "operand"]},
    {"name": "context", "symbols": [(mxLexer.has("kw_in") ? {type: "kw_in"} : kw_in), "__", "operand"]},
    {"name": "context$ebnf$1$subexpression$1", "symbols": [(mxLexer.has("kw_in") ? {type: "kw_in"} : kw_in), "__"]},
    {"name": "context$ebnf$1", "symbols": ["context$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "context$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "context$subexpression$2", "symbols": ["__", (mxLexer.has("kw_local") ? {type: "kw_local"} : kw_local)]},
    {"name": "context$subexpression$2", "symbols": ["__", "operand"]},
    {"name": "context", "symbols": ["context$ebnf$1", (mxLexer.has("kw_coordsys") ? {type: "kw_coordsys"} : kw_coordsys), "context$subexpression$2"]},
    {"name": "context$subexpression$3", "symbols": ["__", (mxLexer.has("kw_coordsys") ? {type: "kw_coordsys"} : kw_coordsys)]},
    {"name": "context$subexpression$3", "symbols": ["__", "operand"]},
    {"name": "context", "symbols": [(mxLexer.has("kw_about") ? {type: "kw_about"} : kw_about), "context$subexpression$3"]},
    {"name": "context$ebnf$2$subexpression$1", "symbols": [(mxLexer.has("kw_with") ? {type: "kw_with"} : kw_with), "__"]},
    {"name": "context$ebnf$2", "symbols": ["context$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "context$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "context$subexpression$4", "symbols": ["logical_expr"]},
    {"name": "context$subexpression$4", "symbols": ["bool"]},
    {"name": "context", "symbols": ["context$ebnf$2", (mxLexer.has("kw_context") ? {type: "kw_context"} : kw_context), "__", "context$subexpression$4"]},
    {"name": "context$subexpression$5", "symbols": [{"literal":"#logmsg"}]},
    {"name": "context$subexpression$5", "symbols": [{"literal":"#logToFile"}]},
    {"name": "context$subexpression$5", "symbols": [{"literal":"#abort"}]},
    {"name": "context", "symbols": [(mxLexer.has("kw_with") ? {type: "kw_with"} : kw_with), "__", (mxLexer.has("kw_defaultAction") ? {type: "kw_defaultAction"} : kw_defaultAction), "__", "context$subexpression$5"]},
    {"name": "context$ebnf$3$subexpression$1", "symbols": [(mxLexer.has("kw_with") ? {type: "kw_with"} : kw_with), "__"]},
    {"name": "context$ebnf$3", "symbols": ["context$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "context$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "context$ebnf$4$subexpression$1", "symbols": ["_", "string", "_"]},
    {"name": "context$ebnf$4$subexpression$1", "symbols": ["__", "param_name", "_", "expr", "_"]},
    {"name": "context$ebnf$4$subexpression$1", "symbols": ["__", "var_name", "_"]},
    {"name": "context$ebnf$4", "symbols": ["context$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "context$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "context$subexpression$6", "symbols": ["_", "logical_expr"]},
    {"name": "context$subexpression$6", "symbols": ["__", "bool"]},
    {"name": "context", "symbols": ["context$ebnf$3", (mxLexer.has("kw_undo") ? {type: "kw_undo"} : kw_undo), "context$ebnf$4", "context$subexpression$6"]},
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
    {"name": "case_item$subexpression$1", "symbols": [{"literal":":"}, "_"]},
    {"name": "case_item", "symbols": ["factor", "case_item$subexpression$1", "expr"], "postprocess": d => ({case: d[0], body: d[2] })},
    {"name": "case_item", "symbols": ["param_name", "_", "expr"], "postprocess": d => ({case: d[0], body: d[2] })},
    {"name": "for_loop$subexpression$1", "symbols": [(mxLexer.has("kw_for") ? {type: "kw_for"} : kw_for), "__"]},
    {"name": "for_loop$subexpression$2", "symbols": ["for_to"]},
    {"name": "for_loop$subexpression$2", "symbols": ["for_in"]},
    {"name": "for_loop$subexpression$3$subexpression$1", "symbols": [(mxLexer.has("kw_do") ? {type: "kw_do"} : kw_do)]},
    {"name": "for_loop$subexpression$3$subexpression$1", "symbols": [(mxLexer.has("kw_collect") ? {type: "kw_collect"} : kw_collect)]},
    {"name": "for_loop$subexpression$3", "symbols": ["_", "for_loop$subexpression$3$subexpression$1", "_"]},
    {"name": "for_loop", "symbols": ["for_loop$subexpression$1", "var_name", "_S", "for_loop$subexpression$2", "for_loop$subexpression$3", "expr"], "postprocess":  d => ({
            type: 'ForStatement',
            init:  d[1],
            ...d[3],
            action: [d[4][1]],
            body:   d[5]
        })},
    {"name": "for_to$subexpression$1", "symbols": [{"literal":"="}, "_S"]},
    {"name": "for_to$subexpression$2", "symbols": ["_", (mxLexer.has("kw_to") ? {type: "kw_to"} : kw_to), "_S"]},
    {"name": "for_to$ebnf$1$subexpression$1$subexpression$1", "symbols": ["_", (mxLexer.has("kw_by") ? {type: "kw_by"} : kw_by), "_S"]},
    {"name": "for_to$ebnf$1$subexpression$1", "symbols": ["for_to$ebnf$1$subexpression$1$subexpression$1", "expr"]},
    {"name": "for_to$ebnf$1", "symbols": ["for_to$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "for_to$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "for_to$ebnf$2$subexpression$1$subexpression$1", "symbols": ["_", (mxLexer.has("kw_while") ? {type: "kw_while"} : kw_while), "_S"]},
    {"name": "for_to$ebnf$2$subexpression$1", "symbols": ["for_to$ebnf$2$subexpression$1$subexpression$1", "expr"]},
    {"name": "for_to$ebnf$2", "symbols": ["for_to$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "for_to$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "for_to$ebnf$3$subexpression$1$subexpression$1", "symbols": ["_", (mxLexer.has("kw_where") ? {type: "kw_where"} : kw_where), "_S"]},
    {"name": "for_to$ebnf$3$subexpression$1", "symbols": ["for_to$ebnf$3$subexpression$1$subexpression$1", "expr"]},
    {"name": "for_to$ebnf$3", "symbols": ["for_to$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "for_to$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "for_to", "symbols": ["for_to$subexpression$1", "expr", "for_to$subexpression$2", "expr", "for_to$ebnf$1", "for_to$ebnf$2", "for_to$ebnf$3"], "postprocess":  d => ({
            iteration: 'ordinal',
            value:     d[1],
            to:        d[3],
            by:        filterNull(d[4]),
            while:     filterNull(d[5]),
            where:     filterNull(d[6])
        })},
    {"name": "for_in$subexpression$1", "symbols": [(mxLexer.has("kw_in") ? {type: "kw_in"} : kw_in), "_S"]},
    {"name": "for_in$ebnf$1$subexpression$1$subexpression$1", "symbols": ["_", (mxLexer.has("kw_where") ? {type: "kw_where"} : kw_where), "_S"]},
    {"name": "for_in$ebnf$1$subexpression$1", "symbols": ["for_in$ebnf$1$subexpression$1$subexpression$1", "expr"]},
    {"name": "for_in$ebnf$1", "symbols": ["for_in$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "for_in$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "for_in", "symbols": ["for_in$subexpression$1", "expr", "for_in$ebnf$1"], "postprocess":  d => ({
            iteration: 'cardinal',
            value:     d[1],
            where:     filterNull(d[2])
        })},
    {"name": "loop_exit", "symbols": [(mxLexer.has("kw_exit") ? {type: "kw_exit"} : kw_exit)], "postprocess":  d => ({
            type : 'LoopExit',
            loc:   getLoc(d[0])
        })},
    {"name": "loop_exit$subexpression$1", "symbols": ["__", (mxLexer.has("kw_with") ? {type: "kw_with"} : kw_with), "_"]},
    {"name": "loop_exit", "symbols": [(mxLexer.has("kw_exit") ? {type: "kw_exit"} : kw_exit), "loop_exit$subexpression$1", "expr"], "postprocess":  d => ({
            type : 'LoopExit',
            with:  d[2],
            loc:   getLoc(d[0])
        })},
    {"name": "do_loop$subexpression$1", "symbols": [(mxLexer.has("kw_do") ? {type: "kw_do"} : kw_do), "__"]},
    {"name": "do_loop$subexpression$2", "symbols": ["__", (mxLexer.has("kw_while") ? {type: "kw_while"} : kw_while), "__"]},
    {"name": "do_loop", "symbols": ["do_loop$subexpression$1", "expr", "do_loop$subexpression$2", "expr"], "postprocess":  d => ({
            type: 'DoWhileStatement',
            body: d[1],
            test: d[3]
        })},
    {"name": "while_loop$subexpression$1", "symbols": [(mxLexer.has("kw_while") ? {type: "kw_while"} : kw_while), "__"]},
    {"name": "while_loop$subexpression$2", "symbols": ["__", (mxLexer.has("kw_do") ? {type: "kw_do"} : kw_do), "__"]},
    {"name": "while_loop", "symbols": ["while_loop$subexpression$1", "expr", "while_loop$subexpression$2", "expr"], "postprocess":  d => ({
            type: 'WhileStatement',
            test: d[1],
            body: d[3]
        })},
    {"name": "if_expr$subexpression$1", "symbols": [(mxLexer.has("kw_if") ? {type: "kw_if"} : kw_if), "_"]},
    {"name": "if_expr$subexpression$2$subexpression$1", "symbols": [(mxLexer.has("kw_do") ? {type: "kw_do"} : kw_do)]},
    {"name": "if_expr$subexpression$2$subexpression$1", "symbols": [(mxLexer.has("kw_then") ? {type: "kw_then"} : kw_then)]},
    {"name": "if_expr$subexpression$2", "symbols": ["_", "if_expr$subexpression$2$subexpression$1", "_"]},
    {"name": "if_expr", "symbols": ["if_expr$subexpression$1", "expr", "if_expr$subexpression$2", "expr"], "postprocess":  d => ({
            type:       'IfStatement',
            consequent: d[1],
            alternate:  d[3]
        })},
    {"name": "if_expr$subexpression$3", "symbols": [(mxLexer.has("kw_if") ? {type: "kw_if"} : kw_if), "_"]},
    {"name": "if_expr$subexpression$4", "symbols": ["_", (mxLexer.has("kw_then") ? {type: "kw_then"} : kw_then), "_"]},
    {"name": "if_expr$subexpression$5", "symbols": ["_", (mxLexer.has("kw_else") ? {type: "kw_else"} : kw_else), "_"]},
    {"name": "if_expr", "symbols": ["if_expr$subexpression$3", "expr", "if_expr$subexpression$4", "expr", "if_expr$subexpression$5", "expr"], "postprocess":  d => ({
            type:       'IfStatement',
            test:       d[1],
            consequent: d[3],
            alternate:  d[5]
        })},
    {"name": "try_expr$subexpression$1", "symbols": [(mxLexer.has("kw_try") ? {type: "kw_try"} : kw_try), "_"]},
    {"name": "try_expr$subexpression$2", "symbols": ["_", (mxLexer.has("kw_catch") ? {type: "kw_catch"} : kw_catch), "_"]},
    {"name": "try_expr", "symbols": ["try_expr$subexpression$1", "expr", "try_expr$subexpression$2", "expr"], "postprocess":  d => ({
            type:      'TryStatement',
            block:     d[1],
            finalizer: d[3]
        })},
    {"name": "kw_try", "symbols": [(mxLexer.has("kw_try") ? {type: "kw_try"} : kw_try), "_"], "postprocess": d => d[0]},
    {"name": "variable_decl$ebnf$1", "symbols": []},
    {"name": "variable_decl$ebnf$1$subexpression$1$subexpression$1", "symbols": ["_S", {"literal":","}, "_"]},
    {"name": "variable_decl$ebnf$1$subexpression$1", "symbols": ["variable_decl$ebnf$1$subexpression$1$subexpression$1", "decl"]},
    {"name": "variable_decl$ebnf$1", "symbols": ["variable_decl$ebnf$1", "variable_decl$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "variable_decl", "symbols": ["kw_decl", "_", "decl", "variable_decl$ebnf$1"], "postprocess":  d => ({
            type: 'VariableDeclaration',
            ...d[0],
            decls:  merge(d[2], d[3]),
        })},
    {"name": "kw_decl", "symbols": [(mxLexer.has("kw_local") ? {type: "kw_local"} : kw_local)], "postprocess": d => ({scope: d[0].value, loc:getLoc(d[0])})},
    {"name": "kw_decl", "symbols": [(mxLexer.has("kw_global") ? {type: "kw_global"} : kw_global)], "postprocess": d => ({scope: d[0].value, loc:getLoc(d[0])})},
    {"name": "kw_decl", "symbols": [(mxLexer.has("kw_persistent") ? {type: "kw_persistent"} : kw_persistent), "__", (mxLexer.has("kw_global") ? {type: "kw_global"} : kw_global)], "postprocess": d => ({scope: 'persistent global', loc:getLoc(d[0], d[2])})},
    {"name": "decl", "symbols": ["var_name"], "postprocess": d => ({type:'Declaration', id:d[0]})},
    {"name": "decl$subexpression$1", "symbols": ["_S", {"literal":"="}, "_"]},
    {"name": "decl", "symbols": ["var_name", "decl$subexpression$1", "expr"], "postprocess": d => ({type:'Declaration', id:d[0], value: d[2]})},
    {"name": "assignment$subexpression$1", "symbols": ["_S", "assignSym", "_"]},
    {"name": "assignment", "symbols": ["destination", "assignment$subexpression$1", "expr"], "postprocess":  d => ({
            type:     'AssignmentExpression',
            operator: d[1][1],
            operand:  d[0],
            value:    d[2]
        })},
    {"name": "assignSym", "symbols": [(mxLexer.has("assign") ? {type: "assign"} : assign)]},
    {"name": "destination", "symbols": ["var_name"], "postprocess": id},
    {"name": "destination", "symbols": ["property"], "postprocess": id},
    {"name": "destination", "symbols": ["index"], "postprocess": id},
    {"name": "math_expr", "symbols": ["math_operand", "_S", "mathSym", "_", "math_operand"], "postprocess":  d => ({
            type:     'MathExpression',
            operator: d[2],
            left:     d[0],
            right:    d[4]
        })},
    {"name": "math_expr", "symbols": ["math_expr", "_S", "mathSym", "_", "math_operand"], "postprocess":  d => ({
            type:     'MathExpression',
            operator: d[2],
            left:     d[0],
            right:    d[4]
        })},
    {"name": "math_expr", "symbols": ["math_operand", "_S", (mxLexer.has("kw_as") ? {type: "kw_as"} : kw_as), "_", "var_name"], "postprocess":  d => ({
            type:     'MathExpression',
            operator: d[2],
            left:     d[0],
            right:    d[4]
        })},
    {"name": "math_expr", "symbols": ["math_expr", "_S", (mxLexer.has("kw_as") ? {type: "kw_as"} : kw_as), "_", "var_name"], "postprocess":  d => ({
            type:     'MathExpression',
            operator: d[2],
            left:     d[0],
            right:    d[4]}
        )},
    {"name": "mathSym", "symbols": [(mxLexer.has("math") ? {type: "math"} : math)]},
    {"name": "math_operand", "symbols": ["operand"], "postprocess": id},
    {"name": "math_operand", "symbols": ["fn_call"], "postprocess": id},
    {"name": "conversion", "symbols": ["operand", "_S", (mxLexer.has("kw_as") ? {type: "kw_as"} : kw_as), "_", "var_name"], "postprocess":  d => ({
            type:    'ConvertExpression',
            operand: d[0],
            class:   d[4]
        })},
    {"name": "logical_expr$subexpression$1", "symbols": ["not_operand"]},
    {"name": "logical_expr$subexpression$1", "symbols": ["logical_operand"]},
    {"name": "logical_expr", "symbols": ["logical_operand", "_S", (mxLexer.has("kw_compare") ? {type: "kw_compare"} : kw_compare), "_", "logical_expr$subexpression$1"], "postprocess":  d => ({
            type :    'LogicalExpression',
            operator: d[2],
            left:     d[0],
            right:    d[4]
        }) },
    {"name": "logical_expr$subexpression$2", "symbols": ["not_operand"]},
    {"name": "logical_expr$subexpression$2", "symbols": ["logical_operand"]},
    {"name": "logical_expr", "symbols": ["logical_expr", "_S", (mxLexer.has("kw_compare") ? {type: "kw_compare"} : kw_compare), "_", "logical_expr$subexpression$2"], "postprocess":  d => ({
            type :    'LogicalExpression',
            operator: d[2],
            left:     d[0],
            right:    d[4]
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
    {"name": "compare_expr", "symbols": ["compare_operand", "_S", "compareSym", "_", "compare_operand"], "postprocess":  d => ({
            type:     'LogicalExpression',
            operator: d[2],
            left:     d[0],
            right:    d[4]
        }) },
    {"name": "compare_operand", "symbols": ["math_expr"], "postprocess": id},
    {"name": "compare_operand", "symbols": ["operand"], "postprocess": id},
    {"name": "compare_operand", "symbols": ["fn_call"], "postprocess": id},
    {"name": "compareSym", "symbols": [(mxLexer.has("comparison") ? {type: "comparison"} : comparison)]},
    {"name": "fn_call", "symbols": ["operand", "voidparens"], "postprocess":  d => ({
            type:      'CallExpression',
            callee:    d[0],
            arguments: d[1]
        })},
    {"name": "fn_call", "symbols": ["operand", "_S", "call_params"], "postprocess":  d => ({
            type:      'CallExpression',
            calle:     d[0],
            arguments: d[2]
        })},
    {"name": "call_params", "symbols": ["fn_call_args"], "postprocess": id},
    {"name": "call_params", "symbols": ["call_params", "_S", "fn_call_args"], "postprocess": d => [].concat(d[0], d[2])},
    {"name": "fn_call_args", "symbols": ["operand"]},
    {"name": "fn_call_args", "symbols": ["parameter"]},
    {"name": "parameter", "symbols": ["param_name", "_", "operand"], "postprocess":  d => ({
            type: 'ParameterAssignment',
            param: d[0], //id: d[0].id,
            value: d[2],
            //loc: d[0].loc
        })},
    {"name": "param_name", "symbols": [(mxLexer.has("params") ? {type: "params"} : params)]},
    {"name": "operand", "symbols": ["factor"], "postprocess": id},
    {"name": "operand", "symbols": ["property"], "postprocess": id},
    {"name": "operand", "symbols": ["index"], "postprocess": id},
    {"name": "property", "symbols": ["operand", (mxLexer.has("property") ? {type: "property"} : property)], "postprocess":  d => ({
            type: 'AccessorProperty',
            operand: d[0],
            property: d[1],   //property: d[1].value,
            //loc: getLoc(d[1])
        })},
    {"name": "index", "symbols": ["operand", "_", "p_start", "expr", "p_end"], "postprocess":  d => ({
            type:    'AccessorIndex',
            operand: d[0],
            index:   d[3],
            loc:     getLoc(d[2], d[4])
        })},
    {"name": "factor", "symbols": ["number"], "postprocess": id},
    {"name": "factor", "symbols": ["string"], "postprocess": id},
    {"name": "factor", "symbols": ["path_name"], "postprocess": id},
    {"name": "factor", "symbols": ["var_name"], "postprocess": id},
    {"name": "factor", "symbols": ["name_value"], "postprocess": id},
    {"name": "factor", "symbols": ["array"], "postprocess": id},
    {"name": "factor", "symbols": ["bitarray"], "postprocess": id},
    {"name": "factor", "symbols": ["point3"], "postprocess": id},
    {"name": "factor", "symbols": ["point2"], "postprocess": id},
    {"name": "factor", "symbols": ["time"], "postprocess": id},
    {"name": "factor", "symbols": ["bool"], "postprocess": id},
    {"name": "factor", "symbols": ["void"], "postprocess": id},
    {"name": "factor", "symbols": [{"literal":"-"}, "expr"], "postprocess": d => ({type: 'UnaryExpression', operand: d[1], })},
    {"name": "factor", "symbols": [{"literal":"?"}], "postprocess": d => ({type: 'Keyword', value: d[0]})},
    {"name": "factor", "symbols": ["expr_seq"], "postprocess": id},
    {"name": "factor", "symbols": [(mxLexer.has("error") ? {type: "error"} : error)], "postprocess": id},
    {"name": "kw_reserved", "symbols": [(mxLexer.has("kw_uicontrols") ? {type: "kw_uicontrols"} : kw_uicontrols)]},
    {"name": "kw_reserved", "symbols": [(mxLexer.has("kw_objectset") ? {type: "kw_objectset"} : kw_objectset)]},
    {"name": "kw_reserved", "symbols": [(mxLexer.has("kw_time") ? {type: "kw_time"} : kw_time)]},
    {"name": "kw_reserved", "symbols": [(mxLexer.has("kw_group") ? {type: "kw_group"} : kw_group)]},
    {"name": "point4$subexpression$1", "symbols": ["_S", {"literal":","}, "_"]},
    {"name": "point4$subexpression$2", "symbols": ["_S", {"literal":","}, "_"]},
    {"name": "point4$subexpression$3", "symbols": ["_S", {"literal":","}, "_"]},
    {"name": "point4", "symbols": ["p_start", "expr", "point4$subexpression$1", "expr", "point4$subexpression$2", "expr", "point4$subexpression$3", "expr", "p_end"], "postprocess":  d => ({
            type: 'ObjectPoint4',
                x: d[1], y: d[3], z: d[5], w: d[7],
                loc: getLoc(d[0], d[8])
        }) },
    {"name": "point3$subexpression$1", "symbols": ["_S", {"literal":","}, "_"]},
    {"name": "point3$subexpression$2", "symbols": ["_S", {"literal":","}, "_"]},
    {"name": "point3", "symbols": ["p_start", "expr", "point3$subexpression$1", "expr", "point3$subexpression$2", "expr", "p_end"], "postprocess":  d => ({
            type: 'ObjectPoint3',
                x: d[1], y: d[3], z: d[5],
                loc: getLoc(d[0], d[6])
        }) },
    {"name": "point2$subexpression$1", "symbols": ["_S", {"literal":","}, "_"]},
    {"name": "point2", "symbols": ["p_start", "expr", "point2$subexpression$1", "expr", "p_end"], "postprocess":  d => ({
            type: 'ObjectPoint2',
                x: d[1], y: d[3],
                loc: getLoc(d[0], d[4])
        }) },
    {"name": "p_start", "symbols": [{"literal":"["}, "_"], "postprocess": d => d[0]},
    {"name": "p_end", "symbols": ["_S", {"literal":"]"}], "postprocess": d => d[1]},
    {"name": "array", "symbols": [(mxLexer.has("arraydef") ? {type: "arraydef"} : arraydef), "_", (mxLexer.has("rparen") ? {type: "rparen"} : rparen)], "postprocess":  d => ({
            type:      'ObjectArray',
            elements:  d[1],
            loc:       getLoc(d[0], d[2])
        }) },
    {"name": "array$subexpression$1", "symbols": [(mxLexer.has("arraydef") ? {type: "arraydef"} : arraydef), "_"]},
    {"name": "array$subexpression$2", "symbols": ["_", (mxLexer.has("rparen") ? {type: "rparen"} : rparen)]},
    {"name": "array", "symbols": ["array$subexpression$1", "array_expr", "array$subexpression$2"], "postprocess":  d => ({
            type:     'ObjectArray',
            elements: d[1],
            loc:      getLoc(d[0], d[2])
        }) },
    {"name": "array_expr", "symbols": ["expr"], "postprocess": id},
    {"name": "array_expr$subexpression$1", "symbols": ["_", {"literal":","}, "_"]},
    {"name": "array_expr", "symbols": ["array_expr", "array_expr$subexpression$1", "expr"], "postprocess": d => [].concat(d[0], d[4])},
    {"name": "bitarray", "symbols": [(mxLexer.has("bitarraydef") ? {type: "bitarraydef"} : bitarraydef), "_", (mxLexer.has("rbrace") ? {type: "rbrace"} : rbrace)], "postprocess":  d => ({
            type:     'ObjectBitArray',
            elements: d[1],
            loc:      getLoc(d[0], d[2])
        }) },
    {"name": "bitarray$subexpression$1", "symbols": [(mxLexer.has("bitarraydef") ? {type: "bitarraydef"} : bitarraydef), "_"]},
    {"name": "bitarray$subexpression$2", "symbols": ["_", (mxLexer.has("rbrace") ? {type: "rbrace"} : rbrace)]},
    {"name": "bitarray", "symbols": ["bitarray$subexpression$1", "bitarray_expr", "bitarray$subexpression$2"], "postprocess":  d => ({
            type:     'ObjectBitArray',
            elements: d[1],
            loc:      getLoc(d[0], d[2])
        }) },
    {"name": "bitarray_expr", "symbols": ["bitarray_expr"], "postprocess": id},
    {"name": "bitarray_expr$subexpression$1", "symbols": ["_", {"literal":","}, "_"]},
    {"name": "bitarray_expr", "symbols": ["bitarray_expr", "bitarray_expr$subexpression$1", "bitarray_expr"], "postprocess": d => [].concat(d[0], d[2])},
    {"name": "bitarray_expr", "symbols": ["expr"], "postprocess": id},
    {"name": "bitarray_expr", "symbols": ["expr", {"literal":".."}, "expr"], "postprocess": d => [].concat(...d)},
    {"name": "time", "symbols": [(mxLexer.has("time") ? {type: "time"} : time)], "postprocess":  d => ({
            type: 'Literal',
            value: d[0], //.value,
            //loc:getLoc(d[0])
        }) },
    {"name": "bool$subexpression$1", "symbols": [(mxLexer.has("kw_bool") ? {type: "kw_bool"} : kw_bool)]},
    {"name": "bool$subexpression$1", "symbols": [(mxLexer.has("kw_on") ? {type: "kw_on"} : kw_on)]},
    {"name": "bool", "symbols": ["bool$subexpression$1"], "postprocess":  d => ({
            type: 'Literal',
            value: d[0], //.value,
            //loc:getLoc(d[0])
        }) },
    {"name": "void", "symbols": [(mxLexer.has("kw_null") ? {type: "kw_null"} : kw_null)], "postprocess":  d => ({
            type: 'Literal',
            value: d[0], //.value,
            //loc:getLoc(d[0])
        }) },
    {"name": "number", "symbols": ["number_types"], "postprocess":  d => ({
            type: 'Literal',
            value: d[0], //.value,
            //loc:getLoc(d[0])
        }) },
    {"name": "number_types", "symbols": [(mxLexer.has("posint") ? {type: "posint"} : posint)]},
    {"name": "number_types", "symbols": [(mxLexer.has("negint") ? {type: "negint"} : negint)]},
    {"name": "number_types", "symbols": [(mxLexer.has("number") ? {type: "number"} : number)]},
    {"name": "number_types", "symbols": [(mxLexer.has("hex") ? {type: "hex"} : hex)]},
    {"name": "string", "symbols": [(mxLexer.has("string") ? {type: "string"} : string)], "postprocess":  d => ({
            type: 'Literal',
            value: d[0], //.value,
            //loc:getLoc(d[0])
        }) },
    {"name": "name_value", "symbols": [(mxLexer.has("name") ? {type: "name"} : name)], "postprocess":  d => ({
            type: 'Literal',
            value: d[0], //.text,
            //loc:getLoc(d[0])
        }) },
    {"name": "resource", "symbols": [(mxLexer.has("locale") ? {type: "locale"} : locale)], "postprocess":  d => ({
            type: 'Literal',
            value: d[0], //.text,
            //loc:getLoc(d[0])
        }) },
    {"name": "var_name", "symbols": ["var_type"], "postprocess":  d => ({
            type: 'Identifier',
            value: d[0], //.value,
            //loc:getLoc(d[0])
        }) },
    {"name": "var_type", "symbols": [(mxLexer.has("identity") ? {type: "identity"} : identity)], "postprocess": id},
    {"name": "var_type", "symbols": [(mxLexer.has("global_typed") ? {type: "global_typed"} : global_typed)]},
    {"name": "var_type", "symbols": ["kw_reserved"]},
    {"name": "path_name", "symbols": [(mxLexer.has("path") ? {type: "path"} : path)], "postprocess":  d => ({
            type: 'Identifier',
            value: d[0], //.value,
            //loc:getLoc(d[0])
        }) },
    {"name": "LPAREN", "symbols": [(mxLexer.has("lparen") ? {type: "lparen"} : lparen), "_"], "postprocess": d => d[0]},
    {"name": "RPAREN", "symbols": ["___", (mxLexer.has("rparen") ? {type: "rparen"} : rparen)], "postprocess": d => d[1]},
    {"name": "voidparens", "symbols": [{"literal":"()"}], "postprocess": d => '( )'},
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
    {"name": "_S_", "symbols": ["ws"]},
    {"name": "_S_", "symbols": ["_S_", "ws"], "postprocess": d => null},
    {"name": "_S", "symbols": []},
    {"name": "_S", "symbols": ["_S", "ws"], "postprocess": d => null},
    {"name": "__", "symbols": [(mxLexer.has("ws") ? {type: "ws"} : ws)]},
    {"name": "__", "symbols": ["__", "junk"], "postprocess": d => null},
    {"name": "_", "symbols": []},
    {"name": "_", "symbols": ["_", "junk"], "postprocess": d => null},
    {"name": "___", "symbols": []},
    {"name": "___$subexpression$1", "symbols": ["junk"]},
    {"name": "___$subexpression$1", "symbols": [(mxLexer.has("statement") ? {type: "statement"} : statement)]},
    {"name": "___", "symbols": ["___", "___$subexpression$1"], "postprocess": d => null},
    {"name": "ws", "symbols": [(mxLexer.has("ws") ? {type: "ws"} : ws)]},
    {"name": "ws", "symbols": [(mxLexer.has("comment_BLK") ? {type: "comment_BLK"} : comment_BLK)]},
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
