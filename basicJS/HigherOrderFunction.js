// Write a  program to print area circumfrence and diameter of circle in HOF
const radius = [3,1,2,4];
// Area
const area =  function(radius){
    return Math.PI*radius*radius;
}

// Circumference
const circumference = function(radius){
    return 2*Math.PI*radius;
}

// Diameter
const diameter = function(radius){
    return 2*radius;
}
// Main calculate 
const calculate = function(radius,logic){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius,diameter));
console.log(calculate(radius,circumference));
console.log(calculate(radius,area));
console.log(radius.map(area));
// How to change our calculate function as map 
Array.prototype.calculate1 = function(logic){
    const output = [];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
}
console.log(radius.calculate1(area));
