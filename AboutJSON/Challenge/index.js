// 1: Convert Obj to JSON 
// 2: add JSON to a new file
// 3: read the File
// 4:Convert the file content to Obj
// 5: Display to Console.

const fs = require('fs');

const Data  ={
    name:"Humayun Anwar Khan",
    age:24,
    education: "B Tech",
    add: "Okhla New Delhi"
}

const jsonData = JSON.stringify(Data);
console.log(jsonData);


fs.writeFile('./Bio.json',jsonData,(err)=>{
        console.log(err);
})
fs.readFile('./Bio.json','UTF-8',(err,data)=>{
    const ObjData = JSON.parse(data);
    console.log(ObjData);
})

