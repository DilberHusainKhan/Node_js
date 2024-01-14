const fs = require('fs');
const colorData = require('./dir1/colors.json');

colorData.colorList.forEach(c=>{
    fs.appendFile('./src/newFile.txt',`${c.color} : ${c.hex} \n`,err=>{
        if(err) throw err;
    });
});