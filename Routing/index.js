const http = require("http");
const server = http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url == "/"){
        res.writeHead(200,{"Content-type":"text/html"});
        res.end("Hello from the Hello side");
    }else if(req.url == "/about"){
        res.writeHead(200,{"Content-type":"text/html"});
        res.end("Hello from the about us side");
    }else if(req.url == "/contact"){
        res.writeHead(200,{"Content-type":"text/html"});
        res.end("Hello from the contact us side");
    }else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("404 Page not found");
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to the port 8000");
});