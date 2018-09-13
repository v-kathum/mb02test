const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;

mongoose.Promise = global.Promise;

const env = require('./config');

const mongoUri = `mongodb://${env.databaseName}:${env.key}@${env.databaseName}.documents.azure.com:${env.port}/?ssl=true&replicaSet=globaldb`;

// Inserts an array of objects into any specified collection
async function insertMany(collection,data) {
    MongoClient.connect(mongoUri, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("sensor-data");
        dbo.collection(collection).updateMany({}, { $set: {[collection]:data} }, { upsert: true }, function (err, res) {
            if (err) throw err;
            console.log("Documents inserted into ", collection);
            db.close();
            return new Promise(resolve => {
                resolve();
            });
        });
    });
}

// Deletes all the documents in a specified collection
function deleteMany(collection) {
    MongoClient.connect(mongoUri, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("sensor-data");
        dbo.collection(collection).deleteMany({}, function (err, res) {
            if (err) throw err;
            console.log("Documents deleted");
            db.close();
        });
    });
}

//Export the above methods
module.exports = {
    insertMany,
    deleteMany
}