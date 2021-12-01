print("#### USING IF ####")

temperature=8;
if temperature>=30:
    print ("It is very hot.... :( ")

if(temperature<30 and temperature>=25):
    print ("It is warm today...")

if(temperature>=18 and temperature<25):
    print ("It is good today :) ")

if(temperature<18 and temperature>10):
    print ("It is a little cold today...")

if(temperature<10):
    print ("It is very cold today....")


print("#### USING ELIF ####")
temperature=8;
if temperature>=30:
    print ("It is very hot.... :( ")
elif(temperature<30 and temperature>=25 ):
    print ("It is warm today...")
elif(temperature>=18 and temperature<25):
    print ("It is good today :) ")
elif(temperature<18 and temperature>10):
    print ("It is a little cold today...")
elif(temperature<10):
    print ("It is very cold today....")


print("#### USING IF ELSE ####")
temperature=15;
if(temperature>=0):
    print("It is above zero :)")
else:
    print("It is below zero")
