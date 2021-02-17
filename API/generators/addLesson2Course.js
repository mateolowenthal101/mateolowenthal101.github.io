const axios = require('axios');
const URL = "http://localhost:3000";

//------------------------------------------------------------

// id of the course to add it. Take a look at excel sheet
let course_id = "602c8d8ee010aa5bf2ac7464";

// id of the lesson that is going to be attached to a course. 
// Take a look at excel sheet
let lesson_id = "602c8e21e010aa5bf2ac7469";

// Class to add lesson to 
let type_course = ["english", "spanish", "mathematics"];

let selected_course = type_course[2]; // change this for a course

//------------------------------------------------------------


addLessontoCourse(course_id, lesson_id, selected_course);


//------------------------------------------------------------

async function addLessontoCourse(id_course, id_lesson, course){

    let urlLessons;
    if(course == "english") urlLessons = URL + "/english/addLesson";
    if(course == "spanish") urlLessons = URL + "/spanish/addLesson";
    if(course == "mathematics") urlLessons = URL + "/mathematics/addLesson";


    
    try {
      const response = await axios.put(urlLessons, {
          course: id_course,
          lesson: id_lesson
      });
      console.log("resposne ", response.data);
    } catch (error) {
      console.error(error);
    }

}

