// Create a child Process with exec.
// Child Process module which allow to execute external process in your env.I is a Synchronise


const cp = require('child_process');
 
cp.exec(`open -a "Google Chrome" http://goolge.com`);
cp.exec('open -a cmd');

// Execute ls command in this file
cp.exec("ls",(err,data)=>{
    if(err)
    throw err;
    console.log(data);
});
cp.exec("lst",(err,data,stderr)=>{
    console.log(stderr);
});

// run ReadableStream from this file
cp.exec('node ReadableStream', (err,data,stderr)=>{
    console.log(data);
})