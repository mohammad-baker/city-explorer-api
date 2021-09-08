 "use strict";


const express = require('express') ;
const app = express();
const cors = require('cors');
const axios = require('axios');
app.use(cors());
 require('dotenv').config();
const PORT = process.env.PORT;

require('dotenv').config();
const WEATHER_API_KEY =process.env.WEATHER_API_KEY
const dataWeather = require('./data/weather.json')
app.get('/weather', (request, response) => {
 const lat= request.query.lat;
 const lon= request.query.lon;
const urlWeather = 'https://api.weatherbit.io/v2.0/forecast/daily'
try{
const weatherReson = await axios.get(`${urlWeather}?lat=${lat}&lon=${lon}&key={WEATHER_API_KEY}`)
    
response.json(weatherReson.data);
}catch(error){
  response.json(error.data);
}
const cityName12 = weatherReson.data;
    
    // const cityLat = request.query.lat;
    const cityLon = request.query.lon;
    if (cityName) {
      // const selecteData = dataWeather.find((element) => {
      //   return element.city_name === cityName;
      // });
      if (cityName12) {

        const selecteData =cityName12.data;
        let array = [];
        class Forcast {

            constructor(data, description) {
              this.data = data;
              this.description = description;
            }
          }
          selecteData.map((element) => {
            let object = new Forcast(
  
              element.datetime,
              element.weather.description
            );
        // let selectedCityData = selecteData.data;
              
        // let array = [];
       


        



          array.push(object);
        });
        response.json(array);
      } else {
        response.send('there is no city');
      }
    } else {
      response.send('there is no data');
    }
  });
  app.listen(PORT, () => {
    console.log(`Server started on port`,PORT);
  });
