const request = require('request');
const webpage = "https://api.thecatapi.com/v1/breeds/search?q=" + process.argv[2];
const content = request(webpage, function(error, response, body) {
  if (response.statusCode !== 200) {
    console.log("Error encountered! Code: ", response.statusCode);
  } else {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log("error encountered. breed not found.");
    } else {
      console.log(data[0].description);
    }
  }
});