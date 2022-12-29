const geocode = require('./Geocode')
const city ="usa"
geocode(city, (result) => {
    console.log(result.temp, result.city, result.pressure)
})