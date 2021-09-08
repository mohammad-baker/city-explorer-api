"use strict";


const express = require('express') ;
const app = express();
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
app.use(cors());
 
const PORT = process.env.PORT;



const weather = require('./data/weather.json')
app.get('/weather', (request, response) => {
  const city = request.query.city_name;
  const lat = request.query.lat;
  const lon = request.query.lon;

  if (city) {
    const select = weather.find((element) => {
      return element.city_name.toLowerCase() === city;
    });
    if (select) {
      let selectedData = select.data;
      let array = [];
      class Forcast {
        constructor(data, description) {
          this.data = data;
          this.description = description;
        }
      }
      selectedData.map((element) => {
        let object = new Forcast(
          element.datetime,
          element.weather.description
        );

        array.push(object);



      });
      response.json(array);


    } 
    else {
      response.send('that city is not there');
    }
  } 
  
  else {
    response.send('there is no city');
  }


});
app.listen(PORT, () => {
});