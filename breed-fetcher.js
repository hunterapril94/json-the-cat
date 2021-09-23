const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      desc = null;
      callback(error, desc);
    } else if (data[0] === undefined) {
      callback(null, "Error: Breed not found");
    } else {
      error = null
      callback(error, data[0].description);
    }
  });
};
module.exports = { fetchBreedDescription };