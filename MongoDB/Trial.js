const express = require('express');
const mongoose = require('mongoose');
const students = require('./Faculties');
const bodyParser = require('body-parser');
// const student = require('./student');
// const faculties = require('./faculty');
// const products = require('./product');

const app = express();
app.use(bodyParser.urlencoded());

const connectionString  = "mongodb+srv://Nency08:Dynrac-zebboh-9biqja@cluster0.lqxeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(connectionString).then(()=>{
    console.log("Connection established successfully with cloud");

    //get all
    app.get('/students', async(req,res)=>{
        const ans = await students.find();
        res.send(ans);
    }); 

    //get by ID
    app.get('/students/:roll', async(req,res)=>{
        const stu = await students.findOne({
            RollNo:req.params.roll
        });

        res.send(stu);
    })

    //create
    app.post('/students',async (req,res)=>{
        const stu = new students({
            ...req.body
        });
        const ans = await stu.save();
        res.send(ans);
    });

    //update
    app.patch('/students/:roll',async (req,res)=>{
       const stu = await students.findOne({
            RollNo:req.params.roll
       })

       stu.Name = req.body.Name;
       stu.RollNo = req.body.RollNo;
       stu.age = req.body.age;
       stu.email = req.body.email;

       const ans = await stu.save();
       res.send(ans);
    })

    //delete
    app.delete('/students/:roll', async(req,res)=>{
        const ans = await students.deleteOne({RollNo: req.params.roll});
        res.send(ans);
    })


    //get all faculty
    app.get('/faculties', async(req,res)=>{
        const ans = await faculties.find();
        res.send(ans);
    }); 

    //get by ID  faculty
    app.get('/faculties/:enroll', async(req,res)=>{
        const fac = await faculties.findOne({
            Enroll:req.params.enroll
        });

        res.send(fac);
    })

    //create  faculty
    app.post('/faculties',async (req,res)=>{
        const fac = new faculties({
            ...req.body
        });
        const ans = await fac.save();
        res.send(ans);
    });

    //update faculty
    app.patch('/faculties/:enroll',async (req,res)=>{
       const fac = await faculties.findOne({
            Enroll:req.params.enroll
       })

       fac.Name = req.body.Name;
       fac.Department = req.body.Department;
       fac.Subject = req.body.Subject;
       fac.Enroll = req.body.Enroll;

       const ans = await fac.save();
       res.send(ans);
    })

    //delete faculty
    app.delete('/faculties/:enroll', async(req,res)=>{
        const ans = await faculties.deleteOne({Enroll: req.params.enroll});
        res.send(ans);
    })



    //get all product
    app.get('/products', async(req,res)=>{
        const ans = await products.find();
        res.send(ans);
    }); 

    //get by ID product
    app.get('/products/:idNo', async(req,res)=>{
        const pro = await products.findOne({
            idNO:req.params.idNo
        });

        res.send(pro);
    })

    //create product
    app.post('/products',async (req,res)=>{
        const pro = new products({
            ...req.body
        });
        const ans = await pro.save();
        res.send(ans);
    });

    //update product
    app.patch('/products/:idNo',async (req,res)=>{
       const pro = await products.findOne({
            idNO:req.params.idNo
       })

       pro.Name = req.body.Name;
       pro.RollNo = req.body.RollNo;
       pro.age = req.body.age;
       pro.email = req.body.email;

       const ans = await pro.save();
       res.send(ans);
    })

    //delete product
    app.delete('/products/:idNo', async(req,res)=>{
        const ans = await products.deleteOne({idNO: req.params.idNo});
        res.send(ans);
    })


    app.listen(8000,()=>{
        console.log("Server Started on Port 8000...");
    });
});