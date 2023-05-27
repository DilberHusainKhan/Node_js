// Challenge of CURD 
// 1: Create a folder name Dilber
// 2: Create  a file in it name bio.txt  and  data into it.
// 3: Add more data into the  file at the end of the existence data.
// 4: Read the data  without getting the buffer data at first. Hint:- Use file Encoding
// 5: Rename the file name to Mybio.txt
// 6:Now, delete the both the file and folder.

const fs  = require('fs');
// 1: Create a folder name Dilber
fs.mkdirSync('Dilber');

// 2: Create  a file in it name bio.txt  and  data into it.
const intro = "My name is Dilber Husain Khan, I am 24 year old. Curently  I am learning Node js. ";
fs.writeFileSync('./Dilber/Bio.txt',intro);

// 3: Add more data into the  file at the end of the existence data.
const adddata = "I have done B.Tech in Computer Enginnering in 2022.";
fs.appendFileSync('./Dilber/Bio.txt',adddata);

// 4: Read the data  without getting the buffer data at first. Hint:- Use file Encoding
const orig_data = fs.readFileSync('./Dilber/Bio.txt','utf8');
console.log(orig_data);
fs.writeFileSync('MyBio_sec.txt',orig_data);

// 5: Rename the file name to Mybio.txt
fs.renameSync('./Dilber/Bio.txt','./Dilber/MyBio.txt');

// 6:Now, delete the both the file and folder.
setTimeout(del,4000);
function del(){
    fs.rmSync('./Dilber/MyBio.txt'); //Remove File.
    fs.rmdirSync('Dilber') //Delete
}