'use strict'
const axios = require('axios');
require('dotenv').config();
const MOVIE_APP_IQ_KEY = process.env.MOVIE_APP_IQ_KEY;
const movieOfCity = require('../models/movie.model');
const Cache = require('../helper/cache.helper')
let cacheObject = new Cache();
const citmovie = async (req, res) => {

  const city = req.query.city;
  if (cacheObject.formove.length){
    const findData = cacheObject.formove.find(location => location.city === city)
    const dayinmilSec =50000;
  const oneDayPassed =(Date.now()-cacheObject.time)> dayinmilSec;
  if(oneDayPassed){
    cacheObject = new Cache;
  }
  if(findData && !oneDayPassed){
      res.json(findData.array)
    }
  
  }else{
    const movieBitResponse = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${city}&api_key=${MOVIE_APP_IQ_KEY}`
    );
  
    if (city) {
      let array = movieBitResponse.data.results.map((value) => {
        return new movieOfCity((  
          value.original_title,value.original_language,value.overview,value.video,value.vote_average,value.vote_count,value.img,value.popularity,value.release_date))})
  
      if (array) {
        cacheObject.formove.push({
          "city":city,
          "data":array
        })
        return array
        res.json(array);
       
        
      } else {
        
        res.send('no');
      }
    } else {
      res.json('no city');
    }
  }
  
};

module.exports = citmovie;

