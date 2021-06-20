superHeros= {}
superHeros["Spider man"] = "Peter Park"
superHeros["Hulk"] = "Bruce Banner"
superHeros["Iron man"] = "Tony Stark"
print("--- Dictionary ---")
print("Dictonary", superHeros)
print("superHeros['key']", superHeros["Hulk"])


print("--- Dictionary .items() - loop though elements --- ")
for hero, name in superHeros.items():
    print("The identity of %s is %s" % (hero, name))

superHeros["Iron man"] = "Rafael Goncalves"

print("--- Dictionary .items() - loop though elements --- ")
for hero, name in superHeros.items():
    print("The identity of %s is %s" % (hero, name))
