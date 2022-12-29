
const axios = require('axios')
const wheather = (lat,lon,callback) => {
  const API = "f2ee6a251555a62a546fb95be9842ffd";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`;
  axios.get(url).then((result) => {

    
    const cityname = result.data.name
    
    callback({

      temp: result.data.main.temp,
      city: cityname,
      pressure: result.data.main.pressure

    })

  }).catch((err) => {
    console.log(err)
  })
}
module.exports= wheather


