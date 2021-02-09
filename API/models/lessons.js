const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.pluralize(null);

const lessonsSchema = new Schema({

    title:  String, 
    description: String,
    video_link:[{ 
            title: String,
            url: String
        }],
    exercises: [{ 
        title: String,
        url: String 
    }]
    
});

const Lesson = mongoose.model("lessons", lessonsSchema);

module.exports = Lesson;