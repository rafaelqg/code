//npm install express
const express = require('express');
const app = express();

app.listen(3333);

app.get('/', function (req, res) {
    res.send('Node JS: Express home page - First access');
    
  })

  app.get('/index', function (req, res) {
    res.send('GET request to the index page');
    //Acesses http get attributes>req.query.attribute_name
    console.log("Parameter id:",req.query.id);
  })
  
  // POST method route
  app.post('/', function (req, res) {
    res.send('POST request to the homepage')
  })

  console.log("node express is running");
