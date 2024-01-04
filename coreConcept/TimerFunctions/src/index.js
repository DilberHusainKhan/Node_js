const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

// Increment timer
const incTimer =()=>{
    currentTime +=waitInterval;
    console.log(`waiting ${currentTime/1000} sec`); 
};

console.log(`Setting a ${waitTime/1000} sec delay`);

const timerFinished =()=>{
    clearInterval(interval);
    console.log("done Timeout");
}


const interval = setInterval(incTimer,waitInterval);
setTimeout(timerFinished,waitTime);