const http = require('http');    //require http server

const server = http.createServer((req,res)=>{
    res.end("Hello from the other sides Dilber");
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to the port no 8000");
});
