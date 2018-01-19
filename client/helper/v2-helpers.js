// for v2 team to write our own API function calls

const axios = require('axios');
const GROUPON_API_KEY = 'US_AFF_0_201236_212556_0';
const yelpAPI = 'OmjPw3_urhskn_SitpzLtLBfYJLxKgJCJuiExSSwH8EEroTgHXUF6TvXA2FduhFOAyV1xACFvKynXDS0tiV5qsI6bD0UUA1JKlHJRb4JmpU8xGWNkQ2wPbX2g-1gWnYx'
const yelp = require('yelp-fusion');
const db = require('../../database/index.js')
let location = `30.7749,-122.4194`;

const fusionClient = yelp.client(yelpAPI);

const getRestaurantDeals = (lat = '37.7836198', lng ='-122.4089431', callback) => {
  let url = `https://partner-api.groupon.com/deals.json?tsToken=${GROUPON_API_KEY}&lat=${lat}&lng=${lng}&filters=category:food-and-drink&offset=0&limit=10`;
  axios
  .get(url)
  .then(response => callback(null, response))
  .catch(error => callback(error, null));
}

const startSuggestions = (userID, cb) => {
  db.getLocation(userID, (err, results) => {
    if(err){
      throw err
    } else {
      console.log(results)
      location = `${results[0].location}`
      console.log(location)
      var yelpSearch = {
        categories: 'food',
        latitude: Number(location.split(',')[0]),
        longitude: Number(location.split(',')[1]),
        limit: 40
      }
      fusionClient.search(yelpSearch)
        .then(response => {
          cb(null, response)
          console.log(response, 'HELPER')
        })
        .catch(error => console.log('error:', error))
    }
  })
}

module.exports = {
 getRestaurantDeals,
 startSuggestions
}
