import librosa

x, sr = librosa.load('audio/Final_Countdown.mp3')
print(x.shape)
print(sr)