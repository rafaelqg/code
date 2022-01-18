# https://pymongo.readthedocs.io/en/stable/tutorial.html
# python -m pip install pymongo
from pymongo import MongoClient
import datetime
client = MongoClient('mongodb://localhost:27017/')
#Acessing a especific database
db = client.company
#Acessing a especific collection
collection = db.employees
print("### CRUD: Create, Recovery, Updade and Delete")

print("### CRUD: Recovery")
print("### Find one ###")
document = collection.find_one()
print(document)
print("### Find  ###")
resultSet = collection.find({'name': 'Rafael'})
for document in resultSet:
    print(document)
print("### find all  ###")
resultSet = collection.find({})
for document in resultSet:
    print(document)

print("### CRUD: Create")
print("### .insert_one()  ###")
document = {
        "name": "Adrian",
        "lastName": "Tepes"
}
print("Collection document count BEFORE insert:", collection.count_documents({}))
insert_result = collection.insert_one(document)
print("Collection document count AFTER insert:", collection.count_documents({}))
id = insert_result.inserted_id
print("Generated id on insert:", id)

print("### CRUD: Update")
print("### update: update_one or update_many  ###")
query = {"_id": id}
newValues = {"$set": {"updated_on": datetime.datetime.utcnow()}}
collection.update_one(query, newValues)
print("Updated object:", collection.find_one(query))
print("### update_many ###")
query = {"name": {"$ne": "Adrian"}} # != or <> => different than operator
newValues = {"$set": {"updated_on": datetime.datetime.utcnow()}}
collection.update_many(query, newValues)
resultSet = collection.find({})
for document in resultSet:
    print(document)

print("### CRUD: Delete")
print("### Delete: .delete_one or .delete_many ###")
query = {"name": "Adrian"}
print("Collection document count BEFORE delete:", collection.count_documents({}))
collection.delete_many(query)
print("Collection document count AFTER delete:", collection.count_documents({}))
resultSet = collection.find({})
for document in resultSet:
    print(document)
