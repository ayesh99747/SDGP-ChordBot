//AddModule dependencies. 
const express = require('express')
var fileUpload = require("express-fileupload");
var bodyParser = require("body-parser");

var mongo = require('mongodb');


//Define Application object
var app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static("uploads"));

app.use(
  fileUpload({
    createParentPath: true,
    limits: {
      fileSize: 50 * 1024 * 1024 * 1024, //50MB max file(s) size
    },
  })
);

//Set up the Routes in the Controller
var upload = require('./routes/fileUploadAPI.js');
app.use("/files",upload);

var demoSongs = require('./routes/demoSongsAPI.js');
app.use("/demoSongs",demoSongs);

var playlistSongs = require('./routes/playlistSongsAPI.js');
app.use("/playlistSongs",playlistSongs);

var users = require('./routes/userAPI.js');
app.use("/users",users);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`App is listening on port ${port}.`));