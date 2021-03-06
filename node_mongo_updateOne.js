//npm install mongodb
const {MongoClient} = require('mongodb');
const uri = "mongodb://localhost:27017";//$ mongo mongodb://<host>:<port>
const client = new MongoClient(uri);

client.connect().then(function(){
    let db=client.db("company");//access or create a new database
    let collection = db.collection('objects');// access or create a new collection
    let queryObject = { description: "Object A" };
    let newAndUpdatedValues = { $set: {description: "OBJECT A", updatedTime: new Date() } };
    collection.updateOne(queryObject , newAndUpdatedValues, function(error, result) {
        console.log(error, result);
    });
});
