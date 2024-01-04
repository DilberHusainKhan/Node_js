const process = require('process');
const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;
 
const incTimer= ()=>{
    currentTime +=waitInterval;
    const p = ((currentTime/waitTime)*100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Waiting ... ${p}%`);
}

console.log(`Setting time delay of ${waitTime}`);

const timeFinish=()=>{
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Waiting ... 100% \n`);
    process.stdout.clearLine();
    console.log("Completed");
}

const interval= setInterval(incTimer,waitInterval);
setTimeout(timeFinish,waitTime);