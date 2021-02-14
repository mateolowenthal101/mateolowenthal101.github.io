const axios = require('axios');
const URL = require("./metadata").URL;
let english_information = require("./data/english.json");


createEnglish(english_information);


async function createEnglish(information) {
    let urlLessons = URL + "/english/";
    try {
      const response = await axios.post(urlLessons, information);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
}

