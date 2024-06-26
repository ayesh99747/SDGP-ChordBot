const express = require("express");
const router = express.Router();
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);

const fs = require("fs");
const db = require("../database/db.js");
const dbName = "Chordbot-Database";
const collectionName = "DemoSongs";

db.initialize(
  dbName,
  collectionName,
  function (dbCollection) {
    // successCallback

    // return list of demo songs
    router.get("/getSongs", (request, response) => {
      dbCollection.find().toArray((error, result) => {
        if (error) throw error;
        if (result == null) {
          response.status(404).send({
            message: "Database empty!",
          });
        }else{
          response.status(200).json(result);
        }
      });
    });

    //get the chords for a given songid
    router.get("/getChords/:id", (request, response) => {
      const songid = request.params.id;
      dbCollection.findOne({ songID: songid }, (error, result) => {
        if (error) throw error;

        //If a song does not exist
        if (result == null) {
          response.status(404).send({
            status: false,
            message: "Error! File not found!",
          });
        } else {
          var mp3Location = result.mp3Name;
          var songName = result.songName + " - " + result.artist;
          var newFileLocation =
            mp3Location.substring(0, mp3Location.length - 3) + "wav";

          //The following lines of code convert the mp3 to wav
          ffmpeg(mp3Location)
            .toFormat("wav")
            .on("error", (err) => {
              console.log("An error occurred: " + err.message);
              //If the server was unable to convert the song
              response.status(500).send({
                status: false,
                message: "Error in converting song!",
              });
            })
            .on("progress", (progress) => {})
            .on("end", () => {})
            .save(newFileLocation);

          var fileLocation = newFileLocation;

          //Here the python script is executed and the chords are extracted
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
            } catch (err) {
              console.log(err);
            }
            response.status(200).send({
              status: true,
              message: array,
              name: songName,
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
