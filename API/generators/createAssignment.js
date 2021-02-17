const axios = require('axios');
const URL = require("./metadata").URL;
let assignment_information = require("./data/assignments.json");

for(let i = 0; i< assignment_information.length; i++){

  createAssignment(assignment_information[i]);
  console.log(i + "element added");

}

// createAssignment(assignment_information);


async function createAssignment(information) {
    let urlLessons = URL + "/assignment/";
    try {
      const response = await axios.post(urlLessons, information);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
}

