import os
import pickle
from PCP import pcp
import numpy as numpy
from utilities import convert, CtoN , NtoC
from sklearn.kernel_approximation import AdditiveChi2Sampler

fileName = str(input("Filename: "))
modelName='ML_model.sav'
mlModel = pickle.load(open(modelName, 'rb')) # read the model which is written in binary format
addictiveSampler = AdditiveChi2Sampler()
if fileName.rsplit('.')[-1]!='wav': # if file is not a wav file convert to mono
	convert(fileName)
newData = pcp(fileName) # pass file to the pcp method
newData = numpy.array([newData])
newData = addictiveSampler.fit_transform(newData)
prediction = mlModel.predict(newData) # predict chord and get index
print("Chord predicted is : ", NtoC(prediction[0]))
ans=input("Predicted chord is correct? [yes|no]\n")
if ans=='yes':
	print('Model has predicted the correct chord')
else:
	correctChord = input("Model has predicted wrong chord. Enter the correct chord to further train the model : ")
	correctPrediction = numpy.array([CtoN(correctChord)]) 
	if correctPrediction != prediction: # check whether model predicted chord and userinput chord are equal
		mlModel.partial_fit(newData, correctPrediction)
		pickle.dump(mlModel, open(modelName, 'wb')) # overwrite model in binary format
		print('Model trained')
	else:
		print('Model predicted the correct chord before')        
