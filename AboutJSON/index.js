const bioData = {
    name:"Dilber Husain Khan",
    age: 25,
    channel :"Humayun Anwar Khan",
};

console.log(bioData.channel);
// conver Obj to JSON
const jsonData  = JSON.stringify(bioData);
console.log(jsonData);
// console.log(jsonData.channel);  --> undefine
// JSON to Obj
const objData = JSON.parse(jsonData);
console.log(objData);
console.log(objData.channel);