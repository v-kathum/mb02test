import { Injectable } from "@angular/core";
import { MongoClient } from 'mongodb';
import { environment } from '../../environments/environment';

@Injectable()
export class MongoService {

    private mongoUri = `mongodb://${environment.databaseName}:${environment.key}@${environment.databaseName}.documents.azure.com:${environment.port}/?ssl=true&replicaSet=globaldb`;

    //Connects to mongo
    connect(callback) {
        MongoClient.connect(this.mongoUri, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            callback(db.db("sensor-data"));
        });
    }

    //Gets all documents in the collection
    findAll(collection, callback) {
        this.connect(function (db) {
            // Get the documents collection
            const col = db.collection(collection);
            // Find some documents
            col.find({}, { sort: { _ts: 1 } }).toArray(function (err, docs) {
                if (err) throw err;
                callback(docs);
            });
        });
    }

    //Finds one document by id
    findOne(id, collection, callback) {
        this.connect(function (db) {
            // Get the documents collection
            const col = db.collection(collection);
            // Find some documents
            col.findOne({_id : id}, function (err, doc) {
                if (err) throw err;
                callback(doc);
            });
        });
    }

    //Finds one document by whichever filter you pass
    //i.e. {_id : id}
    findOneByFilter(filter, collection, callback) {
        this.connect(function (db) {
            // Get the documents collection
            const col = db.collection(collection);
            // Find some documents
            col.findOne(filter, function (err, doc) {
                if (err) throw err;
                callback(doc);
            });
        });
    }

}
