
// path module
const path =require('path');
const dirUpld = path.join(__dirname,'www','index','Upload');
console.log(dirUpld);


// Util module
const util = require('util');
util.log(__filename);


// V8 module
const v8 = require('v8');
util.log(v8.getHeapCodeStatistics());