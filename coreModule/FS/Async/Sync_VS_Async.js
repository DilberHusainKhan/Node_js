const { log } = require('console');
const fs = require('fs');

const data = fs.readFileSync('read.txt','UTF-8');
console.log(data);
console.log("Sync");

fs.readFile('read.txt','UTF-8',(err,data)=>{
    console.log(data);
});
console.log('Async');