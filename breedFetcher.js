const request = require("request");
const args = process.argv.slice(2);
  //Allow for CLI args, with first arg being name
  //and return descripttion for that name

const catFirstLetters = args[0].slice(0, 4);
//In the case of names being too long or two words, slice the first few characters to search on API

request(`https://api.thecatapi.com/v1/breeds/search?q=${catFirstLetters}`, (error, response, body) => {
  
  if (error) {
    console.log("error: ", error);
  }

  const data = JSON.parse(body);
  //Turns raw data into JSON to be manipulated

  if (data[0] === undefined) {
    //Prints message if database does not find info on cat input
    console.log(`Sorry, unable to find information on ${args[0]}`);
    process.exit();
  }

  console.log(`${args[0]} Breed description: `, data[0].description);
  //If the search finds the input, it will print the description

  ///Notes:
  ////The data is an array of objects, and each obj is a different breed
});