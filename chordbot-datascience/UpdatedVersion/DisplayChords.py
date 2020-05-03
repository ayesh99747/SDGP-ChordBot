from ChordFunctions import findAllChords
from os import listdir
from pickle import load

modelName = 'ML_model.sav'		#importing the model to the variable
Load_MLmodel = load(open(modelName, 'rb'))		#loading the model to start the chord extraction

userSong = input("Input the wav file alongwith correct extention : ")	#user input of the wav song file
print('Chord progression of the requested song is: ')
for pattern in findAllChords(userSong,Load_MLmodel):	#calling the function from ChordFunctions to get the chord pattern
    print(pattern, end = ' ')							#Displaying the chords pattern of the song
print()
