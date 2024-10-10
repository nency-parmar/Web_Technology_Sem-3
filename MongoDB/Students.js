const mongoose = require('mongoose');

const schema = mongoose.Schema({
    rollNo:Number,
    name:String,
    age:Number,
});

module.exports = mongoose.model('students',schema);