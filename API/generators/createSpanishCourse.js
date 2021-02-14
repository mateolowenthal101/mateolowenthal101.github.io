const axios = require('axios');
const URL = require("./metadata").URL;
let spanish_information = require("./data/spanish.json");


createSpanish(spanish_information);


async function createSpanish(information) {
    let urlLessons = URL + "/spanish/";
    try {
      const response = await axios.post(urlLessons, information);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
}

