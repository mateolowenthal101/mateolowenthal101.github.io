const mongoose = require("mongoose");
mongoose.pluralize(null);
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
 
    
    title: String,
    icon: String,
    description: String,
    solutions_links: [
        {
            exercise_name: String,
            url: String
        }
    ]


    
    
});

const Assignment = mongoose.model("assignments", assignmentSchema);

module.exports = Assignment;