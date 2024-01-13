const fs = require('fs');
const data = `
My name is Humayun anwar khan. kkk
`

fs.writeFile("./src/newFile.txt",data.trim(),(err)=>{
    if(err) throw err;
    console.log("File generated sucessfully");
})

