
import * as vscode from 'vscode';
// dinamic change of color for each decoration -> HOW ?????
// create a decorator type that we use to decorate small numbers
const colorDecorationType = (color):vscode.TextEditorDecorationType =>{

    let theDecour = vscode.window.createTextEditorDecorationType({
        borderWidth: '0 0 5px 0',
        borderStyle: 'solid',
        borderColor: color,
        overviewRulerColor: 'blue',
        overviewRulerLane: vscode.OverviewRulerLane.Right,
/*
        light: {
            // this color will be used in light color themes
            borderColor: 'darkblue'
        },
        dark: {
            // this color will be used in dark color themes
            borderColor: 'lightblue'
        }
*/
    });
    return theDecour;
}

function getColor (color:string) {
    let regEx = /^(?:color)\s*(\d+)\s+(\d+)\s+(\d+)\s+(\d+)?$/;
    let col_pattern = 'rgba($1,$2,$3,$4)';
    let match;
   
    if (match = regEx.exec(color)){
        col_pattern = col_pattern.replace('$1', match[1]);
        col_pattern = col_pattern.replace('$2', match[2]);
        col_pattern = col_pattern.replace('$3', match[3]);
        if (!(match[4])) {
            col_pattern = col_pattern.replace('$4', '1.0');
        } else {
            col_pattern = col_pattern.replace('$4', match[4]);
        }
        return col_pattern;        
    } else {
        return color;
    }   
}
// this method is called when vs code is activated
export default function mxsDecorator(context: vscode.ExtensionContext) {

	let activeEditor = vscode.window.activeTextEditor;
	if (activeEditor) {
		triggerUpdateDecorations();
	}

	vscode.window.onDidChangeActiveTextEditor(editor => {
		activeEditor = editor;
		if (editor) {
			triggerUpdateDecorations();
		}
	}, null, context.subscriptions);

	vscode.workspace.onDidChangeTextDocument(event => {
		if (activeEditor && event.document === activeEditor.document) {
			triggerUpdateDecorations();
		}
	}, null, context.subscriptions);

	var timeout = null;
	function triggerUpdateDecorations() {
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(updateDecorations, 500);
	}

	function updateDecorations() {
		if (!activeEditor) {
			return;
		}
        const regEx = /(\b(red|green|blue|white|black|orange|yellow|brown|gray)\b|(color\s*(\d+\s+){3}?(\d+)?))+/g;
		const text = activeEditor.document.getText();
		const colorDecoration: vscode.DecorationOptions[] = [];
		let match;
		while (match = regEx.exec(text)) {
			const startPos = activeEditor.document.positionAt(match.index);
			const endPos = activeEditor.document.positionAt(match.index + match[0].length);
			const decoration = { range: new vscode.Range(startPos, endPos), hoverMessage: 'Color **' + match[0] + '**' };
			if (match[0].length >= 3) {
                console.log(getColor(match[0]));
				colorDecoration.push(decoration);
			}
		}
		activeEditor.setDecorations(colorDecorationType('red'), colorDecoration);
	}
}