const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("Hello World From Node...");
});

server.listen(3000,()=>{
    console.log("Server Started On Port 3000.");
});