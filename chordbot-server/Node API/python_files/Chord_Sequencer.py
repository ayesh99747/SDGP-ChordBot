from utilities import chord_sequence
from pickle import load
import sys
import os

modelName = 'python_files/model/ML_model_ver3.sav'
fileName = sys.argv[1]

model = load(open(modelName, 'rb')) # call the trained model
for chord in chord_sequence(model, fileName, 1):
    print(chord, end = ' ') # display chords one by one

# delet temporary files
if os.path.exists(".wav"):
  os.remove(".wav")

