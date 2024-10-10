const express = require("express");
const mongoose = require("mongoose");

const app = express();
 
mongoose.connect("mongodb+srv://Nency08:Dynrac-zebboh-9biqja@cluster0.lqxeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
).then(()=>{
    console.log("Connected To MongoDB");
  })
  .catch((err)=>{
    console.log("Error", err);
  });

app.listen(8000,()=>{
  console.log("Server Started On Port 8000 ");
});