const express = require("express");
const router = express.Router();

const db = require("./db.js");
const dbName = "Chordbot-Database";
const collectionName = "Users";

db.initialize(
  dbName,
  collectionName,
  function (dbCollection) {
    // successCallback

    //Insert user
    router.post("/addUser", (request, response) => {
      dbCollection.insertOne(
        {
          customerName: request.body.customerName,
          emailAddress: request.body.emailAddress,
          username: request.body.username,
          password: request.body.password,
        },
        (error, result) => {
          if (error) throw error;
          response.send("User created successfully!");
        }
      );
    });

    //find if username already exists
    router.post("/isUsernamePresent", (request, response) => {
      const postUsername = request.body.username;

      dbCollection.findOne({ username: postUsername }, (error, result) => {
        if (error) throw error;
        if (result != null) {
          response.send(true);
        } else {
          response.send(false);
        }
      });
    });

    //validate if username and password exist
    router.post("/validateLogin", (request, response) => {
      const postUsername = request.body.username;
      const postPassword = request.body.password;

      dbCollection.findOne(
        { username: postUsername, password: postPassword },
        (error, result) => {
          if (error) throw error;
          if (result != null) {
            response.send(true);
          } else {
            response.send(false);
          }
        }
      );
    });
  },
  function (err) {
    // failureCallback
    throw err;
  }
);

module.exports = router;
