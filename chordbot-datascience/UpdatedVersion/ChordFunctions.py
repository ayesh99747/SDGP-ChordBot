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


def FunctionPCP(y, fs):
    num = numpy.size(y)
    a = int(num / 2)
    y = (numpy.square(abs(numpy.fft.rfft(y))[:a]))
    pcp = numpy.zeros(12, dtype=float)
    fref = 130.8
    M = numpy.zeros(a)
    M[0] = -1
    for l in range(1, a):
        M[l] = round(12 * numpy.log2((fs / fref) * (l / num))) % 12
    for i in range(0, 12):
        pcp[i] = numpy.dot(y, (M == (i * numpy.ones(a))))
    if sum(pcp) == 0:
        return numpy.zeros(12, dtype=float)
    pcp = pcp / sum(pcp)
    return pcp
		  
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


def extractChords(mlModelName, songFile):		#this funtion gives the chord pattern of the wav file
    wavFile = sound.SoundFile(songFile)			#by importing the file and the ML_model
    SongtotalTime = len(wavFile) / wavFile.samplerate
    count = 0
    Tot_ChordPattern = []
    while SongtotalTime > 0:
        croppedName = "sample.wav"

        if SongtotalTime > 1.5:
            cropFile(songFile, str(count), "1.5", croppedName)
        else:
            if SongtotalTime > 0.5:
                cropFile(songFile, str(count), str(SongtotalTime), croppedName)
            else:
                Tot_ChordPattern.append("-")
                break
        chordSeq = findAllChords(croppedName, mlModelName)

        Tot_ChordPattern.append(max(set(chordSeq), key=chordSeq.count))
        count += 0.5
        SongtotalTime -= 0.5
        os.remove("sample.wav")
    return Tot_ChordPattern

#Chord names with corresponding index values and 
#Index values with corresponding Chord names are given in these 2 functions

def ChordIndex(c):
    return Chord_Index[c]
	
def ChordName(n):
    if n in range(1, 11):
        return Chord_Name[n]


