const mysql = require('mysql');
//initialize mysql connection
const MYSQL_IP="localhost";
const MYSQL_LOGIN="root";
const MYSQL_PASSWORD="root";

let con = mysql.createConnection({
  database: "messages_app",
  host:  MYSQL_IP,
  user: MYSQL_LOGIN,
  password: MYSQL_PASSWORD,
});

con.connect(function(err) {
  if (err)throw err;
  console.log("Connection with mysql established");
});

sql="SELECT * FROM contact";
//sql="SELECT * FROM messages_app.contact";
//sql="SELECT * FROM world.city";
const parameters=[];
con.query(sql,parameters, function (err, result) {
  if (err) throw err;
  result.forEach(record=>{
      console.log("Results:",record);
  });
});

