//npm install mongodb
const {MongoClient} = require('mongodb');
const uri = "mongodb://localhost:27017";//$ mongo mongodb://<host>:<port>
const client = new MongoClient(uri);

client.connect().then(function(){
    let db=client.db("company");//access or create a new database
    let collection = db.collection('objects');// access or create a new collection

    let queryObject={
        //description: "Object D",
        //description: "Object A",
       // $or: [{description: "Object D"}, {description: "Object B"}]
    };

    //find: returns a cursor object
    //cursor can be iterated utilizing next(), toArray(), forEach() methods
    //parameters: query object and options
    const options = {
        sort: { description: 1 },
        projection: { _id: 0, description: 1}
      };
    let cursor=collection.find(queryObject,options);
    cursor.toArray().then( 
        function(objects){
            console.log("Output:", objects);
        }
    );
});
