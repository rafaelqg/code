import json #https://docs.python.org/3/library/json.html
from types import SimpleNamespace #https://docs.python.org/3/library/types.html

print("### JSON to object example with multilevel objects ####")
data = '{"name": "Ramza Beoulve", "details": {"firstName": "Ranza", "lastName": "Beoulve"}}'

# Parse JSON into an object with attributes corresponding to its keys.
#SimpleNamespace: function that creates dynamically names for object properties
obj = json.loads(data, object_hook = lambda obj: SimpleNamespace( **obj )) # ** spread operator
print("Name:", obj.name)
print("details.firstName" , obj.details.firstName, "details.lastName", obj.details.lastName)

print("### JSON to object example with array of objects ####")
data = '[{"name": "Ramza Beoulve", "details": {"firstName": "Ranza", "lastName": "Beoulve"}},{"name":"Agrias Oaks", "details": {"firstName": "Agrias", "lastName": "Oaks"}}]';
arrayFromJson = json.loads(data, object_hook = lambda obj: SimpleNamespace( **obj ))
for obj in arrayFromJson:
    print(obj.name)


