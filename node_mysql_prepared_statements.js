
const mysql = require('mysql');

//initialize mysql connection
const MYSQL_IP="localhost";
const MYSQL_LOGIN="root";
const MYSQL_PASSWORD="root";

let con = mysql.createConnection({
  host:  MYSQL_IP,
  user: MYSQL_LOGIN,
  password: MYSQL_PASSWORD,
  database: "messages_app"
});

con.connect(function(err) {
  if (err){
    console.log(err);
    throw err;
  }
  console.log("Connection with mysql established");
});

  //without parameters
  const nameToFilter="Luke";
  let sql="SELECT * FROM messages_app.contact where first_name='"+nameToFilter+"';";
  con.query(sql, function (err, result) {
    if (err) throw err;
    result.forEach(record=>{
       console.log("Result without parameters:",record);
    });
  });

  //with parameters
  sql="SELECT * FROM messages_app.contact where first_name=?;";
  const parameters=[nameToFilter];
  con.query(sql,parameters, function (err, result) {
    if (err) throw err;
    result.forEach(record=>{
       console.log("Result with parameters:",record);
    });
  });

