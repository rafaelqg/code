#Part 1: while
print ("--- WHILE repeat structure ---")
a = 0
while (a < 10):
    a=a+1
    print (a)
    print("next iteration")


#Part 2: for - range function
# 1 parameter: initiate with 1, increment 1, until the parameter informed.
print ("--- FOR range function:  1 parameter (10) ---")
sum=0
for i in range(10):
    print(i)
    sum+=i
print ("sum: "+ str(sum))

# 2 parameters: initiate with parameter first parameter, increment 1, until the last parameter.
print ("--- FOR range function:  2 parameters  (3, 6)---")
x = range(3, 6)
for n in x:
  print(n)

# 3 parameters: initiate with parameter first parameter, until the second parameter, increment with the last parameter
print ("--- FOR range function: 3 parameters (3,20,2)---")
x = range(3, 20, 2)
for n in x:
    print(n)

print ("--- FOR range function: 3 parameters (1,10,2)---")
sum=0
for i in range(1,10,2):
    print(i)
    sum += i
print("sum: " + str(sum))

for i in range(10,100,7):
    print(i)
    sum += i
print("sum: " + str(sum))
