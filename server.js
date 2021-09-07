 "use strict";


const express = require('express') ;
const app = express();
const cors = require('cors');
app.use(cors());
 require('dotenv').config();
const PORT = process.env.PORT;
const dataWeather = require('./data/weather.json')
app.get('/weatherdata', (request, response) => {
    const cityName = request.query.city_name;
    
    const cityLat = request.query.lat;
    const cityLon = request.query.lon;
    if (cityName) {
      const selecteData = dataWeather.find((element) => {
        return element.city_name === cityName;
      });
      if (selecteData) {


        class Forcast {

            constructor(data, description) {
              this.data = data;
              this.description = description;
            }
          }
          selectedCityData.map((element) => {
            let object = new Forcast(
  
              element.datetime,
              element.weather.description
            );
        let selectedCityData = selecteData.data;
              
        let array = [];
       


        



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
