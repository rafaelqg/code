//npm install express
//npm install mysql
const express = require('express');
const mysql = require('mysql');
const app = express();

//initialize mysql connection
const MYSQL_IP="localhost";
const MYSQL_LOGIN="root";
const MYSQL_PASSWORD="root";

let con = mysql.createConnection({
  host:  MYSQL_IP,
  user: MYSQL_LOGIN,
  password: MYSQL_PASSWORD
});

con.connect(function(err) {
  if (err){
    console.log(err);
    throw err;
  }
  console.log("Connection with mysql established");
});

//inicialize web server
app.listen(3333);


  app.get('/actors', function (req, res) {
        const sql="SELECT * FROM sakila.actor";
        con.query(sql, function (err, result) {
          if (err) throw err;
          //console.log("Result: ",result);
          result.forEach(record=>{
              console.log(record.first_name,record.last_name);
          });
          res.status(200);
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(result));
        });
  })

  app.post('/actors', function (req, res) {
    let firstName=req.query.firstName;
    let lastName=req.query.lastName;
    const sql="insert into sakila.actor (first_name,last_name) values ('"+firstName+"','"+lastName+"')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.status(200);
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(result));
    });
})

  //define routes and its behaviors
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
 
