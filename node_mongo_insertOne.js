//npm install mongodb

const {MongoClient} = require('mongodb');
const uri = "mongodb://localhost:27017";//$ mongo mongodb://<host>:<port>
const client = new MongoClient(uri);

client.connect().then(function(){
    let db=client.db("company");//access or create a new database
    let collection = db.collection('employees');// access or create a new collection
    let employee={
        name: "Rafael",
        lastName: "Gonçalves"
    }
    
    collection.insertOne(employee, function(err, res) { //add document to collection
        if (err!= undefined) throw err;
        console.log("Document inserted",employee);
    });
    

});