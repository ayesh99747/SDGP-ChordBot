import librosa
import sys

filename = sys.argv[1]
y, sr = librosa.load(filename)
onset_env = librosa.onset.onset_strength(y, sr=sr)
tempo = librosa.beat.tempo(onset_envelope=onset_env, sr=sr)
print(int(tempo[0]))