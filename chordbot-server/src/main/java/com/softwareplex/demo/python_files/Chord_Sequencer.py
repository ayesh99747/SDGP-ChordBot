from utilities import chord_sequence
from pickle import load
from os import listdir

models = [files for files in listdir() if files[-4:] == '.sav'] # iterate through directory and find the files with .sav format
models.sort()

#print('Select model number from below list')
#for modelNo in range(len(models)):
#    print(modelNo + 1, ':', models[modelNo]) # print all the models one by one 
#modelNo = int(input('Input model number\n'))
#if modelNo > len(models) or modelNo < 1:
#    print('Wrong input. Terminating...')
#    exit()

modelNo = 1
model = load(open(models[modelNo - 1], 'rb')) # call the trained model
wavfile = input("Enter file name with extension : ")
#print('Chord sequence is :')
for chord in chord_sequence(model, wavfile, 1):
    print(chord, end = ' ') # display chords one by one
print()
