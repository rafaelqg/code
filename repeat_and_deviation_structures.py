#Part 1: if, elif, else
a = 33
b = 33
#if
print ("--- IF deviation structure ---")
if b == a:
  print("b is greater than a")


#if, elif
print ("--- IF/ELIF deviation structure ---")
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")

#if, elif, else
print ("--- IF/ELIF/ELSE deviation structure ---")
a = 200
b = 33
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")
else:
  print("a is greater than b")


#Part 2: while
print ("--- WHILE repeat structure ---")
a = 0
while a < 10:
   a = a + 1
   print (a)


#Part 3: for - range function
# 1 parameter: initiate with 1, increment 1, until the parameter informed.
print ("--- FOR range function:  1 parameter ---")
sum=0
for i in range(10):
    print(i)
    sum+=i
print ("sum: "+ str(sum))

# 2 parameters: initiate with parameter first parameter, increment 1, until the last parameter.
print ("--- FOR range function:  3 parameters ---")
x = range(3, 6)
for n in x:
  print(n)

# 3 parameters: initiate with parameter first parameter, until the second parameter, increment with the last parameter
print ("--- FOR range function: 3 parameters ---")
x = range(3, 20, 2)
for n in x:
    print(n)


sum=0
for i in range(1,10,2):
    print(i)
    sum += i
print("sum: " + str(sum))

#Part 4: Work with lists - loop all elements within a list
print ("--- List: loop over its values ---")
myList = [1, 2, 3, 4]
for number in myList:
    print(number);
    print ("Number doubled:" +str(number * 2))
