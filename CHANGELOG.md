# Change Log

All notable changes to the "language-maxscript" extension will be documented in this file.

## [1.7.2] - 2017 -12-05

- Event syntax highlight fix
- Minor fixes

## [1.4.0] - 2017-08-15

- Code highlight improvements
- Dropped custom Theme, for vscode 1.15.0 and up, please use the new *Custom syntax highlighting* setting.

```json
  /*
  * Syntax highlight options for language maxscript
  */
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "name": "mxs comment",
        "scope": "comment.line.double-dash.maxscript, comment.block.maxscript",
        "settings": {
          "foreground": "#616161"
        }
      },
      {
        "name": "mxs meta type",
        "scope": "entity.function.modifier.maxscript, entity.struct.type.maxscript, entity.function.type.maxscript",
        "settings": {
          "foreground": "#E06B74",
          "fontStyle": "bold"
        }
      },
      {
        "name": "msx meta name",
        "scope": "entity.function.name.maxscript, entity.struct.name.maxscript, entity.utility.name.maxscript",
        "settings": {
          "foreground": "#61AFEF"
        }
      },
      {
        "name": "mxs utility type",
        "scope": "entity.utility.type.maxscript",
        "settings": {
          "foreground": "#c678dd",
          "fontStyle": "bold"
        }
      },
      {
        "name": "mxs function call",
        "scope": "variable.parameter.maxscript",
        "settings": {
          "foreground": "#78BEC2"
        }
      },
      {
        "name": "mxs property member",
        "scope": "variable.property.maxscript",
        "settings": {
          "foreground": "#A46CCD"
        }
      },
      {
        "name": "mxs function parameter",
        "scope": "variable.other.name.maxscript",
        "settings": {
          "foreground": "#4C9FB2",
          "fontStyle": "italic"
        }
      },
      {
        "name": "mxs event declaration",
        "scope": "entity.event.type.maxscript",
        "settings": {
          "foreground": "#E06C75"
        }
      },
      {
        "name": "mxs event target",
        "scope": "entity.event.target.maxscript",
        "settings": {
          "foreground": "#E6B52E",
          "fontStyle": "italic"
        }
      },
      {
        "name": "mxs event args",
        "scope": "entity.event.argument.maxscript",
        "settings": {
          "foreground": "#898989"
        }
      },
      {
        "name": "mxs event action",
        "scope": "entity.event.action.maxscript",
        "settings": {
          "foreground": "#7EB33D"
        }
      },
      {
        "name": "mxs storage modifier",
        "scope": "storage.modifier.maxscript",
        "settings": {
          "foreground": "#7A9F4D"
        }
      },
      {
        "name": "mxs storage primitive",
        "scope": "storage.type.primitive.maxscript",
        "settings": {
          "foreground": "#477FB0"
        }
      },
      {
        "name": "mxs keyword operator",
        "scope": "keyword.operator.maxscript, keyword.operator.word.maxscript",
        "settings": {
          "foreground": "#78BEC2"
        }
      },
      {
        "name": "mxs keyword other",
        "scope": "keyword.other.maxscript",
        "settings": {
          "foreground": "#78C28E"
        }
      },
      {
        "name": "mxs keyword other",
        "scope": "keyword.reserved.maxscript",
        "settings": {
          "foreground": "#E6B52E",
          "fontStyle": "italic"
        }
      },
      {
        "name": "mxs byReference keyword",
        "scope": "punctuation.definition.byref.keyword.maxscript",
        "settings": {
          "foreground": "#7EB33D",
          "fontStyle": "italic"
        }
      },
      {
        "name": "mxs constant",
        "scope": "constant.language, variable.language.maxscript",
        "settings": {
          "foreground": "#528BFF"
        }
      },
      {
        "name": "mxs constant null",
        "scope": "constant.language.null.maxscript",
        "settings": {
          "foreground": "#C45968"
        }
      },
      {
        "name": "mxs array",
        "scope": "storage.type.array.maxscript, storage.type.bitarray.maxscript",
        "settings": {
          "foreground": "#E5CB82"
        }
      },
      {
        "name": "mxs array def",
        "scope": "keyword.definition.array.begin.maxscript",
        "settings": {
          "foreground": "#676a70"
        }
      },
      // support
      {
        "name": "mxs support objectset",
        "scope": "support.variable.ObjectSet.maxscript",
        "settings": {
          "foreground": "#E6B52E"
        }
      },
      {
        "name": "mxs support interface",
        "scope": "support.type.interface.maxscript",
        "settings": {
          "foreground": "#759FD1"
        }
      },
      {
        "name": "mxs support structDef",
        "scope": "support.type.StructDef.maxscript",
        "settings": {
          "foreground": "#59A7C8"
        }
      },
      {
        "name": "mxs support class",
        "scope": "support.class.maxscript, support.class.MAXSuperClass.maxscript,support.class.primitive.maxscript",
        "settings": {
          "foreground": "#A875D1"
        }
      },
      {
        "name": "mxs support primitive",
        "scope": " support.other.primitive.maxscript",
        "settings": {
          "foreground": "#61AFEF"
        }
      },
      {
        "name": "mxs support other",
        "scope": "support.constant.maxscript,support.type.generic.maxscript, support.variable.system.maxscript",
        "settings": {
          "foreground": "#CDA06C"
        }
      },
      {
        "name": "mxs rollout",
        "scope": "support.class.rollout-control.maxscript",
        "settings": {
          "foreground": "#E06C92"
        }
      },
      {
        "name": "msx definition variable",
        "scope": "punctuation.definition.variable.maxscript",
        "settings": {
          "foreground": "#E6B52E"
        }
      }
    ]
  },
```

## [1.2.0] - 2017-05-23

- Grammar and autocompletion fixes.

## [1.0.0] - 2017-05-20

### Initial release

- Grammar support.
- Autocompletion suggestions.
- Help command.
- Adapted OneDark theme to support syntax coloring of MaxScript elements.