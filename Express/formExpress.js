const express = require("express");

const app=express();
//app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/login",(req,res)=>{
    res.send(`<form action="/login" method="POST">
        <input type="text" placeholder="Enter Username">
        <input type="Password" placeholder="Enter Password">
        <button type="submit">Login<button/>
        </form>`);
});

app.post("/login",(req,res)=>{
    res.send(req.body);
});

// app.post("/users/:id",(req,res)=>{
//     let name=req.body;
//     res.send(name);
// })

app.listen(8000,()=>{
    console.log("Server Started on 8000...");
});