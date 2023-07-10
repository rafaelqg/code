const mysql = require('mysql');
//initialize mysql connection
const MYSQL_IP="localhost";
const MYSQL_LOGIN="";
const MYSQL_PASSWORD="";
let con = mysql.createConnection({host:  MYSQL_IP,user: MYSQL_LOGIN,password: MYSQL_PASSWORD,database: "sakila"});
con.connect(function(err) { if (err) throw err; console.log("Connection with mysql established");});
//initialize cassandra connection
let credentials ={ "clientID": "","clientSecret": "", "token": ""}
const { Client } = require("cassandra-driver");
async function run() {
  const client = new Client({cloud: { secureConnectBundle: "secure-connect-cassandra-db.zip"}, credentials: {username: credentials.clientID, password: credentials.clientSecret}});
  await client.connect();
  await client.execute("DROP TABLE IF EXISTS cassandra_keyspace.rentals");
  const SQL_RENTALS_CREATE_TABLE = "CREATE TABLE cassandra_keyspace.rentals (customer text,staff text, rental_id INT primary key, rental_date timestamp, amount FLOAT);";
  await client.execute(SQL_RENTALS_CREATE_TABLE);
  let sql=`SELECT concat(concat(c.first_name," "), c.last_name) as "Customer", concat(concat(s.first_name," "), s.last_name) as "Staff", r.rental_id, r.rental_date, p.amount
  FROM sakila.payment p
  inner join customer c on c.customer_id = p.customer_id
  inner join staff s on s.staff_id = p.staff_id
  inner join rental r on r.rental_id = p.payment_id  order by 1`;
  con.query(sql, function (err, result) {
  result.forEach(record=>{ //write data on cassandra
    let sql ="insert into cassandra_keyspace.rentals (customer, staff, rental_id, rental_date, amount)";
    sql+= ` values('${record["Customer"]}','${record["Staff"]}',${record["rental_id"]},'${new Date(record["rental_date"]).toISOString()}',${record["amount"]})`;
    client.execute(sql);
  });
});
}
run();
