import os
import pickle
import numpy as numpy
import scipy.io.wavfile
import soundfile as sound
import pydub
import filetype
from sklearn.kernel_approximation import AdditiveChi2Sampler
from scipy.signal import butter, lfilter

Chord_Index = { 'A' : 1, 'Am' : 2, 'Bm' : 3, 'C' : 4, 'D' : 5,
          'Dm' : 6, 'E' : 7, 'Em' : 8, 'F' : 9, 'G' : 10 }
Chord_Name = { 1 : 'A', 2 : 'Am', 3 : 'Bm', 4 : 'C', 5 : 'D',
          6 : 'Dm', 7 : 'E', 8 : 'Em', 9 : 'F', 10 : 'G' }


def FunctionPCP(data, sampleRate):
    newData = numpy.size(data)
    half = int(newData / 2)
    data = (numpy.square(abs(numpy.fft.rfft(data))[:half]))	#Representing using DFT
    pcpArray = numpy.zeros(12, dtype=float)
    const = 130.8
    Mo = numpy.zeros(half)
    Mo[0] = -1
    for count in range(1, half):
        Mo[count] = round(12 * numpy.log2((sampleRate / const) * (count / newData))) % 12
    for tones in range(0, 12):						#Fitting to 12 tones
        pcpArray[tones] = numpy.dot(data, (Mo == (tones * numpy.ones(half))))
    if sum(pcpArray) == 0:					#getting pcp values
        return numpy.zeros(12, dtype=float)
    pcpArray = pcpArray / sum(pcpArray)
    return pcpArray
		  
def cropFile(songFile, beginning, duration, croppedFile):		#gets a required duration of the file, used in extractChords function

    wavFile = pydub.AudioSegment.from_wav(songFile)	#getting the duration by setting the start and the time
    croppedPart = wavFile[int(float(beginning) * 1000):int(float(beginning)								#of the audio should be played
                                             * 1000) + int(float(duration) * 1000)]
    croppedPart.export(croppedFile, format='wav')			#exporting the file using the given name and with wav extension


def predictOneChord(mlModelName, songFile):		#gives a chord of the given wav file
    fs, y = scipy.io.wavfile.read(songFile)		#by using the ML_model 
    values = FunctionPCP(y, fs).reshape(1, -1)
    AdditiveSam = AdditiveChi2Sampler()
    if sum(values.ravel()) == 0:
        return'-'
    values = AdditiveSam.fit_transform(values)
    valPrediction = mlModelName.predict(values)	#predicting the chord and return the chord using the index of array
    return ChordName(valPrediction[0])


def findAllChords(songFile, mlModelName):	#this function used to get all the chords of the wav song
    wavFile = sound.SoundFile(songFile)		#used some time gap to gain performance
    SongtotalTime = len(wavFile) / wavFile.samplerate
    count = 0
    TotChordList = []
    while count + 0.5 <= SongtotalTime:		
        croppedName = "cropped.wav"
        cropFile(songFile, str(count), "0.5", croppedName)
        count += 0.5
        TotChordList.append(predictOneChord(mlModelName, croppedName))
        os.remove("cropped.wav")
    return TotChordList

#Chord names with corresponding index values and 
#Index values with corresponding Chord names are given in these 2 functions

def ChordIndex(c):
    return Chord_Index[c]
	
def ChordName(n):
    if n in range(1, 11):
        return Chord_Name[n]


