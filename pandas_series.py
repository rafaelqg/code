import pandas as pd  # Importing pandas to generate the Series object
import numpy as np # Importing numpy for generating random numbers
import matplotlib.pyplot as plt # importing pyplot for drawing histogram

#1. Generate random numbers with numpy
np.random.seed(10) # initialize the random number generator
values = np.random.randn(100) # return a sample from the standard normal distribution
print ("Values", values,"type", type(values))
simpleArray = values.tolist() # convert data type from ndarray to list
print ("Values", simpleArray,"type", type(simpleArray))

#2. Build Panda Series based on random values
s = pd.Series(data=values, name="Random values based on Standard Normal Distribution") # generate a pandas series object
print ("s", s)
print(type(s))

#3. Print the panda Series object based on the matplotlib object - histogram
s.plot(kind='hist', title='Normally distributed random values') # hist computes distribution
plt.show()
