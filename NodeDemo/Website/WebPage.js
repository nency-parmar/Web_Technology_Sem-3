const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    res.setHeader("Content-type","text/html");
    res.write("<div>");
    res.write("<a href='Home' style='float:left; border-radius:3px;'>HOME</a>");
    res.write("<a href='about' style='float:left; margin-left:50px; border-radius:3px;'>ABOUT US</a>");
    res.write("<a href='contact' style='float:left; margin-left:50px;  border-radius:3px;'>CONTACT US</a>");
    res.write("<a href='login' style='float:left;  margin-left:50px; border-radius:3px;'>LOGIN</a>");
    res.write("<a href='services' style='float:left; margin-left:50px; border-radius:3px;'>SERVICES</a>");
    res.write("</div>");
    // res.end(" ");
    if(req.url == "/Home" || req.url == "/")
    {
        fs.readFile("Home.html",(err,data)=>{
            res.statusCode = 200;
            res.end(data)

        });
    }
    else if(req.url == "/about")
    {
        fs.readFile("about.html",(err,data)=>{
            res.statusCode = 200;
            res.end(data)
        });
    }
    else if(req.url=="/contact")
    {
        fs.readFile("contact.html",(err,data)=>{
            res.statusCode = 200;
            res.end(data)
        });
    }
    else if(req.url=="/login")
    {
        fs.readFile("login.html",(err,data)=>{
            res.statusCode = 200;
            res.end(data)
        });
    }
    else if(req.url=="/services")
    {
        fs.readFile("services.html",(err,data)=>{
            res.statusCode = 200;
            res.end(data)
        });
    }
    else
    {
        res.end("<h1>Page Not Found.</h1>");
    }
});
server.listen(8080,()=>{
    console.log("Server Started on Port 8080...");
})