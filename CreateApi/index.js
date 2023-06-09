const http = require('http');
const fs = require('fs');


const server =http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end("This is Home Page");
    }else if(req.url =='/About'){
        res.end("This is About Page");
    }else if(req.url=='/UserApi'){
        fs.readFile(`${__dirname}/userdata.json`,'UTF-8',(err,data)=>{  
            // console.log(data);
            const objData  = JSON.parse(data);
            res.writeHead(404,{'content-type':'text/html'})
            // objData.map((data)=>res.end(`<h2>${data.firstName} </h2>`));
            res.end(`<h2>${objData[0].firstName} ${objData[0].lastName} </h2>`);
        })
    }else{
        res.writeHead(404,{'content-type':'text/html'})
        res.end('<h1>404 Page not found</h1>');
    }
});
server.listen(8080);