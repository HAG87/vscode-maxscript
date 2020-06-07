import * as nearley from 'nearley';
declare module 'nearley' {
	interface Parser {
		table: any[];
		buildFirstStateStack(state:any, visited:any): any;
	}
}