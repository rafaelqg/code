listHeros=["Ryu","Ken","Guile","E. Honda"];
listBadGuys=["Bison","Vega", "Sagat"];

print("--- Loop a list ---");
for element in listHeros:
    print(element);
print("--- len() ---")

print ("listHeros size:"+ str(len(listHeros)))

print("--- append() ---")
#append(): append  the object to the end of the list.
listHeros.append("Blanka")
for element in listHeros:
    print(element)
print ("listHeros size:"+ str(len(listHeros)))

print("--- insert() ---")
#insert(): inserts the object before the given index.
listHeros.insert(2,"Dalcin");
for element in listHeros:
    print(element)

print ("List size:"+ str(len(listHeros)))

print("--- extend() or + ---")
#List Concatenation: We can use + operator to concatenate multiple lists and create a new list.
listAll=listHeros+listBadGuys;
print ("ListAll size:"+ str(len(listAll)))
for element in listAll:
    print(element);

print("--- clonning [:] ---")
#cloning a list
clonedList= listAll[:];
print("Cloned list:");
clonedList[1]="Rafael";
for element in clonedList:
    print(element);

print("Original list:");
for element in listAll:
    print(element);

print("--- in: searching within a list ---")
#Verify if an element is within a list
if "Balrog" in listBadGuys:
    print ("Balrog is in the list")
else:
    print("Balrog is not in the list")

#Verify if an element is within a list
if "Ryu" in listHeros:
    print ("Ryu is in the list")

print("--- index() ---")
#list.index(elem) -- searches for the given element from the start of the list and returns its index. Throws a ValueError if the element does not appear (use "in" to check without a ValueError).
guileIndex=listHeros.index("Guile")
print ("guileIndex:"+str(guileIndex))
#cammyIndex=listHeros.index("Cammy")
#print ("cammyIndex:"+str(cammyIndex))

print("--- remove() ---")
#list.remove(elem) -- searches for the first instance of the given element and removes it (throws ValueError if not present)
print ("listHeros size:"+ str(len(listHeros)))
listHeros.remove("Ryu");
print ("listHeros size:"+ str(len(listHeros)))

print("--- pop() ---")
#list.pop(index) -- removes and returns the element at the given index. Returns the rightmost element if index is omitted (roughly the opposite of append()).
for element in listHeros:
    print(element)
print ("listHeros size:"+ str(len(listHeros)))
el=listHeros.pop()
print("Removed with pop(): "+str(el))
print ("listHeros size:"+ str(len(listHeros)))

print("--- pop(index) ---")
for element in listHeros:
    print(element)
el=listHeros.pop(1)
print("Removed with pop(index): "+str(el))
print ("listHeros size:"+ str(len(listHeros)))

print("--- sort() ---")
#list.sort() -- sorts the list in place (does not return it). (The sorted() function shown later is preferred.)
listHeros.sort()
for element in listHeros:
    print(element)

print("--- reverse() ---")
#list.reverse() -- reverses the list in place (does not return it)
listHeros.reverse()
for element in listHeros:
    print(element)
