'use strict'
const axios = require('axios');
require('dotenv').config();
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const WeatherOFcity = require('../models/weather.model');

const citweather = async (req, res) => {

  const city = req.query.city;

  const weatherBitResponse = await axios.get(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${WEATHER_API_KEY}`
  );

  if (city) {
    let array = weatherBitResponse.data.data.map((value) => {
      return new WeatherOFcity((value.datetime,value.weather.description))})

    if (array) {
      res.json(array);
     
      
    } else {
      res.send('no');
    }
  } else {
    res.json('no city');
  }
};

module.exports = citweather;



