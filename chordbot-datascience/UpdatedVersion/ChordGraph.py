import matplotlib.pyplot as plot
import numpy as np
import soundfile as sf

filename = input("Enter name of file to get the graph : ")
data, fs = sf.read(filename) # read sound file 

time=np.linspace(0, len(data)/fs, num=len(y)) # calculate time

plot.figure(1) # create a figure object
plot.plot(time, data) # creates a plotting area in a figure
plot.show() # draw the figure
