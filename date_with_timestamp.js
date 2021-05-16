
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

  const sql="select m.message,  UNIX_TIMESTAMP(m.when)*1000 as `when` from messages m join contact c on c.id=m.sent_by";
  con.query(sql, function (err, result) {
    if (err) throw err;
    result.forEach(record=>{
       dt = new Date(record.when);
       //record.message
       console.log(record.when, dt);
    });

  });


