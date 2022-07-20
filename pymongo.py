from pymongo import MongoClient

#change the MongoClient connection string to your MongoDB database instance
client = MongoClient("mongodb://localhost:27017/")
db = client.company # db name

docCollection = document = db.employees.find({});
for obj in docCollection:
    print("looping", obj)
document = db.employees.find_one({})

if document is not None:
    print('A sample document:', document, type(document))
    print("Dictonary/indexed access", document['name'], document['LastName'], document['_id'])
    print("Dictonary/get method",document.get('name'), document.get('LastName'), document.get('_id'))
    result = db.employees.update_one({'_id': document['_id']}, {"$set": {'name': document['name'].upper()}})
    print("Update result", result,str(result.modified_count) )

result = db.employees.insert_one(
    {"name": "James", "LastName": "Gordon"},
 )
print("Insert one result", result.inserted_id)

result = db.employees.insert_many([
    {"name": "Clark", "LastName": "Kent"},
    {"name": "Bruce", "LastName": "Wayne"},
    ])
print("Insert many result", result.inserted_ids, result.inserted_ids[0])

#result = db.employees.delete_many({})
#print("Deleted documents:", result.deleted_count)
