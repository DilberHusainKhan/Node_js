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

// Filter 
// find even
const FltrOutput = arr.filter(x=>x%2===0);
console.log(FltrOutput);

// find greater than 3
console.log(arr.filter(x=>x>3));


// reduse
// In  non functional way
function findSum(arr){
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum = sum + arr[index];
    }
    return sum;
}
console.log(findSum(arr));

// In a functional way
const findSum1 = arr.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
},0)
console.log(findSum1);

// Find Max
function findMax(arr){
    let max = arr[0];
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));
// functional way
const findMax1 = arr.reduce(function(acc,curr){
    if(acc<curr){
        acc = curr;
    }
    return acc;
},0)
console.log(findMax1);

// List the full Name of person of a given obj 
const person=[
    {firstName: "Dilber", lastName : "Khan",age : 24},
    {firstName: "Humayun", lastName : "Aanwar",age : 25},
    {firstName: "Aadil", lastName : "Rana",age : 24},
]
const fullName = person.map(x=>x.firstName+" "+x.lastName);
console.log(fullName); 