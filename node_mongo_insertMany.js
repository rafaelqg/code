//npm install mongodb

const {MongoClient} = require('mongodb');
const uri = "mongodb://localhost:27017";//$ mongo mongodb://<host>:<port>
const client = new MongoClient(uri);

client.connect().then(function(){
    let db=client.db("company");//access or create a new database
    let collection = db.collection('objects');// access or create a new collection

    
    let listOfObjects=[
        {description: "Object A"},
        {description: "Object B"},
        {description: "Object C"}
    ];
   const options = { ordered: true };// prevents insertion if one fails
   collection.insertMany(listOfObjects, options).then (function (result){
    console.log("Result", result);
   });
  
    

});
