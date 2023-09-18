const arr = [5,4,2,1,3];

// double the value 
// old
const double  = function(x){
    return x*2;
}
const output1 = arr.map(double);
console.log(output1);
// new 
const output = arr.map((x)=>x*2);
console.log(output);

// Triplet 
const tri = arr.map(x=>x*3);
console.log(tri);


function triplet(x){
    return x*3;
}
const triOu = arr.map(triplet);
console.log(triOu);

// binary of number
const Binary =  arr.map(x=> x.toString(2));
console.log(Binary);