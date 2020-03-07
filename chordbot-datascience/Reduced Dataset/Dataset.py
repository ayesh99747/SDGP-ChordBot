import numpy as np
import pandas as pd
import os
from PCP import PCP
CtoN = {'a': 0, 'am': 1, 'bm': 2, 'c': 3, 'd': 4,
        'dm': 5, 'e': 6, 'em': 7, 'f': 8, 'g': 9}
dir = '/Users/chamu/Chords-and-Beats-Extraction-using-ML/Reduced Dataset'
folders = [os.path.join(dir, i) for i in os.listdir(dir) if len(i) < 4]
files = []
print(len(files))
#for folder in folders:
    #files += [os.path.join(folder, i) for i in os.listdir(folder)]
data = []
#for i in range(len(files)):
    #print(files[i])
crp = PCP('/Users/chamu/Chords-and-Beats-Extraction-using-ML/Reduced Dataset/', 'audio.wav')
crp = np.array(crp).reshape(-1,1)
#print(i, files[i].rsplit('/')[-1])

for j in range(crp.shape[1]):
    data.append(list(crp[:, j]))
data = np.array(data)
Data = pd.DataFrame(data)
Data.to_csv('hasakelum.csv')
