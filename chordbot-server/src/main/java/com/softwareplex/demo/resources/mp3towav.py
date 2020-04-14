from pydub import AudioSegment


def convert(file):
    # import file
    sound = AudioSegment.from_mp3(file)
    print('imported - ' + file)
    filename = file.replace('mp3', 'wav')
    print('exporting to ' + filename)
    sound.export(filename, format='wav')


file = "Uploads/ABC Karaoke! Fun Animated Video for Kids!.mp3"
convert(file)
