// mongodb driver
const MongoClient = require("mongodb").MongoClient;

//connection string
const dbConnectionUrl =
  "mongodb+srv://NodeAPI:3aBSbLV8e2vMBJW9@chordbot-database-maipv.mongodb.net/test?retryWrites=true&w=majority";

function initialize(
  dbName,
  dbCollectionName,
  successCallback,
  failureCallback
) {
  //This connects to the mongodb cloud collection
  MongoClient.connect(
    dbConnectionUrl,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, dbInstance) {
      if (err) {
        console.log(`[MongoDB connection] ERROR: ${err}`);
        failureCallback(err);
      } else {
        const dbObject = dbInstance.db(dbName);
        const dbCollection = dbObject.collection(dbCollectionName);
        successCallback(dbCollection);
      }
    }
  );
}

module.exports = {
  initialize,
};
