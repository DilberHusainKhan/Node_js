const fs = require('fs');
if(fs.existsSync("dir1")){
    console.log("directory is already exist");
}else{
    fs.mkdir("dir1",err=>{
        if(err) throw err;
        console.log("Directory created sucessfully");
    })
}