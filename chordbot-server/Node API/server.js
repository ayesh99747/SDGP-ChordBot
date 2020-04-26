//AddModule dependencies.
const express = require("express");
var fileUpload = require("express-fileupload");
var cors = require("cors");
var bodyParser = require("body-parser");

//Define serverlication object
var server = express();
server.use(cors());
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

server.get("/", (request, response) => {
  response.send("Welcome to chordbot server!");
});

//Set up the Routes in the Controller
var upload = require("./src/routes/fileUploadAPI.js");
server.use("/files", upload);

var demoSongs = require("./src/routes/demoSongsAPI.js");
server.use("/demoSongs", demoSongs);

var playlistSongs = require("./src/routes/playlistSongsAPI.js");
server.use("/playlistSongs", playlistSongs);

var users = require("./src/routes/userAPI.js");
server.use("/users", users);

const PORT=process.env.PORT || 8000
server.listen(PORT, () => {
  console.log("Server running at port - "+PORT);
});
