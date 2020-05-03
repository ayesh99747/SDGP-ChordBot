import numpy as numpy
import scipy.io.wavfile
from os import listdir
from os.path import isfile, join

def pcp(filePath) :
    sampleRate,data = scipy.io.wavfile.read(filePath) # read the wav file
    newData = numpy.size(data) 
    half = int(newData/2)
    data = (numpy.square(abs(numpy.fft.rfft(data))[:half]))# represent using DFT
    pcpArray = numpy.zeros(12)
    const = 130.8
    Mo = numpy.zeros(half) 
    Mo[0] = -1
    for count in range(1, half) :
        Mo[count] = round(12*numpy.log2((sampleRate/const)*(count/newData)))%12 # fit to 12 tones
    for tones in range(0, 12) :
        pcpArray[tones] = numpy.dot(data, (Mo==(tones*numpy.ones(half)))) # get PCP values
    if sum(pcpArray)==0:
        return numpy.zeros(12, dtype=float64)
    pcpArray = pcpArray/sum(pcpArray)
    return pcpArray # return PCP values