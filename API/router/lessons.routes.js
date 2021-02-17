var express = require("express");
var router = express.Router();
const lessonModel = require("../models/lessons");

// create lessons
router.post("/", (req, res)=> {

    let lesson_data = req.body;
    let lesson = new lessonModel(lesson_data);

    lesson.save()
    .then((result) => {
        res.send(result);
        console.log(result._id);
    })
    .catch(err => console.log(err))

});




router.put("/addExercise", (req, res)=> {
    console.log(req.body);
    let lesson_id = req.body.lesson;
    let exercises_info = req.body.exercises;
    
    lessonModel.findOneAndUpdate(
        { _id: lesson_id }, 
        { $push: { exercises: exercises_info } },
      
    )
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
    

});



router.put("/addVideo", (req, res)=> {
    console.log(req.body);
    let lesson_id = req.body.lesson;
    let video = req.body.video_links;
    
    lessonModel.findOneAndUpdate(
        { _id: lesson_id }, 
        { $push: { video_link: video} },
      
    )
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
    

});


module.exports = router;