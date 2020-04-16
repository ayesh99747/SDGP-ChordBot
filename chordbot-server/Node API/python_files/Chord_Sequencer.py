from utilities import chord_sequence
from pickle import load
from os import listdir

modelName = 'python_files/model/ML_model_ver3.sav'
fileName = 'python_files/audio/test.wav'
chords = ' '
model = load(open(modelName, 'rb')) # call the trained model
for chord in chord_sequence(model, fileName, 1):
    chords = chords + chord + " "

print(chords)
