//AddModule dependencies.
const express = require("express");
var fileUpload = require("express-fileupload");
var bodyParser = require("body-parser");


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

app.get("/",  (request, response) => {
  response.send("Welcome to chorbot server!");
});

//Set up the Routes in the Controller
var upload = require("./src/routes/fileUploadAPI.js");
app.use("/files", upload);

var demoSongs = require("./src/routes/demoSongsAPI.js");
app.use("/demoSongs", demoSongs);

var playlistSongs = require("./src/routes/playlistSongsAPI.js");
app.use("/playlistSongs", playlistSongs);

var users = require("./src/routes/userAPI.js");
app.use("/users", users);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`App is listening on port ${PORT}.`));
