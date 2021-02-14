//npm install cassandra-driver
let cassandra = require('cassandra-driver'); 
let authProvider = new cassandra.auth.PlainTextAuthProvider('Username', 'Password');
const keyspace="nosql_db_cassandra_example";
let contactPoints = ['localhost'];
let client = new cassandra.Client({
  contactPoints: contactPoints, 
  keyspace:keyspace,localDataCenter: 
  'datacenter1'
});
 
//let query = 'select * from cyclist_byname'; 
let query = 'select * from cyclist_byname where firstname=? and lastname=?'; 
//let parameters=[];
let parameters=["Rafael", "Gonçalves"];
client.execute(query, parameters, function(error, result) {
  if(error!=undefined){
    console.log('Error:', err);
  }else{
    console.table(result.rows);
  }
});