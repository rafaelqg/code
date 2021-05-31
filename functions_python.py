'''
#--- function with no parameters ---
print("--- function with no parameters ---")
def sayHello():
    print ("Hello! I am a function")

sayHello()


#--- function with parameters ---
print("--- function with parameters ---")
def sum(a, b):
    s=a+b
    print ("sum "+ str (s) )

#using constants as parameters
sum(3,5)

#using variables as parameters
x=3
y=4
sum(x,y) # variables are passed through values, not references, when changed inside the function, does not chance outside

sum()

#--- function with default parameter ---
print("--- function with default parameter ---")
def myCountry (country= "BRASIL"):
    print ("I am from "+ country)
myCountry()
myCountry("Deutschland")
country="England"
myCountry(country)
print(country)# string data type is also passed through value, not reference

#--- function with parameters of list type ---
print("--- function with parameters of list type ---")
def functionArrayParam (list):
    for x in list:
        print (x)
    list.pop()

fruits = ["apple", "banana", "strawberry"]
functionArrayParam (fruits) #list is an object than its value is passed as a reference
print(fruits)

#--- return keyword ---
print("--- return keyword ---")
def square(num):
    return num*num
x=square(2)
print("SQUARE: "+str(x))
'''
#--- arbitrary parameters ---
print("--- arbitrary parameters ---")
def arbitraryParameters (*nums):
    sum=0
    for n in nums:
        sum+= n
    return sum

x=arbitraryParameters(9,4,2)
print("Arbitrary parameters: "+str(x))

x=arbitraryParameters(9,4)
print("Arbitrary parameters: "+str(x))

x=arbitraryParameters(9)
print("Arbitrary parameters: "+str(x))

x=arbitraryParameters()
print("Arbitrary parameters: "+str(x))
