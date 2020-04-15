from pickle import load
from utilities import chord_sequence

def getChords(self,filename):
    model = load(open('models/ML_model_ver3.sav', 'rb'))  # call the trained model
    sequence = " "
    for chord in chord_sequence(model, filename, 1):
        sequence = (chord + " ") + sequence
    return sequence

