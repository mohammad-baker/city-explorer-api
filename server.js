"use strict";
const express = require('express')
const app = express() 
const cors = require('cors');
app.use(cors())
require('dotenv').config();
const axios = require('axios');
const PORT = process.env.PORT
class Cast{
  constructor(data,description){
    this.data=data;
    
    this.description=description;
  }
}
const weather = require("./data/weather.json");
app.get('/weather',(req,res)=>{

  const city_name =req.query.city_name;
  const lon =req.query.lon;
  const lat =req.query.lat;





  const array=weather.find((element)=>{
    return element.city_name.toLowerCase() === city_name;
  });
  if(array){
    
    let arrayOfData=array.data.map((value) => {
  
      return new Cast(value.datetime,value.weather.description);
    });
  

  if(arrayOfData){

    res.json(arrayOfData)
  }else{res.send('no')}
  }else{
    res.json(weather)
    
  }
}
)
// port of
app.listen(PORT,()=>{
  console.log(`f  sss ${PORT}`);
})