from functools import reduce
import math

items = [1, 2, 3, 4, 5]
print("### REDUCE ###")

print("### interface:: reduce (function(counter, element), list) ###")
print ("list", items)
length=len(items)
#sum
sum = reduce((lambda x, y: x + y), items)
print("SUM", sum)
#average
average = sum/length
print("AVERAGE", sum/length)
#product
def product(counter, element):
    print ("element", element, "counter", counter)
    return counter*element
product = reduce(product, items)
print("PRODUCT",product)

#variance
print("####VARIANCE####")
counter=0
for element in items:
    counter+=((element-average)**2)/(length-1)
print("VARIANCE",counter)
print("STANDARD DEVIATION",math.sqrt(counter))
