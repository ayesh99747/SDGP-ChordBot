const express = require("express");
const app = express();
const { spawn } = require("child_process");
let { PythonShell } = require("python-shell");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const Mp32Wav = require("mp3-to-wav");
const ffmpeg = require("fluent-ffmpeg");
const fs = require('fs');

app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));
app.use(express.static("uploads"));

app.use(
  fileUpload({
    createParentPath: true,
    limits: {
      fileSize: 200 * 1024 * 1024 * 1024, //200MB max file(s) size
    },
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/uploadAudio", async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "File upload failed!",
      });
    } else {
      let mp3 = req.files.mp3;
      var fileLocation = "./python_files/audio/" + mp3.name;
      const oldFileLocation = fileLocation;
      mp3.mv(fileLocation);
      var fileType = mp3.name.substr(mp3.name.length - 3);
      if (fileType == "mp3") {
        var newmp3Name = mp3.name.substring(0, mp3.name.length - 3) + "wav";
        var newFileLocation = "./python_files/audio/" + newmp3Name;
        
        ffmpeg(fileLocation)
          .toFormat("wav")
          .on("error", (err) => {
            console.log("An error occurred: " + err.message);
          }).on("progress", (progress) => {
            console.log(JSON.stringify(progress));
          }).on("end", () => {
            console.log("Processing finished !");
          }).save(newFileLocation); //path where you want to save your file

        fileLocation = newFileLocation;
      }
      fileType = fileLocation.substr(fileLocation.length - 3);
      if (fileType == "wav") {
        var spawn = require("child_process").spawn;
        var process = spawn("python", [
          "./python_files/Chord_Sequencer.py",
          fileLocation,
        ]);

        process.stdout.on("data", function (data) {
          var str = data.toString();
          var str = str.substring(0, str.length - 1);
          var array = str.split(" ");
          try {
            fs.unlinkSync(fileLocation);
            fs.unlinkSync(oldFileLocation);
          } catch(err) {
          }
          res.send({
            status: true,
            message: array,
          });
        });
      } else {
        res.send("Invalid file format");
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`App is listening on port ${port}.`));
