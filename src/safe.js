
var safe = require('safe-regex');
// var regex = process.argv.slice(2).join(' ');
// var regex = /(?:[\r\n]|[\\]\s*[\r\n])+/;
var regex = /[0-9]+[:][0-9]+[.][0-9]*/;
console.log(safe(regex));