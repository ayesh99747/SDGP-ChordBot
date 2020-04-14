import numpy as np
import pickle
from utilities import CtoN , NtoC , convert
from PCP import pcp
import os
from sklearn.kernel_approximation import AdditiveChi2Sampler
from sklearn.kernel_approximation import RBFSampler


file = str(input("Enter file name: "))

print('file',file)

prev_model='trained_ML_model_ver3.sav'

myModel = pickle.load(open(prev_model, 'rb'))

sampler = AdditiveChi2Sampler() 

#File should be in .wav format, if it's not, convert it to .wav
#if (file[-3:] != "wav"):
#    cmd = "C:/ffmpeg/bin/ffmpeg.exe -i " + file + " " + file[:-3] + ".wav"
#    os.system(cmd)
#    file = file[:-3] + "wav"

if file.rsplit('.')[-1]!='wav':
	convert(file)
X = pcp(file)
X = np.array([X])

X = sampler.fit_transform(X)

pred = myModel.predict(X)	#perdict the chord of the file
print("Predicted chord: ", NtoC(pred[0]))

ans=input("Predicte chord correct?[yes|no]\n")
if ans=='yes':
	print('DONE')
else:
	print('Train the model with correct chords')
	t_chord = input("Enter correct chord of the wav file: ")
	true_chord = np.array([CtoN(t_chord)])
	if true_chord != pred:
		myModel.partial_fit(X, true_chord)
		pickle.dump(myModel, open(prev_model, 'wb'))
		print('Model has got the input and corrected itself.')
	else:
		print('Same chord predicted by the model') 