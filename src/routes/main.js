const express = require('express');
const async = require('hbs/lib/async');
const routes = express.Router();


const Carousel = require('../models/Carousel');
const Slider = require('../models/Slider2');
const Ev_slider = require('../models/Slider3');
const Movies = require('../models/Movies');
const Contact = require('../models/Contact');
const { request, response } = require('express');
// const { route } = require('express')

routes.get('/',async (req,res)=>{
    const carousel = await Carousel.find()
    const slider = await Slider.find()
    const ev_slider = await Ev_slider.find()
    // it is just for check wether the data is feching or not
    // console.log(carousel);
    // console.log(slider);
    // console.log(ev_slider);

    res.render("index",{
        carousel:carousel,
        slider:slider,
        ev_slider:ev_slider
    })
})

routes.get('/movies',async (req,res)=>{
    const carousel = await Carousel.find()
    const slider = await Slider.find()
    const movies = await Movies.find()
    // console.log(movies);

    res.render("movies",{
        carousel:carousel,
        slider:slider,
        movies:movies

    });
})

routes.get('/ListYourShow',async (req,res)=>{
    const carousel = await Carousel.find()
    const slider = await Slider.find()
    const ev_slider = await Ev_slider.find()
    res.render("ListYourShow",{
        carousel:carousel,
        slider:slider,
        ev_slider:ev_slider
    });
})

routes.get('/Stream',(req,res)=>{
    res.render("stream");
})

routes.get('/book',async (req,res)=>{
    // const slider = await Slider.findOne()
    const slider = await Slider.findOne()
    // const slider = await Slider.findById({_id:sliderId});
    res.render("book",{
        slider:slider,
    });
})

// routes.get('/book/:_id',async (req,res)=>{
//     // const slider = await Slider.findOne()
//     const slider = await Slider.findById(req.params.id)
//     res.render("book",{
//             slider:slider,
//     });
// })

routes.get('/book/:id',async (req,res)=>{
    // const slider = await Slider.findOne()
    bookid=req.params.id;
    const slider = await Slider.findOne({id:bookid});
    // console.log(result);
    res.render("book",{
            slider:slider,
    });
})

routes.post('/process-signup-form',async (request,response) =>{
    console.log("form is submitted");
    console.log(request.body);
    // getting data inti the databse
    try{
        const data=await Contact.create(request.body)
        console.log(data);
        response.redirect("/")
    }
    catch(e)
    {
        console.log(e);
        response.redirect("/")
    }

})
module.exports = routes