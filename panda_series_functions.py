import pandas as pd
# Define series without specify index
pandasSeriesObject = pd.Series(data=[5, 3, 3, 1, 2, 5, 8,9,3,20])
#functions example
mean = pandasSeriesObject.mean()
max = pandasSeriesObject.max()
min = pandasSeriesObject.min()
mode = pandasSeriesObject.mode()
product = pandasSeriesObject.product()
sum = pandasSeriesObject.sum()
variance = pandasSeriesObject.var()
standardDeviation = pandasSeriesObject.std()
sortedValues = pandasSeriesObject.sort_values()
#presenting outputs
print("Series Sample",pandasSeriesObject)
print("mean", mean)
print("max", max)
print("min", min)
print("mode", mode)
print("product", product)
print("sum", sum)
print("variance", variance)
print("standardDeviation", standardDeviation)
print("sorted values", sortedValues)
#map function example
def mapFunctionReduceOne(el):
    print ("mapping", el)
    return el - 1;
mapped = pandasSeriesObject.map(mapFunctionReduceOne)
print("Mapped series:", mapped)

