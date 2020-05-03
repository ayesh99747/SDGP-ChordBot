import pickle
import numpy as numpy
import pandas as pandas
from sklearn.linear_model import SGDClassifier
from sklearn.metrics import accuracy_score
from sklearn.kernel_approximation import AdditiveChi2Sampler

model = SGDClassifier(loss='hinge', learning_rate='constant', eta0=0.1, max_iter=2000, tol=1e-3)
dataset = pandas.read_csv("Dataset.csv") # read and load data from csv file
shapeDataset = dataset.shape # shape dataset
rows = shapeDataset[0] # rows of the dataset (2000)
colums = shapeDataset[1] - 1 # columns of the dataset (12 chords)
shapeDataset = (rows, colums) # shape dataset into array
newData = numpy.zeros(shapeDataset) # create a new array same as shapeDataset with all zeros
count = 0
while count < 12:
    newData[:, count] = dataset[str(count)] # store dataset values in newData
    count += 1
colums = numpy.zeros((newData.shape)[0])
counter = 0
value = 1
chordData = 200
for i in range(0, (newData.shape)[0]): # label each 200 data records with a chord number
    if counter == chordData:
        value += 1
        counter = 0
    colums[i] = value
    counter += 1
additiveSampler = AdditiveChi2Sampler() # sample ft of  kernel characteristic at regular intervals
newData = additiveSampler.fit_transform(newData) # fit to data and transform
model.fit(newData, colums)
modelName = 'ML_model.sav'
pickle.dump(model, open(modelName, 'wb'))  # Fit and save the model with filename
trainedModel = pickle.load(open('ML_model.sav', 'rb')) # get the accuracy by loading the model
prediction = trainedModel.predict(newData)
print(accuracy_score(prediction, colums)) # print accuracy
