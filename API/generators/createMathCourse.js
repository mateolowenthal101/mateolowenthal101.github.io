const axios = require('axios');
const URL = require("./metadata").URL;
let mathematics_information = require("./data/mathematics.json");


createMath(mathematics_information);


async function createMath(information) {
    let urlLessons = URL + "/mathematics/";
    try {
      const response = await axios.post(urlLessons, information);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
}

