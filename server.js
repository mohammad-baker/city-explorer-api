'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const PORT = process.env.PORT

const citweather = require('./controller/weather.controller');
const citmovie = require('./controller/movie.controller');



app.get('/weather', citweather);

app.get('/movie', citmovie);

app.listen(PORT,()=>{
    console.log(`f  sss `);
  })