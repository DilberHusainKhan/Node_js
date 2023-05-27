const fs = require('fs');

//To Create a file and write into it. It overwrite the existent text.  
fs.writeFileSync('FirstFile.txt','Hello, This is only first command');

//To add the data in a existent file 
fs.appendFileSync('FirstFile.txt','\nAdded data ');

//To reade the file. And print on console or in second file.
const buffer_data = fs.readFileSync('FirstFile.txt');
console.log(buffer_data);   //Buffer data , now we have to conver it to string
const orig_data = buffer_data.toString();
console.log(orig_data);

// Now write this into seccond file
fs.writeFileSync('SecondFile.txt',orig_data);