const axios = require('axios');


const getWheather = async (coords) => {
    const responseWeather = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=a87f4a2171ec0de4ae7ae9a5417f30f2&units=metric`);

    return {
        temp: responseWeather.data.main.temp
    }
};

module.exports = {
    getWheather
}