const request = require('request'); //load request module

//function definition
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/7f796125edb04dca93f3d5393ac3635f/' + latitude + ',' + longitude; //dynamic coordinates

    request({url, json: true}, (error, {body}) => { //error or response is activated at run//shorthand url: url into url due to same naming and reference; Refactored response: to only body
        if (error) // low lever error - internal error handling for connectivity
        {
            callback('Unable to connect to weather service!', undefined);
        }

        else if(body.error) //external error handling for errors found input source
        {
                callback('Unable to find location coordinates', undefined);
        }
        
        else // if both internal and external are good, run normally
        {
            callback( undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature +  ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        };
        
    })
}



  module.exports = forecast