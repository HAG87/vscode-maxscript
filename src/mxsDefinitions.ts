/**
 * Adaptation from https://github.com/usakhelo/VSC_Maxscript
 */
import * as vscode from 'vscode';

export default class MaxscriptDefinitionProvider implements vscode.DefinitionProvider {

    private _getDocumentDefinitionMatch(document:vscode.TextDocument, word:string): vscode.Location | undefined {
            let pos = document.getText().indexOf(word);
            if (pos > -1) {
                return (new vscode.Location(document.uri, document.positionAt(pos)));
            } else {
                return undefined;
            }
    }
    /*
    * should consider current scope somehow...needs lexer/parser. Best implementation should be to use a language server and keep the document tokenized.
    * Direct implementation: find definition in the array of document symbols (how?) executeDocumentSymbolProvider seems inneficient
    * We could just do a regex search for the keyword, since maxscript has an ordered flow and we dont be looking for workspace symbols...
    */
    private _getDocumentDefinitions(document:vscode.TextDocument, position:vscode.Position):Promise<vscode.Definition> {

        // get current word at position
        let word = document.getText(document.getWordRangeAtPosition(position));
        // skip single line comments.. block comments should take in account word context
        let lineText = document.lineAt(position.line).text;
        let lineTillCurrentPosition = lineText.substr(0, position.character);

        //let symbolInf = await vscode.commands.executeCommand<vscode.SymbolInformation[]>('vscode.executeDocumentSymbolProvider', document.uri)

        return new Promise((resolve,reject) => {

            if (lineTillCurrentPosition.includes('--')) { reject(null);}

            // workaround force the SymbolProvider to be executed. It must be another way to get the symbols.... maybe store them in a variable?
            let symbolInf = vscode.commands.executeCommand<vscode.SymbolInformation[]>('vscode.executeDocumentSymbolProvider', document.uri)
            .then(
                (symbols) => {
                    // check if there is any symbol that matches that word
                    let findSymbol = symbols?.find(item => item.name === word);
                    if (findSymbol) {
                        // symbol found: return the location
                        resolve(findSymbol.location);
                    } else {
                        // fallback: first occurence of the word
                        let fallback = this._getDocumentDefinitionMatch(document, word);
                        if (fallback) {resolve (fallback);} else {reject();}
                    }

                },
                () => {
                    // fallback onrejected
                    let fallback = this._getDocumentDefinitionMatch(document, word);
                    if (fallback) {resolve (fallback);} else {reject(null);}
                }
            )
        });
    }
    public provideDefinition(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.Definition> {
        return (this._getDocumentDefinitions(document, position));
        // return new Promise((resolve, reject) => {
            // if ((mxsConfig.get('gotodefinition',true) && mxsConfig.get('gotosymbol',true)) === true) {reject('MaxScript Go to Definition disabled');}
            // resolve (this._getDocumentDefinitions(document, position));
        // });
    }
}