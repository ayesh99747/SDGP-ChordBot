const express = require('express')
const app = express();
const { spawn } = require('child_process');
let {PythonShell} = require('python-shell')

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/getChords', (req, res) => {
    var spawn = require("child_process").spawn; 
      
    var process = spawn('python',["./python_files/Chord_Sequencer.py"] ); 
  
    process.stdout.on('data', function(data) { 
        res.send(data.toString()); 
    } ) 
})



app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});