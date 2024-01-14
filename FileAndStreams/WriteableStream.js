const fs = require('fs');

const writeStream = fs.createWriteStream('./assets/newFile.txt','utf-8');

// writeStream.write("Hello World");

process.stdin.on("data",(data)=>{
    writeStream.write(data);
});


// Reading from File and  write in new file 
const readStrem= fs.createReadStream('./assets/dummyData.md','utf-8');

// readStrem.on("data",data=>{
//     writeStream.write(data);
// });

//another method
readStrem.pipe(writeStream) 
