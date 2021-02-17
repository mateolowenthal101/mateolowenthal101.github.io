const axios = require('axios');
const fs = require('fs');
const path = require("path");
let dir = path.resolve(__dirname, "db");
let assets = path.resolve(__dirname, "../", "../", "src", "assets", "db");
const URL = require("../generators/metadata").URL;

console.log(assets);

const assignments = axios.get(URL + "/assignment/getAssignments")
    .then((result => API2JSON(result.data, "/assignments.json")))
    .catch(error => console.log(error));

const reports = axios.get(URL + "/report/latestReport")
.then((result => API2JSON(result.data, "/reports.json")))
.catch(error => console.log(error));


const english = axios.get(URL + "/english/getAll")
.then((result => API2JSON(result.data, "/english.json")))
.catch(error => console.log(error));


const spanish = axios.get(URL + "/spanish/getAll")
.then((result => API2JSON(result.data, "/spanish.json")))
.catch(error => console.log(error));


const mathematics = axios.get(URL + "/mathematics/getAll")
.then((result => API2JSON(result.data, "/mathematics.json")))
.catch(error => console.log(error));


function API2JSON(data, file_name){
    let dataJSON = JSON.stringify(data)
    fs.writeFile(dir + "/" + file_name, dataJSON, (res)=>{console.log(res)});
    fs.writeFile(assets + "/" + file_name, dataJSON, (res)=>{console.log(res)});
}