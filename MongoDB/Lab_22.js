const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const students = require('./Students');
const faculties = require('./Faculties');
const products = require('./Products');

const connectionString = 'mongodb+srv://Nency08:Dynrac-zebboh-9biqja@cluster0.lqxeh.mongodb.net/Demo';

mongoose.connect(connectionString).then(()=>{
    console.log("Connection Established With Cloud...");
    const app = express();

    // For Students...

    // Get All
    app.get('/students',async(req,res)=>{
        const data = await students.find();
        res.send(data)
    })
    // Get By Id
    app.get('/students/:id',async(req,res)=>{
        const result = await students.findOne({rollNo:req.params.id});
        res.send(result);
    })
    // Create
    app.post('/students',async (req,res)=>{
        const stu = new students(req.body);
        const result = await stu.save();
        res.send(result);
    })
    // Delete
    app.delete('/students/:id',async (req,res)=>{
        const result = await students.deleteOne({rollNo : req.params.id});
        res.send(result);
    })
    // Update
    app.put('/students/:id',async(req,res)=>{
        const stu = await students.findOneAndUpdate({id : req.params.id},req.body,{new : true})
        res.send(result);
    })


    // For Faculties...

    // Get All...
    app.get('/faculties',async(req,res)=>{
        const data = await faculties.find();
        res.send(data)
    })
    // Get By Id...
    app.get('/faculties',async(req,res)=>{
        const data = await faculties.findOne();
        res.send(data)
    })
    // Create...
    app.post('/faculties/:',async(req,res)=>{
        const fac = new faculties(req.body);
        const data = await fac.save();
        res.send(data);
    })
    // Delete...
    app.delete('faculties/:id',async(req,res)=>{
        const data = await faculties.deleteOne({id : req.params.id});
        res.send(data);
    })
    // Update...
    app.put('/faculties/:id',async(req,res)=>{
        const fac = await faculties.findOneAndUpdate({id : req.params.id},req.body,{new : true})
        res.send(data);
    })

    // For Products...

    // Get All..
    app.get('/products',async(req,res)=>{
        const data = await products.find();
        res.send(data)
    })
    // Get By Id...
    app.get('/products',async(req,res)=>{
        const data = await products.findOne();
        res.send(data)
    })
    // Create...
    app.post('/products',async(req,res)=>{
        const pro = new products(req.body);
        const data = await pro.save();
        res.send(data);
    })
    // Delete...
    app.delete('products/:pno',async(req,res)=>{
        const data = await products.deleteOne({pno : req.params.pno});
        res.send(data);
    })
    // Update...
    app.put('/products/:pno',async(req,res)=>{
        const data = await products.findOneAndUpdate({pno : req.params.pno},req.body,{new : true})
        res.send(data);
    })

    app.listen(8000,()=>{
        console.log("Server Started on Port 8000...");
    })
})