import numpy as np
import pandas as pd
import os
from PCP import PCP
CtoN = {'a': 0, 'am': 1, 'bm': 2, 'c': 3, 'd': 4,
        'dm': 5, 'e': 6, 'em': 7, 'f': 8, 'g': 9}
dir = '/Users/chamu/Chords-and-Beats-Extraction-using-ML/Reduced Dataset'
folders = [os.path.join(dir, i) for i in os.listdir(dir)]
files = []
print(len(folders))
for folder in folders:
    #print (folder)
    if folder.endswith(".wav") :
        files += [os.path.join(folder)]

print (len(files))        
data = []
 
for i in range(len(files)):
    #print(files[i])
    crp = PCP('/'.join(files[i].rsplit('/')[:-1]), '/' + files[i].rsplit('/')[-1])
    crp = np.array(crp).reshape(-1,1)
    print(i, files[i].rsplit('/')[-1])
    
    for j in range(crp.shape[1]):
        data.append(list(crp[:, j]))
data = np.array(data)
Data = pd.DataFrame(data)
Data.to_csv('Dataset.csv')
