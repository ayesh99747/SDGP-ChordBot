from utilities import chord_sequence
from pickle import load
from os import listdir

modelName = 'model/ML_model_ver3.sav'
fileName = 'audio/test.wav'

model = load(open(modelName, 'rb')) # call the trained model
for chord in chord_sequence(model, fileName, 1):
    print(chord, end = ' ') # display chords one by one
print()
