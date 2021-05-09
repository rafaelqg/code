userInput=input("Please, give me a number:")
print (type(userInput))
print(userInput)
print("User has entered:"+userInput)
try:
    print("--- INT CONVERSION ---")
    userInputInt=int(userInput)
    print (type(userInputInt))
    print (userInputInt)
    #print("User has entered:"+userInputInt)
    print("User has entered:"+str(userInputInt))
except:
    print("Error: it was not possible to convert - "+ userInput +" - to int.")

try:
    print("--- FLOAT CONVERSION ---")
    userInputFloat=float(userInput)
    print (userInputFloat)
    #print("User has entered:"+userInputFloat)
    print("User has entered:"+str(userInputFloat))
except:
    print("Error: it was not possible to convert - "+ userInput +" - to float.")
