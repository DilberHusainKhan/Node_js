const fs = require('fs');
fs.renameSync("./dir1/colors.json","./dir1/colors.json");

fs.rename("./src/newFile.txt","./dir1/MovedFile.txt",(err)=>{
    if (err) {
        throw err;
    }
});
setTimeout(()=>{
    fs.unlinkSync("./dir1/MovedFile.txt");
},4000);