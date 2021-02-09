var express = require("express");
var router = express.Router();
let reportModel = require('../models/report');


// Save data for reports
router.post("/", (req, res)=> { 

    let report_data = req.body;
    let report = new reportModel(report_data);

    report.save()
    .then((result) => {
        res.send(result);
    })
    .catch(err => console.log(err))

});

// get the most recent report
router.get("/latestReport", (req, res)=> { 


    // let report = new reportModel({});

    reportModel.find({})
    .sort({'_id': -1})
    .limit(1)
    .exec(function(err, result) {
        if(err) err => console.log(err);
        res.json(result);
    });


   

});

module.exports = router;