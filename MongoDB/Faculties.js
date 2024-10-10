const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id : Number,
    Name : String,
    age : Number,
    email : String
});

module.exports = mongoose.model('student',schema)