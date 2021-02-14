const axios = require('axios');
const URL = require("./metadata").URL;
let report_information = require("./data/report.json");


createReport(report_information);


async function createReport(information) {
    let urlLessons = URL + "/spanish/";
    try {
      const response = await axios.post(urlLessons, information);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
}

