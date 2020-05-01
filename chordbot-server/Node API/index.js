//Added Module dependencies.
const express = require("express");
var fileUpload = require("express-fileupload");
var cors = require("cors");
var bodyParser = require("body-parser");

//Define server object
var server = express();
server.use(cors()); //enabled cors

//Specified upload limits below
server.use(bodyParser.json({ limit: "50mb" }));
server.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
server.use(express.static("uploads"));

server.use(
  fileUpload({
    createParentPath: true,
    limits: {
      fileSize: 50 * 1024 * 1024 * 1024, //50MB max file(s) size
    },
  })
);

//This is the welcome route
server.get("/", (request, response) => {
  response.send("Welcome to chordbot server!");
});

//Set up the Routes in the Controller
// fileUpload router
var upload = require("./src/routes/fileUploadAPI.js");
server.use("/files", upload);
//demoSong router
var demoSongs = require("./src/routes/demoSongsAPI.js");
server.use("/demoSongs", demoSongs);
//playlistSongs router
var playlistSongs = require("./src/routes/playlistSongsAPI.js");
server.use("/playlistSongs", playlistSongs);
//users router
var users = require("./src/routes/userAPI.js");
server.use("/users", users);

//Port is defined here
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log("Server running at port - " + PORT);
});
