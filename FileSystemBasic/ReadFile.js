const fs = require('fs');
// const data = fs.readFileSync("./src/dataFile.txt");
// console.log(data.toString());

fs.readFile("./src/datafile.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
})