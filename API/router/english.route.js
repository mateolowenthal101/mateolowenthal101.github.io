var express = require("express");
var router = express.Router();
let mongoose = require('mongoose');
const englishModel = require('../models/english');



// find the most recent
router.post("/", (req, res)=> {


    let english = new englishModel(req.body) 
    
    
    english.save()
        .then((result) => {
            res.send(result);
        })
        .catch(err => console.log(err))

});

router.get("/getAll", (req, res) => {


    englishModel.find({})
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
    englishModel.findById(id)
    .select("lessons")
    .populate('lessons')
    .exec()
    .then((result) => {
        res.send(result);
    })
    .catch(err => console.log(err))


});


module.exports = router;

