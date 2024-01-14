const fs = require('fs');
 const readStream = fs.createReadStream('./assets/dummyData.md','utf-8');

 let filetxt = 0;
 console.log("Trping Somting...");
 readStream.on("data",data=>{
    console.log(`I read ${data.length-1} character of text`);
    filetxt +=(data.length-1);
 });

// readStream.once("data",data=>{
//     console.log(data);
// })

readStream.on("end",()=>{
    console.log(`Finish reading`);
    console.log(`Total count is ${filetxt} character`);
})