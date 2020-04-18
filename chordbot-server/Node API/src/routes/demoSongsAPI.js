const express = require("express");
const router = express.Router();
var ffmpeg = require("fluent-ffmpeg");
const db = require("./db.js");
const dbName = "Chordbot-Database";
const collectionName = "DemoSongs";

db.initialize(
  dbName,
  collectionName,
  function (dbCollection) {
    // successCallback

    router.get("/getSongs", (request, response) => {
      // return updated list
      dbCollection.find().toArray((error, result) => {
        if (error) throw error;
        response.json(result);
      });
    });

    //get the chords for a given songid
    router.post("/getChords", (request, response) => {
      const songid = request.body.id;
      dbCollection.findOne({ songID: songid }, (error, result) => {
        if (error) throw error;

        if (result == null) {
          response.send(null);
        } else {
          var mp3Location = result.mp3Name;
        var newFileLocation = mp3Location.substring(0, mp3Location.length - 3) + "wav";
        
        ffmpeg(mp3Location)
          .toFormat("wav")
          .on("error", (err) => {
            console.log("An error occurred: " + err.message);
          }).on("progress", (progress) => {
            console.log(JSON.stringify(progress));
          }).on("end", () => {
            console.log("Processing finished !");
          }).save(newFileLocation); //path where you want to save your file
        
          mp3Location = newFileLocation;

          var spawn = require("child_process").spawn;
          var process = spawn("python", [
            "./python_files/Chord_Sequencer.py",
            mp3Location,
          ]);
          process.stdout.on("data", function (data) {
            var str = data.toString();
            var str = str.substring(0, str.length - 1);
            var array = str.split(" ");
            response.send({
              status: true,
              message: array,
            });
          });
        }
      });
    });
  },
  function (err) {
    // failureCallback
    throw err;
  }
);

module.exports = router;
