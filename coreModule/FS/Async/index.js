const { log } = require('console');
const fs = require('fs');

//To Create a file and write into it. It overwrite the existent text.  
fs.writeFile('read.txt','Hello, My name is Dilber Husain Khan. ',(err)=>{
    console.log('File Created');
    console.log(err);
})

fs.appendFile('read.txt','I am learning Node Js',(err)=>{
    console.log('File Updated');
})

fs.readFile('read.txt','UTF-8',(err,data)=>{
    console.log(data);
    console.log(`ERROR:- ${err}`);
})
