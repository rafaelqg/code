//npm install mongodb

const {MongoClient} = require('mongodb');
const uri = "mongodb://localhost:27017/";//$ mongo mongodb://<host>:<port>
const client = new MongoClient(uri);

client.connect().then(function(){
    //client.db().



    client.db().admin().listDatabases().then(function(databases){
        console.log("Databases:",databases);
    });
    
    //.db(): Create a new Db instance sharing the current socket connections.
    //admin():Object to give access to administrtives commands on mongodb
});