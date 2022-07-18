const {MongoClient} = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
client.connect().then(function(){
    let db = client.db("company");
    let collection = db.collection('objects');
    let listOfObjects = [
        {description:"ObjectA"},
        {descriptionB:"ObjectB"},
        {descriptionC:"ObjectC"}
    ];
    const options = {ordered:true};//preventsinsertionifonefails
    collection.insertMany(listOfObjects, options).then(function(result){
        console.log("Result",result);
    });
    }
);
