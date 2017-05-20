import * as vscode from 'vscode';
import * as mxsSchema from './schema/mxsSchema';
import { isPositionInString } from './utils';
/**
 * find word before dot
 * @param line 
 */
export function precWord(line:string)
{
	let pattern = /(\w+)\.$/g;
	let wordmatches = pattern.exec(line);
    if (!wordmatches) {return;} else {return (wordmatches[wordmatches.length-1]);}
}
/*
interface mxsSuggestion {
    kind: string;
    name: string
}
*/
/** 
 * common built-in functions and methods... const -> "precached" ??
 */
export const maxcompletionGeneralItems = ((mxsSchema):vscode.CompletionItem[] => {
    let generalCompletionItems = new Array<vscode.CompletionItem>();
    mxsSchema.maxcompletionGeneral.forEach((type) =>{
        let completionItems = type.api.map((item)=>{
            let completionItem = new vscode.CompletionItem(item.name);
            completionItem.kind = type.kind;
            if (item.hasOwnProperty('desc')) {completionItem.detail = item.desc;} else {completionItem.detail = type.desc;}            
            return completionItem;
        })
        generalCompletionItems = generalCompletionItems.concat(completionItems);
    });
    return generalCompletionItems;
});
/**
 * support classes structs interfaces...const -> "precached" ??
 */
export const maxcompletionComponentItems = ((mxsSchema):vscode.CompletionItem[] => {
    let toplevel = mxsSchema.maxcompletion;
    let theComponents = Object.getOwnPropertyNames(toplevel);
    let completionItemList = new Array<vscode.CompletionItem>();
    theComponents.forEach(elem =>{
       let curr_elem = toplevel[elem]; 
       let kind = curr_elem.kind;
       let completionItems = curr_elem.api.map(id => {
           let completionItem = new vscode.CompletionItem(id.name);
           completionItem.kind = kind;
           return completionItem;
       });
       completionItemList = completionItemList.concat(completionItems);
    });
    return completionItemList;
});
/**
 * component members...
 * @param mxsSchema 
 * @param currentWord 
 */
export function componentSchema(mxsSchema, currentWord:string):vscode.CompletionItem[]{
    let toplevel = mxsSchema.maxcompletion;
    let theComponents = Object.getOwnPropertyNames(toplevel);
    let CompletionItems = new Array<vscode.CompletionItem>();
    theComponents.forEach(elem =>{
        let curr_elem = toplevel[elem];
        let isElem = curr_elem.api.find(item => item.name === currentWord);
        if (isElem){
            let elem_props = Object.getOwnPropertyNames(isElem);
            elem_props.forEach(prop => {
                if (prop !== 'name') {
                    let kind = isElem[prop].kind;
                    let theSubElems = isElem[prop].names.map((item) =>{
                        let completionItem = new vscode.CompletionItem('');
                        if (item.hasOwnProperty('name')) {
                            if (item.name == '') return;
                            completionItem.label = item.name;
                            completionItem.detail = item.desc;
                        } else {
                            if (item == '') return;
                            completionItem.label = item;
                        }
                        completionItem.kind = kind;
                        return completionItem;
                    });
                    if(theSubElems != []) {
                        CompletionItems = CompletionItems.concat(theSubElems);
                    }
                }
            });
        }
    })
    return CompletionItems;
}
/**
 * ItemProvider class
 */
class mxsCompletion implements vscode.CompletionItemProvider
{
    public provideCompletionItems(document:vscode.TextDocument, position:vscode.Position, token:vscode.CancellationToken):vscode.CompletionItem[] {
        return this.provideCompletionItemsInternal(document, position, token);
    }

    public provideCompletionItemsInternal(document:vscode.TextDocument, position:vscode.Position, token:vscode.CancellationToken):vscode.CompletionItem[] {
        // current line
        let filename = document.fileName;
        let lineText = document.lineAt(position.line).text;
        let lineTillCurrentPosition = lineText.substr(0, position.character);
        // escape strings
        let inString = isPositionInString(document, position);
        if (!inString && lineTillCurrentPosition.endsWith('\"')) {
            return [];
        }
        // get current word
        let wordAtPosition = document.getWordRangeAtPosition(position);
        let currentWord = '';
        if (wordAtPosition && wordAtPosition.start.character < position.character) {
            let word = document.getText(wordAtPosition);
            currentWord = word.substr(0, position.character - wordAtPosition.start.character);
        }
        // escape numbers
        if (currentWord.match(/^\d+$/)) {
            return [];
        }
        // test if currPos is after dot
        let dotPattern = /\w+[.]\w*?$/;
        let notDotPattern = /[^.]\w+$/;
        let dotTest = dotPattern.test(lineTillCurrentPosition); 
        let notDotTest = notDotPattern.test(lineTillCurrentPosition);
        let components = new Array<vscode.CompletionItem>(),
            general    = new Array<vscode.CompletionItem>(),
            properties = new Array<vscode.CompletionItem>();
            //values     = new Array<vscode.CompletionItem>(),

        if (!dotTest) {
            if (notDotTest) {
                // componets : struct | class | interface
                components = maxcompletionComponentItems(mxsSchema);
                // generics ???? prmitives??? et.....
                general = maxcompletionGeneralItems(mxsSchema);
            }
        } else {
            // properties | methods | members
            let pre = precWord(lineTillCurrentPosition);
            properties = componentSchema(mxsSchema, pre);
            // non inherited interfaces ?? 
        }
        // combined completions
        let completions = [].concat(
            general,
            components,
            properties
        );
        //console.log(completions);
        // retun completions
        return completions;
    }
}
export default mxsCompletion;