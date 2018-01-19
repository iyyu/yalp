// for v2 team to write their own routes below
const express = require('express');
const router = express.Router();
const v2Helpers = require('../client/helper/v2-helpers.js');


router.get('*/server/deal', (req, res) => {
  return new Promise((resolve, reject) => {
    v2Helpers.getRestaurantDeals('37.7836198', '-122.4089431', (err, response) => {
      err ? reject(err) : resolve(response);
    })
  }).then(response => {
    console.log(response.data.deals);
  })
})

router.get('/suggestions/:id', (req, res) => {
	v2Helpers.startSuggestions(req.params.id, (err, results) => {
		console.log(JSON.parse(results.body).businesses)
		var parsedResults = JSON.parse(results.body).businesses
		res.send(parsedResults)
	})
})

module.exports = router;