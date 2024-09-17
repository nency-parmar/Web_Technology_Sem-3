const express = require('express');
const path = require('path');

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello From Express JS...</h1>");
})

// If we want in output that user enter something in url then...
app.get("/user/:name",(req,res)=>{
    const myname = req.params.name;
    res.send(`<h1>Hello World From ${myname}</h1>`);
});

app.get("/text",(req,res)=>{
    res.send("<h1>HOME</h1>");
});

app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,"home.html"));
});

app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"about.html"));
});

app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"contact.html"));
});

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"login.html"));
});

app.get("/services",(req,res)=>{
    res.sendFile(path.join(__dirname,"services.html"));
});

app.listen(8000,()=>{
    console.log("Server Started on Port 8000...");
});