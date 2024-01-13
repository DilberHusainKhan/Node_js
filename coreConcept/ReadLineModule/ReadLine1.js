const readline = require('readline');
const process = require('process') 



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is you name?",answer=>{
    console.log(`Your answer is ${answer}`);
})