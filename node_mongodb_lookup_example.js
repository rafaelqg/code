//npm install mongodb
const {MongoClient} = require('mongodb');
const uri = "mongodb://localhost:27017";//$ mongo mongodb://<host>:<port>
const client = new MongoClient(uri);

client.connect().then(function(){
    let db=client.db("company");//access or create a new database
    let collection = db.collection('objects');// access or create a new collection

    let queryObject=[{
        //description: "Object A",
       // $or: [{description: "Object D"}, {description: "Object B"}]
       $lookup:{
       from: "objects_related",
       localField: "description",
       foreignField: "object_key",
       as: "related_docs"
         }
    }];

   
    let cursor=collection.aggregate(queryObject);
    cursor.toArray().then( 
        function(objects){
            console.log("Output:", objects);
            objects.forEach(obj=>{
                if(obj.related_docs.length>0){
                    console.log(obj.description, "Related field type:", obj.related_docs[0].type);
                }
            })
            
        }
    );
});
