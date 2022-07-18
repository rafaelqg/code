const {MongoClient} = require('mongodb');
const uri = "mongodb://localhost:27017";//$ mongo mongodb://<host>:<port>
const client = new MongoClient(uri, { useUnifiedTopology: true });

client.connect().then(function(){
        let db=client.db("company");//access or create a new database
        let collection = db.collection('employees');// access or create a new collection
        //insert objects
        let employee = {
            name: "Mickey",
            lastName: "Mouse"
        }    
        
        collection.insertOne(employee, function(err, res) { //add document to collection
            if (err != undefined) throw err;
            console.log("1 document inserted");
        });

        employee={
            fullName: "Donald Duck",
        }    
        
        collection.insertOne(employee, function(err, res) { //add document to collection
            if (err != undefined) throw err;
            console.log("1 document inserted");
        });
        let queryObject={};

        let cursor=collection.find(queryObject);
        cursor.toArray().then( 
            function(objects){
                console.log("find() output:", objects);
                objects.forEach(element => {
                    if(element.fullName !== undefined){
                        console.log("I have the fullName attribute",element);
                    }else{
                        console.log("I do not have the fullName attribute",element);
                    }
                });
            },function(){}
        );
    });
    
