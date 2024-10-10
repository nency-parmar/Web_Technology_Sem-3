const mongoose = require('mongoose');

const schema = mongoose.Schema({
    pno : Number,
    name:String,
    price:Number,
    color:String
});

module.exports = mongoose.model('all',schema);