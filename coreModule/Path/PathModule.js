// The node:path module provides utilities for working with file and directory paths. 
const path = require('path');

// To print dirname
console.log(path.dirname('D:/git/Node Js/coreModule/Path/PathModule.js'));

// To print extname
console.log(path.extname('D:/git/Node Js/coreModule/Path/PathModule.js'));

// To print basename
console.log(path.basename('D:/git/Node Js/coreModule/Path/PathModule.js'));

// To print root, extension, filename use parse
const pathDetail = path.parse('D:/git/Node Js/coreModule/Path/PathModule.js');
console.log(pathDetail);
console.log(pathDetail.name);
console.log(pathDetail.root);
