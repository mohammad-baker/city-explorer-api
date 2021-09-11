'use strict'
const axios = require('axios');
require('dotenv').config();
const MOVIE_APP_IQ_KEY = process.env.MOVIE_APP_IQ_KEY;
const movieOfCity = require('../models/movie.model');

const citmovie = async (req, res) => {

  const city = req.query.city;

  const movieBitResponse = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${city}&api_key=${MOVIE_APP_IQ_KEY}`
  );

  if (city) {
    let array = movieBitResponse.data.results.map((value) => {
      return new movieOfCity((  
        value.original_title,value.original_language,value.overview,value.video,value.vote_average,value.vote_count,value.img,value.popularity,value.release_date))})

    if (array) {
      res.json(array);
     
      
    } else {
      res.send('no');
    }
  } else {
    res.json('no city');
  }
};

module.exports = citmovie;

