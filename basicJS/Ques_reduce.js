const person=[
    {firstName: "Dilber", lastName : "Khan",age : 24},
    {firstName: "Humayun", lastName : "Aanwar",age : 25},
    {firstName: "Aadil", lastName : "Rana",age : 24},
]

// Print how many people are of particular age
// {24:2,25:1}
const output = person.reduce((acc,curr)=>{
    if(acc[curr.age]){
        acc[curr.age]++;
    }else{
        acc[curr.age]=1;
    }
    return acc;
},{}) 
console.log(output);