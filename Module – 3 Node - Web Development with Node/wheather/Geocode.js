const axios = require('axios')
const wheather = require('./wheather')
const Geocode = (city,callback) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=c4a7a8ba8d9f43c294db149c7b57eea5`;
    axios.get(url).then((result) => {
        const data2 = result.data.results[0].geometry
        const lat = data2.lat
        const lon = data2.lng
        wheather(lat,lon,(result)=>{
          callback(result)
 })

    }).catch((err) => {

        console.log(err);
    })



}

module.exports= Geocode