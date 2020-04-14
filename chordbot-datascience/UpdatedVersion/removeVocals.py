from pydub import AudioSegment
import filetype
def remove(myAudioFile):
	fmt=filetype.guess(myAudioFile).extension  # guess the filetype from extention and save the file type in fmt variable
	sound_stereo = AudioSegment.from_file(myAudioFile, format=fmt)   # Get from file / Open an audio file as an AudioSegment instance and return it
	mono_list=sound_stereo.split_to_mono() 
    # Splits a stereo AudioSegment into two, one for each channel (Left/Right). Returns a list with the new AudioSegment objects with the left channel at index 0 and the right channel at index 1 (pydub fuction)
	if len(mono_list)==1: # then file is already in mono format
		print('File contains Mono channel only. Can\'t operate')
		return
	sound_monoL = mono_list[0] # left
	sound_monoR = mono_list[1] # right
	sound_monoR_inv = sound_monoR.invert_phase()   
    # invert_phase - Make a copy of this AudioSegment and inverts the phase of the signal. Can generate anti-phase waves for noise suppression or cancellation (pydub fuction)
	sound_CentersOut = sound_monoL.overlay(sound_monoR_inv)
    # overlay - Overlays an AudioSegment onto this one (pydub fuction)
	sound_CentersOut.export(myAudioFile.rsplit('.')[0] + '-nolyrics' + '.wav', format='wav')
    # export - Write the AudioSegment object to a file – returns a file handle of the output file (pydub fuction)
file=input('File name\n')
remove(file)