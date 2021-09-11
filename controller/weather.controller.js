'use strict'
const axios = require('axios');
require('dotenv').config();
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const WeatherOFcity = require('../models/weather.model');
const Cache = require('../helper/cache.helper')
let cacheObject = new Cache();
const citweather = async (req, res) => {

  const city = req.query.city;
if (cacheObject.forCast.length){
  const findData = cacheObject.forCast.find(location => location.city === city)

  const dayinmilSec =50000;
  const oneDayPassed =(Date.now()-cacheObject.time)> dayinmilSec;
  if(oneDayPassed){
    cacheObject = new Cache;
  }
  if(findData){
    res.json(findData.array)
  }

}else{
  const weatherBitResponse = await axios.get(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${WEATHER_API_KEY}`
  );

  if (city) {
    let array = weatherBitResponse.data.data.map((value) => {
      return new WeatherOFcity((`Low of ${data1.low_temp}, high of ${data1.high_temp} with ${data1.weather.description} `,
      ` ${data1.datetime}`))})

    if (array) {


      cacheObject.forCast.push({
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

module.exports = citweather;



