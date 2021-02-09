const mongoose = require("mongoose");
mongoose.pluralize(null);
const Schema = mongoose.Schema;


const MathSchema = new Schema({

    course_title:  String, 
    course_description: String,
    course_progress:  String,
    lessons: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'lessons'
    }]
    
});

const Math = mongoose.model("mathematics", MathSchema);

module.exports = Math;
