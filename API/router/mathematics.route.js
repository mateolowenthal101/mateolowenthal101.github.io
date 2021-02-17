var express = require("express");
var router = express.Router();
const mathematicsModel = require('../models/mathematics');
let mongoose = require('mongoose');

// find the most recent
router.post("/", (req, res)=> {

    let mathematics_data = req.body;
    let mathematics = new mathematicsModel(mathematics_data);
    
    mathematics.save()
        .then((result) => {
            res.send(result);
        })
        .catch(err => console.log(err))

});

router.get("/getAll", (req, res) => {

    mathematicsModel.find({})
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
    mathematicsModel.findById(id)
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
    
    mathematicsModel.findOneAndUpdate(
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