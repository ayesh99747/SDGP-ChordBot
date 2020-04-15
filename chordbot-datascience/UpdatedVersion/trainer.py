import numpy as np
import pickle
from utilities import CtoN , NtoC , convert
from PCP import pcp
import os
from sklearn.kernel_approximation import AdditiveChi2Sampler
from sklearn.kernel_approximation import RBFSampler

file = str(input("Enter filename: "))
print('file',file)
prev_model='ML_model.sav'
myModel = pickle.load(open(prev_model, 'rb'))
sampler = AdditiveChi2Sampler()
if file.rsplit('.')[-1]!='wav':
	convert(file)
X = pcp(file)
X = np.array([X])
X = sampler.fit_transform(X)
pred = myModel.predict(X)
print("Predicted chord : ", NtoC(pred[0]))
ans=input("Is chord correct?[yes|no]\n")
if ans=='yes':
	print('Thanks you.')
else:
	print('Sorry, Train the model further.')
	print('Enter the correct chord')
	t_chord = input("Enter correct chord of the wav file: ")
	true_value = np.array([CtoN(t_chord)])
	if true_value != pred:
		myModel.partial_fit(X, true_value)
		pickle.dump(myModel, open(prev_model, 'wb'))
		print('Model has taken the input into account and corrected itself.')
	else:
		print('Model predicted the correct chord before')
        
myModel = pickle.load(open('ML_model.sav', 'rb'))
pred = myModel.predict(X)
print(accuracy_score(pred, y))
