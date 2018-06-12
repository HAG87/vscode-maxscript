/**
 * Adaptation from https://github.com/usakhelo/VSC_Maxscript
 */
import * as vscode from 'vscode';

export default class MaxscriptDefinitionProvider implements vscode.DefinitionProvider {
    private getDocumentDefinitionMatch(document:vscode.TextDocument, word:string):Thenable<vscode.Definition> {
        return new Promise((resolve, reject) => {
            let docTxt = document.getText();
            let pos = docTxt.indexOf(word);
            if (pos > -1) {
                let loc = new vscode.Location(document.uri, document.positionAt(pos));
                resolve (loc);
            } else { reject(null); }
        });
    }
    private getDocumentDefinitions(document:vscode.TextDocument, position:vscode.Position):Thenable<vscode.Definition> {
        return new Promise((resolve,reject) => {
            // get current word
            let wordRange = document.getWordRangeAtPosition(position);
            let word = document.getText(wordRange);
            // skip single line comments.. block comments should take in account word context
            let lineText = document.lineAt(position.line).text;
            let lineTillCurrentPosition = lineText.substr(0, position.character);
            if (lineTillCurrentPosition.includes('--')) { reject(null);}
            /*
            * should consider current scope somehow...needs lexer/parser. Best implementation should be tou use a language server and keep the document tokenized.
            * Direct implementation: find definition in the array of document symbols (how?) executeDocumentSymbolProvider seems inneficient
            * We could just do a regex search for the keyword, since maxscript has an ordered flow and we dont be looking for workspace symbols...
            */
            let result = vscode.commands.executeCommand('vscode.executeDocumentSymbolProvider', document.uri);
            result.then((symbols:Array<vscode.SymbolInformation>) =>
                {
                    let findSymbol = symbols.find(item => item.name === word)
                    if (findSymbol) {
                        resolve(findSymbol.location);
                    } else {
                        // fallback to regex match...
                        // The drawback is that, it doesn't take in account scope or keywords
                        (this.getDocumentDefinitionMatch(document, word)).then((loc:vscode.Definition) => {
                            resolve (loc);
                        }, (reason) => {reject (reason);});
                    }
                }, () => {
                    // fallback to regex match...
                    (this.getDocumentDefinitionMatch(document, word)).then((loc:vscode.Definition) => {
                        resolve (loc);
                    }, (reason) => {reject (reason);});
                }
            );
        });
    }
    public provideDefinition(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Thenable<vscode.Definition> {
        // let mxsConfig = (vscode.workspace.getConfiguration('maxscript'));

        return new Promise((resolve, reject) => {
            // if ((mxsConfig.get('gotodefinition',true) && mxsConfig.get('gotosymbol',true)) === true) {reject('MaxScript Go to Definition disabled');}
            resolve (this.getDocumentDefinitions(document, position));
        });
    }
}