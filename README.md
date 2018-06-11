# MaxScript language support

Autodesk 3ds Max Scripting language (MaxScript) support.

## Features

- Syntax highlight.
- Code autocompletion; for keywords, primitives, generic functions, structDefs, interfaces and classes.
- Go to Symbol in document (Basic support, somewhat buggy).
- Go to Definition and peek definition in document.
- Snippets for most used code blocks.
- Customized theme to match MaxScript elements diversity.
- Help command (*MaxScript help. Accessible from the right-click menu.*): Select a keyword and open related online documentation.

![feature X](https://github.com/HAG87/vscode-maxscript/raw/master/images/feature-1.png)

![feature X](https://github.com/HAG87/vscode-maxscript/raw/master/images/feature-2.gif)

## Release Notes

[Changelog](https://github.com/HAG87/vscode-maxscript/blob/master/./CHANGELOG.md)

## Requirements

None.

## Extension Settings

```json
  "maxscript.completions": true | false,
  "maxscript.gotosymbol": true | false,
  "maxscript.gotodefinition": true | false,
```

## Syntax Highlight

Default settings for **Custom highlighting**

```json
  /*
  * Syntax highlight options for language maxscript
  */
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "name": "mxs name values",
        "scope": "punctuation.definition.name",
        "settings": { "foreground": "#c678dd" }
      },
      // Changed: punctuation.definition.verbatim.string.begin.maxscript >> punctuation.definition.string.verbatim.begin.maxscript
      {
        "name": "mxs verbatim string",
        "scope": "punctuation.definition.string.verbatim.begin.maxscript",
        "settings": { "foreground": "#78BEC2" }
      },
      {
        "name": "mxs localized resources - var name",
        "scope": "string.localized.maxscript",
        "settings": { "foreground": "#6b6b6b" }
      },
      {
        "name": "mxs localized resources",
        "scope": "punctuation.definition.localized",
        "settings": { "foreground": "#8f724a" }
      },
      {
        "name": "mxs hex value",
        "scope": "constant.other.hex.maxscript",
        "settings": { "foreground": "#e0ad6b" }
      },
      // Code blocks
      /**
      * Removed: entity.event.type.maxscript
      * Changed:
      * entity.function.modifier.maxscript, entity.struct.type.maxscript entity.function.type.maxscript
      * For: entity.modifier, entity.type
      */
      {
        "name": "mxs meta type",
        "scope": "entity.modifier, entity.type",
        "settings": { "foreground": "#E06B74", "fontStyle": "bold" }
      },
      /**
      * Changed:
      * entity.function.name.maxscript, entity.struct.name.maxscript, entity.utility.name.maxscript
      * For: entity.name
      */
      {
        "name": "msx meta name",
        "scope": "entity.name",
        "settings": { "foreground": "#61AFEF" }
      },
      // Changed: entity.utility.type.maxscript >> entity.type.utility.maxscript
      {
        "name": "mxs utility type",
        "scope": "entity.type.utility.maxscript",
        "settings": { "foreground": "#c678dd", "fontStyle": "bold" }
      },
      {
        "name": "mxs rollout",
        "scope": "support.class.rollout-control.maxscript",
        "settings": { "foreground": "#E06C92" }
      },
      // Calls
            {
        "name": "mxs function call",
        "scope": "variable.parameter.maxscript",
        "settings": { "foreground": "#78BEC2" }
      },
      {
        "name": "mxs property member",
        "scope": "variable.property.maxscript",
        "settings": { "foreground": "#A46CCD" }
      },
      {
        "name": "mxs function parameter",
        "scope": "variable.other.name.maxscript",
        "settings": { "foreground": "#4C9FB2", "fontStyle": "italic" }
      },
      {
        "name": "msx object reference",
        "scope": "variable.reference.maxscript",
        "settings": { "foreground": "#61AFEF" }
      },
      // Changed: entity.event.target.maxscript >> entity.target
      {
        "name": "mxs target",
        "scope": "entity.target",
        "settings": { "foreground": "#E6B52E", "fontStyle": "italic" }
      },
      // Changed: entity.event.argument.maxscript >> entity.argument
      {
        "name": "mxs args",
        "scope": "entity.argument",
        "settings": { "foreground": "#898989" }
      },
      // Changed: entity.event.action.maxscript >> entity.action
      {
        "name": "mxs action",
        "scope": "entity.action",
        "settings": { "foreground": "#7EB33D" }
      },
      // Keywords
      {
        "name": "mxs storage modifier",
        "scope": "storage.modifier.maxscript",
        "settings": { "foreground": "#7A9F4D" }
      },
      {
        "name": "mxs storage primitive",
        "scope": "storage.type.primitive.maxscript",
        "settings": { "foreground": "#477FB0" }
      },
      {
        "name": "mxs keyword operator",
        "scope": "keyword.operator.maxscript, keyword.operator.word.maxscript",
        "settings": { "foreground": "#78BEC2" }
      },
      {
        "name": "mxs definition variable",
        "scope": "punctuation.definition.variable.maxscript",
        "settings": { "foreground": "#E6B52E" },
      },
      {
        "name": "mxs keyword other",
        "scope": "keyword.other.maxscript",
        "settings": { "foreground": "#78C28E" }
      },
      {
        "name": "mxs keyword other - reserved",
        "scope": "keyword.reserved.maxscript",
        "settings": { "foreground": "#E6B52E", "fontStyle": "italic" }
      },
      {
        "name": "mxs byReference keyword",
        "scope": "punctuation.definition.byref.keyword.maxscript",
        "settings": { "foreground": "#7EB33D", "fontStyle": "italic" }
      },
      {
        "name": "mxs constant",
        "scope": "constant.language, variable.language.maxscript",
        "settings": { "foreground": "#528BFF" }
      },
      {
        "name": "mxs constant null",
        "scope": "constant.language.null.maxscript",
        "settings": { "foreground": "#C45968" }
      },
      // Arrays
      {
        "name": "mxs array",
        "scope": "storage.type.array.maxscript, storage.type.bitarray.maxscript",
        "settings": { "foreground": "#E5CB82" }
      },
      {
        "name": "mxs array def",
        "scope": "keyword.definition.array.begin.maxscript",
        "settings": { "foreground": "#676a70" }
      },
      // support
      {
        "name": "mxs support objectset",
        "scope": "support.variable.ObjectSet.maxscript",
        "settings": { "foreground": "#E6B52E" }
      },
      {
        "name": "mxs support interface",
        "scope": "support.type.interface.maxscript",
        "settings": { "foreground": "#759FD1" }
      },
      {
        "name": "mxs support structDef",
        "scope": "support.type.StructDef.maxscript",
        "settings": { "foreground": "#59A7C8" }
      },
      {
        "name": "mxs support class",
        "scope": "support.class",
        "settings": { "foreground": "#A875D1" }
      },
      {
        "name": "mxs support primitive",
        "scope": " support.other.primitive.maxscript",
        "settings": { "foreground": "#61AFEF" }
      },
      {
        "name": "mxs support other",
        "scope": "support.constant, support.type, support.variable",
        "settings": { "foreground": "#CDA06C" }
      }
    ]
  },
```

## Executing MaxScript

MXSPyCOM project allow for editing & execution of 3ds Max MaxScript and Python files from external code editors.

- Get it here: [MXSPyCOM by Jeff Hannna](https://github.com/JeffHanna/MXSPyCOM)
- Follow the configuration guide to register the COM server.
- Set up a vscode task:

```json
{
    "version": "2.0.0",
    "tasks": [
      {
        "label": "MXSPyCOM execute Script",
        "type": "process",
        // Add MXSPyCOM.exe to PATH or use file root, i.e: "C:/MXSPyCOM/MXSPyCOM.exe"
        "command":"MXSPyCOM.exe",
        "args": [
            "-f",
            { "value": "${file}", "quoting": "strong" }
        ],
        "group": "test",
        "presentation": {
            "echo": true,
            "reveal": "silent",
            "focus": false,
            "panel": "shared"
        }
    }
  ]
}
```

- run the task, enjoy the 3ds max listener catching errors.

## Contribute

[gitHub](https://github.com/HAG87/vscode-maxscript)

>Note: MaxScript Structure is to say at least, chaotic. I've done my best to organize structs, classes, interfaces and so on. However the grammar is usable enough.