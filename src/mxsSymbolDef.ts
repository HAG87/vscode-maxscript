'use strict'
import * as vscode from 'vscode';

export interface mxsSymbolMatch {
	type: string,
	match: RegExp,
	kind: vscode.SymbolKind,
	decl: number
}

export const mxsSymbols: mxsSymbolMatch[] = [
	{
		type: 'struct',
		match: /struct\s+(\b\w+)/ig,
		kind: vscode.SymbolKind.Struct,
		decl: 1
	},
	{
		type: 'function',
		match: /(fn|function)\s+(\b\w+)/ig,
		kind: vscode.SymbolKind.Function,
		decl: 2
	},
	/*
	{
		type: 'localVar',
		match: /local\s+(\b\w+)/ig,
		kind: vscode.SymbolKind.Variable,
		decl: 1
	},
	{
		type: 'globalVar',
		match: /global\s+(\b\w+)/ig,
		kind: vscode.SymbolKind.Variable,
		decl: 1
	},
	{
		type: 'globalTyped',
		match: /(::\w+)/ig,
		kind: vscode.SymbolKind.Variable,
		decl: 1
	},
	*/
	{
		type: 'macroscript',
		match: /macroscript\s+(\b\w+)/ig,
		kind: vscode.SymbolKind.Object,
		decl: 1
	},
	{
		type: 'rollout',
		match: /rollout\s+(\b\w+)/ig,
		kind: vscode.SymbolKind.Constructor,
		decl: 1
	},
	{
		type: 'utility',
		match: /utility\s+(\b\w+)/ig,
		kind: vscode.SymbolKind.Object,
		decl: 1
	},
	{
		type: 'tool',
		match: /(tool|mousetool)\s+(\b\w+)/ig,
		kind: vscode.SymbolKind.Object,
		decl: 2
	},
	{
		type: 'event',
		match: /on\s+(\b\w+)\.+(?=do|return)/ig,
		kind: vscode.SymbolKind.Event,
		decl: 1
	},
	{
		type: 'External file',
		match: /filein\s*\(*(.*)(?=\)|;|\n)/ig,
		kind: vscode.SymbolKind.Package,
		decl: 1
	}
]