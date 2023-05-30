const { log } = require('console');
const fs = require('fs');

// Challenge of CURD 
// 1: Create a folder name Dilber
// 2: Create  a file in it name bio.txt  and  data into it.
// 3: Add more data into the  file at the end of the existence data.
// 4: Read the data  without getting the buffer data at first. Hint:- Use file Encoding
// 5: Rename the file name to Mybio.txt
// 6:Now, delete the both the file and folder.

//1:
fs.mkdir('Dilber',(err)=>{
    console.log("Folder Created")
})

//2:
const input_data = 'My name is Dilber Husain Khan. I am 24 year old and I am a Computer Engineer'
fs.writeFile('./Dilber/bio.txt',input_data,(err)=>{
    console.log("Write into the file");
})
//3:
const update_data = 'I have also done Diploma in Computer Engineering from Jamia Millia Islamia';
fs.appendFile('./Dilber/bio.txt',update_data,(err)=>{
    console.log("Data is  Updated");
})

//4:
fs.readFile('./Dilber/bio.txt','UTF-8',(err,data)=>{
    console.log(data);
})

//5:
fs.rename('./Dilber/bio.txt','./Dilber/MyBio.txt',(err)=>{
    console.log("rename done");
})

//6:
setTimeout(del,4000)
function del(){
    fs.unlink('./Dilber/Mybio.txt',(err)=>{
        console.log("File delete sucessfull");
    })
    fs.rmdir('./Dilber',(err)=>{
        console.log(err);
        console.log("Folder deleted.");
    })
} 