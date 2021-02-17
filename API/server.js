
// Library declaration
const express = require('express');
const app = express();
const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);


// Configuration
const port = 3000;
var cors = require("cors");
const dbURI = "mongodb://localhost/mateo_lowenthal";
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


// Routes declarations
const lessonsRoutes = require("./router/lessons.routes");
const assignmentRoutes = require("./router/assignments.route");
const englishRoutes = require("./router/english.route");
const spanishRoutes = require("./router/spanish.route");
const reportRoutes = require("./router/report.route");
const mathematicsRoutes = require("./router/mathematics.route");

// Rotue Configurations

app.use("/lessons", lessonsRoutes);
app.use("/report", reportRoutes);
app.use("/assignment", assignmentRoutes);
app.use("/english", englishRoutes);
app.use("/spanish", spanishRoutes);
app.use("/mathematics", mathematicsRoutes);
app.use("/*", (req, res)=>{res.send("error")})



// Database connection and application Starts
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(port))
    .catch(err => console.log(err));


