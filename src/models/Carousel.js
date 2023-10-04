const mongoose = require('mongoose')

// create file name with capital letter to avoid futher mess always 
const Carousel = mongoose.Schema({
    imgUrl: String,
})

module.exports=mongoose.model("carousel",Carousel);