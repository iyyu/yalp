// for v2 team to write our own database query functions
const dbIndex = require('./index.js'); 

// const addDeals = (lat, lng, cb) => {
//   // TODO for Iris
//   const sql = ``;
//   return new Promise((resolve, reject) => {
//     connection.query(sql, (err, result, fields) => err ? reject(err) : resolve(result));
//   });
// };

const saveUserSearches = (userID, searchText, callback) => {
  console.log(this, 'THIS OUTSIDE')
  searchText.forEach(function(each){
    let queryStr = "INSERT INTO user_searches (user_id, searchString) VALUES (? , ?);"
    let params = [userID, each]
    console.log(console.log(dbIndex))
    dbIndex.connection.query(queryStr, params, (error, results) => {
  	  if(error){
  	  	throw error
  	  } else {
        console.log('User Search Category Saved - v2-index')
        callback(null, results)
  	  }
    })
  }.bind(this))
}

module.exports = {
	saveUserSearches
}
