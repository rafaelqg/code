import pandas as pd
import matplotlib.pyplot as plt  #provides interface like MATLAB

# Define series without specify index
pandasSeriesObject = pd.Series(data=[5, 3, 3, 1, 2, 5],name="Facilities production 2012")
pandasSeriesObject.plot(legend=True, color="#F00")
print ("no indexed series", pandasSeriesObject)

#define series specifing index
labelIndexedSeriesObject = pd.Series(
    data=[11, 8, 16, 5, 10, 12],
    index=['Bimester 1','Bimester 2','Bimester 3', 'Bimester 4', 'Bimester 5', 'Bimester 6'],
    name="Facilities production 2022"
)
print ("indexed series", labelIndexedSeriesObject)
labelIndexedSeriesObject.plot.bar(xlabel="Period",
                            ylabel="Products per hour",
                            rot=0, #rot: text orientation
                            color="#CCC",
                            legend=True
                            )

plt.show() # shows the chart that was prepared by plot() function
