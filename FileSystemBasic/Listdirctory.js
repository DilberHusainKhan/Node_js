const fs = require('fs');
// sync
fs.readdirSync

// async
fs.readdir("./../",(err, file)=>{
    if(err) throw err;
    console.log('complete');
    console.log(file);
})