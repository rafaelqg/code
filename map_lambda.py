print("### MAP ###")
names = ["Peter Parker", "Tony Stark", "Natasha Romanova"]
print("names:")
print(names)

# Using lambda function
namesFormatted = list(map(lambda el: el.upper(), names))
print("names formatted with lambda:")
print(namesFormatted)


# Using norma (def) function
def mapName(name):
    parts = name.split(" ")
    lastName=parts[len(parts)-1]
    firstName=parts[0]
    nameFormated= (lastName+", " +firstName).upper()
    return nameFormated
print("names formatted with DEF function:")
namesFormatted = list(map(mapName, names))
print(namesFormatted)

