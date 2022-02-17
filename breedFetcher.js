const request = require("request");

const args = process.argv.slice(2);

const catFirstLetters = args[0].slice(0, 4);

request(`https://api.thecatapi.com/v1/breeds/search?q=${catFirstLetters}`, (error, response, body) => {
  
  if (error) {
    console.log("error: ", error);
  }
 
  // console.log("response: ", response[0]);

  const data = JSON.parse(body);
  //console.log("data: ", data);

  if (data[0] === undefined) {
    console.log(`Sorry, unable to find information on ${args[0]}`);
    process.exit();
  }
  //console.log(`${args[0]}: ${data}`)

  console.log(`${args[0]} Breed description: `, data[0].description);
  //console.log(" breed: ", data["American Curl"]);  //The data is an array of objects, and each obj is a different breed
  //console.log("data type: ", typeof data);



  //Allow for CLI args, with first arg being name

  //and return descripttion for that name
})