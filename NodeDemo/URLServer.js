const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url == "/about")
    {
        fs.readFile('about.html',(err,data)=>{
            if(err)
            {
                res.end(err);
            }
            else
            {
                res.statusCode = 200;
                res.setHeader('Content-Type','text/html')
                res.end(data);
            }
        })
    }
    else if(req.url == '/contact')
    {
        fs.readFile('contact.html',(err,data)=>{
            if(err)
            {
                res.end(err);
            }
            else
            {
                res.statusCode = 200;
                res.setHeader('Content-Type','text/html')
                res.end(data);
            }
        })
    }
})


server.listen(5000,()=>{
    console.log("Server Started On Port 5000.")
})