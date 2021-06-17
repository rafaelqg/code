//npm install express
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//To access package body content
const jsonParser = bodyParser.json() // create application/json parser
const urlencodedParser = bodyParser.urlencoded({ extended: false }) // create application/x-www-form-urlencoded parser

//inicialize web server
app.listen(3333);

app.post('/form-urlencoded',urlencodedParser, function (req, res) {
  console.log("POST received on application/x-www-form-urlencoded");
  console.log("Query",req.query);
  console.log("Body", req.body);
  console.log("paramA", req.body.paramA);
  console.log("paramA", req.body.paramB);
  //user feedback
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.send("{result: 1}");
});

app.post('/jsonbody',jsonParser, function (req, res) {
  console.log("POST received.");
  console.log("JSON body:",req.body);
  //let obj=JSON.parse(req.body);
  console.log("Name:", req.body.name);
  //user feedback
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.send("{result: 1}");
});


console.log("node express is running");
