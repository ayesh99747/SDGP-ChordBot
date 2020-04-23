import numpy as np
import scipy.io.wavfile
from os import listdir
from os.path import isfile, join
from utilities import convStoM

def pcp(path) :
    fs,y = scipy.io.wavfile.read(path) # read the wav file
    if len(y.shape) == 2 :
        y = convStoM(y)
    n = np.size(y)
    k = int(n/2)
    y = (np.square(abs(np.fft.rfft(y))[:k]))
    pcp = np.zeros(12)
    fref = 130.8
    M = np.zeros(k)
    M[0] = -1
    for l in range(1, k) :
        M[l] = round(12*np.log2((fs/fref)*(l/n)))%12
    for i in range(0, 12) :
        pcp[i] = np.dot(y, (M==(i*np.ones(k))))
    if sum(pcp)==0:
        return np.zeros(12, dtype=float64)
    pcp = pcp/sum(pcp)
    return pcp
