//npm install mongodb
const {MongoClient} = require('mongodb');
const uri = "mongodb://localhost:27017";//$ mongo mongodb://<host>:<port>
const client = new MongoClient(uri);

client.connect().then(function(){
    let db=client.db("company");//access or create a new database
    let collection = db.collection('objects');// access or create a new collection
    let queryObject = { 
        //description:  /.*Object.*/ 
        description:  "Object D" 
    };
    let newAndUpdatedValues = { $set: {updatedTime: new Date() } };
    const options={upsert:true};
    collection.updateMany(queryObject , newAndUpdatedValues, options, function(error, result) {
        console.log(error, result);
    });
});
