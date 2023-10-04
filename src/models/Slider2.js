const mongoose = require('mongoose');

const Slider = mongoose.Schema({
    // Id:id,    
    id:String,   
    ImgUrl:String,
    nam_movie:String,
    jonar:String,
    bg_img:String,
    trailer_img:String,
    mov_rating:String,
    mov_votes:String,
    dimention:String,
    lang:String,
    watch_time:String
}) 

module.exports= mongoose.model('slider',Slider)