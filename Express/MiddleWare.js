const express = require('express');

const app = express();

const middlewarefunction = (req,res,next)=>{
    console.log("MiddleWare Called...");
    next();
}

const secondfunction = (req,res,next)=>{
    console.log("Second MiddleWare Called...");
    next();
}

app.get("/",middlewarefunction,secondfunction,(req,res)=>{
    console.log("Actual Function Called...");
    res.send("<h1>HOME PAGE...</h1>");
});

app.listen(8000,()=>{
    console.log("Server Started on Port 8000...");
});