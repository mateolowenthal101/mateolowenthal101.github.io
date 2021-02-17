var express = require("express");
var router = express.Router();
const spanishModel = require('../models/spanish');
let mongoose = require('mongoose');

// find the most recent
router.post("/", (req, res)=> {

    let spanish_data = req.body;
    let spanish = new spanishModel(spanish_data)
    
    spanish.save()
        .then((result) => {
            res.send(result);
        })
        .catch(err => console.log(err))

});

router.get("/getAll", (req, res) => {

    spanishModel.find({})
    .populate('lessons')
    .exec()
    .then((result) => {
        res.send(result);
    })
    .catch(err => console.log(err))


});




router.get("/getLessons/:id", (req, res) => {

    let id = req.params.id
    console.log(id)
    spanishModel.findById(id)
    .select("lessons")
    .populate('lessons')
    .exec()
    .then((result) => {
        res.send(result);
    })
    .catch(err => console.log(err))


});




// find the most recent
router.put("/addLesson", (req, res)=> {
    console.log(req.body);
    let course_id = req.body.course;
    let lesson_id = req.body.lesson;
    
    spanishModel.findOneAndUpdate(
        { _id: course_id }, 
        { $push: { lessons: lesson_id } },
      
    )
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
    

});



module.exports = router;

