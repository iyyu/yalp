// for v2 team to write our own API function calls

const axios = require('axios');
const GROUPON_API_KEY = 'US_AFF_0_201236_212556_0';


const getRestaurantDeals = (lat = '37.7836198', lng ='-122.4089431', callback) => {
  let url = `https://partner-api.groupon.com/deals.json?tsToken=${GROUPON_API_KEY}&lat=${lat}&lng=${lng}&filters=category:food-and-drink&offset=0&limit=10`;
  axios
  .get(url)
  .then(response => callback(null, response))
  .catch(error => callback(error, null));
}

module.exports = {
 getRestaurantDeals
}
