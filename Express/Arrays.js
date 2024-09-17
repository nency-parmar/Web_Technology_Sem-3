const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const stu = [
    {
        'id': 1,
        'name': 'abc'
    },
    {
        'id': 2,
        'name': 'xyz'
    }
]

const fac = [
    {
        'id':101,
        'facName':'avb'
    },
    {
        'id':102,
        'facName':'pqr'
    }  
];

const book = [
    {
        'srno': 1011,
        'author': 'abcd'
    },
    {
        'srno': 1012,
        'author': 'wxyz'
    }
]

const dataOfObjects = 
{
    'stu': stu,
    'fac': fac,
    'book':book
};

// CRUD Operation By Express...

// Read All...
app.get("/objects",(req,res)=>{
    res.send(dataOfObjects);
});

// Read by Object name...
app.get("/objects/:var",(req,res)=>{
    let r = req.params.var;
    let data = dataOfObjects[r];
    res.send(data);
});

// Read by Properties of Object...
app.get("/objects/:var/:id",(req,res)=>{
    let r = req.params.var;
    let id = req.params.id;
    let item = dataOfObjects[r][id];
    if(item)
    {
        res.send(item);
    }
    else
    {
        res.status(404).send({ message: "No Data Found..." })
    }
});

app.listen(8000, () => {
    console.log("Server Started On 8000...");
});