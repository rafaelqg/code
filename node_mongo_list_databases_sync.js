//npm install mongodb
//https://developer.mongodb.com/quickstart/node-crud-tutorial


const {MongoClient} = require('mongodb');
const uri = "mongodb://localhost:27017/";//$ mongo mongodb://<host>:<port>
const client = new MongoClient(uri);

async function main() { 

        await client.connect();
        await listDatabases(client);
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main();