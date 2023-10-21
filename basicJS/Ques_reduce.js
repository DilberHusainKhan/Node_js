const person=[
    {firstName: "Dilber", lastName : "Khan",age : 24},
    {firstName: "Humayun", lastName : "Aanwar",age : 25},
    {firstName: "KKK", lastName : "Aanwar",age : 35},
    {firstName: "AAAA", lastName : "Aanwar",age : 45},
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
// Print the first name of persion whose age is less than 30
const output1 = person.filter(x=> x.age<30).map(x=>x.firstName)
console.log(output1);

const outputReduce = person.reduce((acc,curr)=>{
    if(curr.age<30){
        acc.push(curr.firstName)
    }
    return acc;
},[])
console.log(outputReduce);
