import numpy as numpy
import pickle
from utilities import CtoN
import pandas as pandas
from sklearn.kernel_approximation import AdditiveChi2Sampler
from sklearn.kernel_approximation import RBFSampler
from sklearn.neural_network import MLPClassifier
from sklearn.linear_model import SGDClassifier
from sklearn.metrics import accuracy_score

model = SGDClassifier(loss='hinge', learning_rate='constant', eta0=0.1, max_iter=2000, tol=1e-3)
dataset = pandas.read_csv("Dataset.csv") # read and load data from csv file
shapeDataset = dataset.shape # shape dataset
rows = shapeDataset[0] # rows of the dataset (2000)
colums = shapeDataset[1] - 1 # columns of the dataset (12 chords)
shapeDataset = (rows, colums) # shape dataset into array
newData = numpy.zeros(shapeDataset) # create a new array same as shapeDataset with all zeros
count = 0
while count < 12:
    newData[:, count] = dataset[str(count)]
    count += 1
# Manually creating label values according to data per chord
# It is assumed that the chords are listed in the order
# A, Am, Bm, C, D, Dm, E, Em, F, G in the dataset
colums = numpy.zeros((newData.shape)[0])
counter = 0
value = 1
chordData = 200
# give a chord to each 200 data records
for i in range(0, (newData.shape)[0]): 
    if counter == chordData:
        value += 1
        counter = 0
    colums[i] = value
    counter += 1
addictiveSampler = AdditiveChi2Sampler() # sample ft of  kernel characteristic at regular intervals
# fit to data and transform
newData = addictiveSampler.fit_transform(newData) 
model.fit(newData, colums)
modelName = 'ML_model.sav'
# Fit and save the model with filename
pickle.dump(model, open(modelName, 'wb')) 
trainedModel = pickle.load(open('ML_model.sav', 'rb')) # get the accuracy by loading the model
prediction = trainedModel.predict(newData)
print(accuracy_score(prediction, colums)) # print accuracy
