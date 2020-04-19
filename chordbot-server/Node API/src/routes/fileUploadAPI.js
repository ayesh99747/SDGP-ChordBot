const express = require('express');
const router = express.Router();
var fs = require('fs');


router.post("/uploadAudio", async (req, res) => {
  try {
    if (!req.files) {
      res.status(500).send({
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
        var newFileLocation = "./python_files/audio/" + mp3.name.substring(0, mp3.name.length - 3) + "wav";
        
        ffmpeg(fileLocation)
          .toFormat("wav")
          .on("error", (err) => {
           //console.log("An error occurred: " + err.message);
           response.status(500).send({
            status: false,
            message: "Error in converting song!",
          });
          }).on("progress", (progress) => {
            //console.log(JSON.stringify(progress));
          }).on("end", () => {
            //console.log("Processing finished !");
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
          res.status(200).send({
            status: true,
            message: array,
            name :  mp3.name,
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

module.exports = router;