import pandas as pd
import matplotlib.pyplot as plt

#https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.filter.html
#define series specifing index
seriesObject = pd.Series(
    data=[11, 8, 16, 5, 10, 12, 14, 10, 14, 5, 11, 14],
    index=['Bimester 1/2021', 'Bimester 2/2021', 'Bimester 3/2021', 'Bimester 4/2021', 'Bimester 5/2021', 'Bimester 6/2021','Bimester 1/2022','Bimester 2/2022', 'Bimester 3/2022', 'Bimester 4/2022', 'Bimester 5/2022','Bimester 6/2022'],
    name="Sales report"
)
print ("Series:", seriesObject)
#seriesObject.plot.bar(title="Sales", legend=True, xlabel="Sales", ylabel="Quantity")
#plt.show()
print("### Experimenting filter with like ###")
filteredSeries = seriesObject.filter(like="1/")

print("Filtered with like:", filteredSeries)

print("### Experimenting filter with regex ###")
filteredSeries = seriesObject.filter(regex="B*2022")
print("filtered with regex:", filteredSeries)


print("### Experimenting filter with items ###")
filteredSeries = seriesObject.filter(items=['Bimester 1/2021', 'Bimester 2/2021','Bimester 1/2022', 'Bimester 2/2022'])
print("filtered with items:", filteredSeries)



print("### Experimenting filter with WHERE ###")
#https://pandas.pydata.org/pandas-docs/version/0.23/generated/pandas.Series.where.html
filteredSeries = seriesObject.where (cond= seriesObject >10, other=0)
filteredSeries.plot.bar(title="Sales", legend=True, xlabel="Sales", ylabel="Quantity")
plt.show()
print("Series filtred with query", filteredSeries)


