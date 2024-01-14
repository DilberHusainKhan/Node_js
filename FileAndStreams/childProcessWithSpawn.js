const cp = require('child_process');
const questionApp = cp.spawn('node',['question.js']);


questionApp.stdin.write("DIlber\n");
questionApp.stdin.write("Kaimganj\n");
questionApp.stdin.write("Java\n");

questionApp.stdout.on("data",data=>{
    console.log('Spawn file');
    log(`${data}`);
});

questionApp.on("close",()=>{
    console.log("question App process exited");
})