var express = require("express");
var router = express.Router();
let assignmentsModel = require("../models/assignments");

// create assignment
router.post("/", (req, res)=> {

    let assignment_data = req.body
    console.log(assignment_data);
    let assignment = new assignmentsModel(assignment_data);
    console.log("\n new shit");
    console.log(assignment);

    assignment.save()
    .then((result) => {
            res.send(result);
    })
    .catch(err => console.log(err))

});

// Get the most recent assignments

router.get("/getAssignments", (req,res) => {

    assignmentsModel.find({})
    .sort({'_id': -1})
    .limit()
    .exec(function(err, result) {
       if(err) err => console.log(err);
       res.json(result);
    });

})

module.exports = router;

