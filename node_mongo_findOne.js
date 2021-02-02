//npm install mongodb

const {MongoClient} = require('mongodb');
const uri = "mongodb://localhost:27017";//$ mongo mongodb://<host>:<port>
const client = new MongoClient(uri);

client.connect().then(function(){
    let db=client.db("company");//access or create a new database
    let collection = db.collection('objects');// access or create a new collection

    let queryObject={
        //description: "Object D",
        $or: [{description: "Object D"}, {description: "Object B"}]
    };
    collection.findOne(queryObject, function(error, result) {
        if (error) throw error;
        console.log("result", result);// result is null when no document is found.
      });

});
