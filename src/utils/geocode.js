const request = require('request');

const geocode = (address, callback) => {

    //concatenating a link to generalize location values based on search // encodeURIComponent reads special characters
    const url  = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZWNhcmxvczIwMjAiLCJhIjoiY2s2N2wxd2d3MWVwNDNucW9heWRqdWk0NSJ9.zS73byg28q8eHOwvmGEkeQ'
    
    request({url, json: true}, (error, {body}) => { //shorthand url: url into url due to same naming and reference; Refactored response: to only body
        if (error){
            callback('Unable to connect location services!', undefined);
        }        
        else if(body.features.length === 0){
            callback('Unable to find coordinates. Try another search', undefined);
        }
        else {
            callback(undefined, {
            latitude: body.features[0].center[1],
            longitude: body.features[0].center[0],
            location: body.features[0].place_name
            })
        }

    })

}


module.exports = geocode;