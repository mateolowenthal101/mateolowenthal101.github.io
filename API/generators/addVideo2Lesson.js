const axios = require('axios');
const URL = require("./metadata").URL;

//------------------------------------------------------------

// exercise to add it to lesson. Take a look at excel sheet
let video_links = [
    {
        "title": "video 5",
        "url": "https://www.youtube.com/watch?v=48Vf9G1cjyc"
    },
    {
        "title": "video 6",
        "url": "https://www.youtube.com/watch?v=48Vf9G1cjyc"
    }
];

// id of the lesson to attach the exercise. 
// Take a look at excel sheet
let lesson_id = "6028aca7095de38427ebe54a";


//------------------------------------------------------------


addLessontoCourse(video_links, lesson_id);


//------------------------------------------------------------

async function addLessontoCourse(video_link, id_lesson){

    let exerciseLesson = URL + "/lessons/addVideo/";

    try {
      const response = await axios.put(exerciseLesson, {
          lesson: id_lesson,
          video_links: video_link
      });
      console.log("resposne ", response.data);
    } catch (error) {
      console.error(error);
    }

}

