from utilities import chord_sequence
from pickle import load
from os import listdir

models = [files for files in listdir() if files[-4:] == '.sav']		#finding the files with .sav format to import
models.sort()

print('Select the model version: ')
for i in range(len(models)):
    print(i + 1, ':', models[i])
i = int(input('Input model number\n'))
if i > len(models) or i < 1:
    print('Wrong input. Terminating...')
    exit()

modelNo = 1
model = load(open(models[modelNo - 1], 'rb'))	#calling the trained model to execute
wavfile = input("Enter file name with extension : ")
print('The chord sequence is: ')
for chord in chord_sequence(model, wavfile, 1):
    print(chord, end = ' ')		#Displaying Chords
print()
