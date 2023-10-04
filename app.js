const express = require('express');
const hbs = require('hbs');
const path = require('path')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const routes = require('./src/routes/main');

require('./src/db/conn');

require("dotenv").config();
// models   
// const Carousel = require("./models/Carousel");
// const Slider = require("./models/Slider2");
// const Ev_slider = require("./models/Slider3");
// const Movies = require("./models/Movies");

app.use(bodyParser.urlencoded({
    extended:true
}))


app.set('view engine', 'hbs')

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
hbs.registerPartials("views/partials")

app.use('', routes);





app.listen(process.env.PORT , () => {
    console.log(`Application listening at 4400`);
})