import pandas as pd
import matplotlib.pyplot as plt
index = ["Notebook", "Smartphone", "Monitor", "Coffee machine"]
dataSerieA = [5000, 2200, 3100, 4500]
dataSerieB = [4800, 2000, 2900, 4600]
dataSerieC = [4700, 2050, 2989, 4500]
data = {'Company A': pd.Series(data=dataSerieA, index= ["Notebook", "Smartphone", "x", "a"]),
        'Company B': dataSerieB,
        'Company C': dataSerieC,
        }
#pd.Series(data=dataSerieA, index= index)
df = pd.DataFrame(data=data, index=index)
print("Dataframe: Price comparison", df)
df.plot.bar(title="Price comparison")
plt.show()
