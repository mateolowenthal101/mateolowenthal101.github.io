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


module.exports = router;

