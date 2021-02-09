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
    })
    .catch(err => console.log(err))

});


module.exports = router;