const {EventEmitter} =require('events');
const readLine = require('readline');

const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});

const collectAnswer = (questions,done = f=>f)=>{
    const answers = [];
    const [firstQuestion] = questions;
    const emitter = new EventEmitter();


    const questionAnswer = answer =>{
        emitter.emit('answer',answer);
        answers.push(answer);
        if(answers.length<questions.length){
            rl.question(questions[answers.length],questionAnswer);
        }else{
            emitter.emit('complete',answers);
            done(answer);
        }
    }
    rl.question(firstQuestion,questionAnswer);
    return emitter;
}
module.exports = collectAnswer;