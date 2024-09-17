const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const arr = [
    {
        'id': 1,
        'name': 'abc'
    },
    {
        'id': 2,
        'name': 'xyz'
    },
    {
        'id': 3,
        'name': 'asd'
    },
    {
        'id': 4,
        'name': 'sdf'
    }
]

// CRUD Operation By Express...

// Read
app.get("/name", (req, res) => {
    res.send(arr);
})

// Read by ID...
app.get("/name/:id", (req, res) => {
    let { id } = req.params;
    let item = arr.find((i) =>
        i.id == parseInt(id));
    if (item) {
        res.send(item);
    }
    else {
        res.status(404).send({ message: "No Data Found..." })
    }
});

// Create...
app.post("/name", (req, res) => {
    let name = req.body;
    arr.push(name);
    res.status(200).send(arr);
});

// Update...
app.put("/name/:id", (req, res) => {
    let { id } = req.params;
    let { name } = req.body;
    let itemIndex = arr.findIndex((i) =>
        i.id == parseInt(id));
    if (itemIndex !== -1) {
        arr[itemIndex] = { id, name };
        res.status(200).send(arr[itemIndex]);
    }
    else {
        res.status(404).send({ message: "No Data Found..." })
    }
});

// Delete
app.delete("/name/:id", (req, res) => {
    let { id } = req.params;
    let itemIndex = arr.findIndex((i) =>
        i.id === parseInt(id))
    if (itemIndex !== -1 ) {
        arr.splice(itemIndex,1);
        res.status(200).send();
    }
    else {
        res.status(404).send({ message: "No Data Found..." })
    }
});


app.get('/name/search/:text',(req,res)=>{
    const ans = arr.filter(arr=>{
        if(arr.name.indexOf(req.params.text )> -1)
        {
            return true;
        }
    });
    res.send(ans);
})

app.listen(3000, () => {
    console.log("Server Started On 3000...");
});