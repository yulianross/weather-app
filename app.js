const { argv } = require('./config/config');
const { getCoords } = require('./place/place');
const { getWheather } = require('./wheather/wheather');

const getInfo = async (address) => {
    const coords = await getCoords(address);
    const temperature = await getWheather(coords);

    return temperature;
};

getInfo(argv.address)
.then((temp) => {
    console.log(temp);
})
.catch(err => console.log(err));