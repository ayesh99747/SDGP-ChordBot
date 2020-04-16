const express = require('express')
const app = express();
const { spawn } = require('child_process');
let {PythonShell} = require('python-shell');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('uploads'));
app.use(fileUpload({
  createParentPath: true,
  limits: { 
      fileSize: 100 * 1024 * 1024 * 1024 //100MB max file(s) size
  },
}));


app.post('/uploadAudio', async (req, res) => {
  try {
      if(!req.files) {
          res.send({
              status: false,
              message: 'File upload failed!'
          });
      } else {
          let mp3 = req.files.mp3;
          var fileLocation = './python_files/audio/' + mp3.name;
          mp3.mv(fileLocation);

          var spawn = require("child_process").spawn; 
          var process = spawn('python',['./python_files/Chord_Sequencer.py',fileLocation] ); 
        
          process.stdout.on('data', function(data) { 
              res.json({
                chords : data.toString(),
                fileName: mp3.name
              }); 
          });
      }
  } catch (err) {
      res.status(500).send(err);
  }
});   


const port = process.env.PORT || 8000;

app.listen(port, () => 
  console.log(`App is listening on port ${port}.`)
);