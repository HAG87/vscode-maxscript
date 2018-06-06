/**
 * Adaptation from https://github.com/usakhelo/VSC_Maxscript
 */
import * as vscode from 'vscode';

export default class MaxscriptDefinitionProvider implements vscode.DefinitionProvider {
    public provideDefinition(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Thenable<vscode.Definition> {
        return new Promise<vscode.Definition>((resolve, reject) => {
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
                    if (findSymbol) resolve(findSymbol.location); else reject(null);
                }, (reason) => { reject(reason);}
            );
        });
    }
}