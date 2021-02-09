const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.pluralize(null);


const reportSchema = new Schema({

    date_init:  String, 
    date_end: String,
    general_english:   [Number],
    general_spanish: [Number],
    general_mathematics: [Number],
    english_scores: [Number],
    spanish_scores: [Number],
    mathematics_scores: [Number]
    
},{ timestamps: true });

const Report = mongoose.model("report", reportSchema);

module.exports = Report;