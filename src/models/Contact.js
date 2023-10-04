const mongoose = require('mongoose')

const Contact = mongoose.Schema({
    email:String,
    password:String,
    phone:String
})

module.exports=mongoose.model('contact',Contact);