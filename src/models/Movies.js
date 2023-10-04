const mongoose = require('mongoose')

const Movies = mongoose.Schema({
    
    Imgurl:String,
    title:String,
    label:String,
    lang:String
})

module.exports=mongoose.model('movies',Movies)