const axios = require('axios');

const getCoords = async (address) => {
    const encodedUrl = encodeURI(address);
    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyBNETv7tFm5UHsBrczB2vPdvdEzWquKL2o`)

    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error(`no hay resultados para la ciudad ${address}`);
    }

    let location = response.data.results[0];
    let lat = location.geometry.location.lat;
    let lng = location.geometry.location.lng;
    let addressName = location.address_components[0].long_name;
    
    return {
        addressName,
        lat,
        lng
    }

};

module.exports = {
    getCoords
}


