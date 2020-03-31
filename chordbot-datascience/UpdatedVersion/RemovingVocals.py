from pydub import AudioSegment		#importing pydub- audioSegment to use as a container to load, save, manipulate audio
import filetype
def remove(myAudioFile):	#creating the function
	fileFormat=filetype.guess(myAudioFile).extension
	stereoSound = AudioSegment.from_file(myAudioFile, format=fileFormat)
	monoSoundList = stereoSound.split_to_mono()
	if len(monoSoundList)==1:
		print('This file contains only the mono channel. Unable to operate')
		return
	LeftMonoSound = monoSoundList[0]
	RightMonoSound = monoSoundList[1]
	RightMonoSound_inv = RightMonoSound.invert_phase()
	soundCenters_Out = LeftMonoSound.overlay(RightMonoSound_inv)
	soundCenters_Out.export(myAudioFile.rsplit('.')[0] + '-nolyrics' + '.wav', format='wav')
file=input('Enter the File name\n')
remove(file)