const process = require('process');
const question = [
  "what is you name?",
  "Which language you prefere?",
  "What is you Highest education?"
]


const ask = (i=0)=> {
  process.stdout.write(`|---------Welcome----------|\n ${question[i]}\n`);
}

ask()
// Answer
const ans = [];
process.stdin.on('data',data=>{
  ans.push(data.toString().trim());
  if(ans.length<question.length){
    ask(ans.length)
  }else{
    process.stdout.write(`\n-------------All done-----------`);
    process.exit()
  }
});
process.on('exit',()=>{
  const [name,lang,edu] = ans;
  console.log(`\nHi ${name}, Your preffred  language is ${lang} and your higher education is ${edu}`);
  console.log("------------------Thank You------------------");
})



// process.stdout.write("Hello");
