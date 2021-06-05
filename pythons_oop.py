class Product:
    #attibutes
    description = ""  #public attribute
    _price = 0.0  # protected attribute
    __category="" #private attribute


    #constructor (optional)
    def __init__(self, description="", price=0.0):
        self.description=description
        self.__price=price
        self.__debugObject()

    #methods
    def getDescription(self):
        return self.description

    def printDescription(self):
        print("This is the product description: "+self.description)

    def getPrice(self):
        return self.__price

    def setPrice(self,price):
        self.__price = price

    def getCategory(self):
        return self.__category

    def setCategory(self,category):
        self.__category=category

    def __debugObject(self):
        print("Description:" +self.description)
        print("Price:"+str(self.__price))
        print("Category:" + str(self.__category))

#instanciate objects
print("-- Intanciating objects --")
productA = Product()

#call object methods
print("-- calling objects methods --")
productA.printDescription()
print (productA.description)
#print (productA.__category)#error because price is a private attribute
#print(productA.__debugObject())#error because this is a private method
print (productA.getPrice())
productA.setPrice(25.5)
print(productA.getPrice())

productA.setCategory("Cloth")
print(productA.getCategory())

# inherance
print("-- Inherance --")
class ProductDiscount(Product):
    __discount: 0.0

    def getPrice(self):
        return super().getPrice() -(super().getPrice() * self.__discount)

    def setDiscount(self, discount):
        self.__discount = discount

    def getDiscount(self):
        return self.__discount

productB = ProductDiscount()
productB.description="Jacket"
productB.setPrice(200.60)
productB.setDiscount(0.2)
print(productB.getPrice())

#polymorphism
print("-- polymorphism --")
list=[]
list.append(productA)
list.append(productB)

for product in list:
    print("Description: "+product.description)
    print("Price: " + str(product.getPrice()))

