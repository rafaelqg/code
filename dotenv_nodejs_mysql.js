const mysql = require('mysql'); //npm install mysql
const dotenv = require('dotenv');//npm install dotenv
let result = dotenv.config(); 
console.log("result", result);
console.log("env variables", process.env);
//initialize mysql connection
const MYSQL_IP = "localhost"; //process.env.MYSQL_IP;
const MYSQL_LOGIN = "root"; //process.env.MYSQL_LOGIN;
const MYSQL_PASSWORD = "root"; //process.env.MYSQL_PASSWORD;
const DB_NAME = "sakila"; //process.env.DB_NAME;
console.log("Reading env variables:",process.env.MYSQL_IP);
let con = mysql.createConnection({
  host:  MYSQL_IP,
  user: MYSQL_LOGIN,
  password: MYSQL_PASSWORD,
  database: DB_NAME
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connection with mysql established");
});
sql="SELECT first_name, last_name FROM sakila.actor limit 5";
con.query(sql, function (err, result) {
      console.log("result", result);
});
/*.env content
MYSQL_IP="localhost"
MYSQL_LOGIN="root"
MYSQL_PASSWORD="root"
DB_NAME="sakila"
*/

