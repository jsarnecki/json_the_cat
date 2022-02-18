const request = require("request");
const args = process.argv.slice(2);

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

  const data = JSON.parse(body);
  //Turns raw data into JSON to be manipulated

  if (data[0] === undefined) {
    /*return the first callback (see index.js) parameter if not found, 
    intently adding in null in 2nd param to avoid the desc as it did not find one */
    return callback(`Sorry, unable to find information on ${breedName}`, null);
  }

  return callback(null, `${breedName} Breed description: ${data[0].description}`);
  //return inside the 2nd param of the callback, intently adding null in first to avoid the err
  //If the search finds the input, it will print the description

  ///Notes:
  ////The data is an array of objects, and each obj is a different breed
  });

};

module.exports = { fetchBreedDescription };