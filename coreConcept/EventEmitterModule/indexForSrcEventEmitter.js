const collectAnswer = require('./src/EventEmitter');

const questions = [
    "What is your name?",
    "Where are you from?",
    "Which programming language you love  most?"
];

const answerEvent = collectAnswer(questions);
answerEvent.on("answer",answer=>{
    console.log(`Bot: ${answer}`);
})

answerEvent.on('complete',answers=>{
    console.log(`THank you  for your answer`);
    console.log(answers);
});

answerEvent.on('complete',()=>process.exit());