const events = require('events');

const emitter = new events.EventEmitter();
emitter.on("customEvent", (message,user)=>{
    console.log(`${user}: ${message}`);
})

console.log("Type here...");
// emitter.emit("customEvent","I am Humayun Khan", "BOAT");

process.stdin.on("data",data=>{
    const input = data.toString().trim();
    if(input ==="exit"){
        emitter.emit("customEvent","Good Bye!", "BOT: ");
        process.exit();
    }
    emitter.emit("customEvent",input,"BOT");
})