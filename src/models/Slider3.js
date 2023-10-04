const mongoose = require('mongoose');

const Ev_slider = mongoose.Schema({
    ImgUrl:String
})

module.exports=mongoose.model('ev_slider',Ev_slider);