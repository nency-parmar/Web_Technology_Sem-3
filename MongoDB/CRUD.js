const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const students = require('./Students');

const connectionString = 'mongodb+srv://Nency08:Dynrac-zebboh-9biqja@cluster0.lqxeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(connectionString).then(()=>{
    console.log("Conneted With Cloud...")
    const app = express();

    // Get by All
    app.get('/home',async(req,res)=>{
        const result = await students.find();
        res.json(result);
    })

    // Get by ID
    app.get('/home/:id',async(req,res)=>{
        const result = await students.findOne({id:req.params.id});
        res.json(result);
    })

    // Create
    app.post('/home',async (req,res)=>{
        const stu = new students(req.body);
        const result = await stu.save();
        res.json(result);
    })

    // Delete
    app.delete('/home/:id',async (req,res)=>{
        const result = await students.deleteOne({rollNo : req.params.id});
        res.json(result);
    })

    // Update
    app.put('/home/:id',async(req,res)=>{
        const stu = await students.findOneAndUpdate({id : req.params.id},req.body,{new : true})
        res.json(result);
    })

    app.listen(8000,()=>{
        console.log("Server Started on Port 8000...");
    });
});