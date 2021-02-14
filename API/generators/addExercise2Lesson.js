const axios = require('axios');
const URL = require("./metadata").URL;

//------------------------------------------------------------

// exercise to add it to lesson. Take a look at excel sheet
let exercises = [
    {
        "title": "exercise 5",
        "url": "https://www.youtube.com/watch?v=48Vf9G1cjyc"
    },
    {
        "title": "exercise 6",
        "url": "https://www.youtube.com/watch?v=48Vf9G1cjyc"
    }
];

// id of the lesson to attach the exercise. 
// Take a look at excel sheet
let lesson_id = "6028aca7095de38427ebe54a";


//------------------------------------------------------------


addLessontoCourse(exercises, lesson_id);


//------------------------------------------------------------

async function addLessontoCourse(exercise_info, id_lesson){

    let exerciseLesson = URL + "/lessons/addExercise/";

    try {
      const response = await axios.put(exerciseLesson, {
          lesson: id_lesson,
          exercises: exercise_info
      });
      console.log("resposne ", response.data);
    } catch (error) {
      console.error(error);
    }

}

