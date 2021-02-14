const axios = require('axios');
const URL = require("./metadata").URL;
let lesson_information = require("./data/lesson.json");


createLesson(lesson_information);


async function createLesson(information) {
    let urlLessons = URL + "/lessons/";
    try {
      const response = await axios.post(urlLessons, information);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
}



