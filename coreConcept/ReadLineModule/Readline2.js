const readline = require('readline');
const process = require('process');

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

const questions = [
    "What is your name?",
    "Where are you from?",
    "Which programming language you love  most?"
];




const answers=[];

const collectAnswer = (question,done=f=>f)=>{
    const [firstquestion] = questions;
    const questionAnswer= answer=>{
        answers.push(answer);
        if(answers.length<questions.length){
            rl.question(questions[answers.length],questionAnswer);
        }else{
            done(answer);
        }
    };
    rl.question(firstquestion,questionAnswer);
}

collectAnswer(questions,ans=>{
    console.log(`Thank you`);
    console.log(`You answer are ${answers}`);
    process.exit();
})

