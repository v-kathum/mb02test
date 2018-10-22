// const documentClient = require('documentdb').DocumentClient
// const config = require('./config')
// const url = require('url')

// const client = new documentClient(config.endpoint, { 'masterKey': config.primaryKey })

// const HttpStatusCodes = { NOTFOUND: 404 }
// const databaseUrl = `dbs/${config.database.id}`
// const collectionUrl = `${databaseUrl}/colls/${config.collection.id}`
// const documentID = '5ab27262b933c045e709ea9f'

// /**
//  * Get the database by ID, or create if it doesn't exist.
//  * @param {string} database - The database to get or create
//  */
// function getDatabase () {
//   console.log(`Getting database:\n${config.database.id}\n`)
//   return new Promise((resolve, reject) => {
//     client.readDatabase(databaseUrl, (err, result) => {
//       if (err) {
//         if (err.code == HttpStatusCodes.NOTFOUND) {
//           client.createDatabase(config.database, (err, created) => {
//             if (err) reject(err)
//             else resolve(created)
//           })
//         } else {
//           reject(err)
//         }
//       } else {
//         resolve(result)
//       }
//     })
//   })
// }

// /**
//  * Get the collection by ID, or create if it doesn't exist.
//  */
// function getCollection () {
//   console.log(`Getting collection:\n${config.collection.id}\n`)

//   return new Promise((resolve, reject) => {
//     client.readCollection(collectionUrl, (err, result) => {
//       if (err) {
//         if (err.code == HttpStatusCodes.NOTFOUND) {
//           client.createCollection(databaseUrl, config.collection, { offerThroughput: 400 }, (err, created) => {
//             if (err) reject(err)
//             else resolve(created)
//           })
//         } else {
//           reject(err)
//         }
//       } else {
//         resolve(result)
//       }
//     })
//   })
// }

// /**
//  * Get the document by ID, or create if it doesn't exist.
//  * @param {function} callback - The callback function on completion
//  */
// function getFamilyDocument (document) {
//   let documentUrl = `${collectionUrl}/docs/${document.id}`
//   console.log(`Getting document:\n${document.id}\n`)

//   return new Promise((resolve, reject) => {
//     client.readDocument(documentUrl, (err, result) => {
//       if (err) {
//         if (err.code == HttpStatusCodes.NOTFOUND) {
//           client.createDocument(collectionUrl, document, (err, created) => {
//             if (err) reject(err)
//             else resolve(created)
//           })
//         } else {
//           reject(err)
//         }
//       } else {
//         resolve(result)
//       }
//     })
//   })
// };

// // /**
// //  * Query the collection using SQL
// //  */
// // function queryCollection() {
// //     console.log(`Querying collection through index:\n${config.collection.id}`);

// //     return new Promise((resolve, reject) => {
// //         client.queryDocuments(
// //             collectionUrl,
// //             'SELECT VALUE * FROM root'
// //         ).toArray((err, results) => {
// //             if (err) reject(err)
// //             else {
// //                 for (var queryResult of results) {
// //                     let resultString = JSON.stringify(queryResult);
// //                     console.log(`\tQuery returned ${resultString}`);
// //                 }
// //                 console.log();
// //                 resolve(results);
// //             }
// //         });
// //     });
// // };

// // /**
// //  * Replace the document by ID.
// //  */
// // function replaceFamilyDocument(document) {
// //     let documentUrl = `${collectionUrl}/docs/${document.id}`;
// //     console.log(`Replacing document:\n${document.id}\n`);
// //     document.children[0].grade = 6;

// //     return new Promise((resolve, reject) => {
// //         client.replaceDocument(documentUrl, document, (err, result) => {
// //             if (err) reject(err);
// //             else {
// //                 resolve(result);
// //             }
// //         });
// //     });
// // };

// // /**
// //  * Delete the document by ID.
// //  */
// // function deleteFamilyDocument(document) {
// //     let documentUrl = `${collectionUrl}/docs/${document.id}`;
// //     console.log(`Deleting document:\n${document.id}\n`);

// //     return new Promise((resolve, reject) => {
// //         client.deleteDocument(documentUrl, (err, result) => {
// //             if (err) reject(err);
// //             else {
// //                 resolve(result);
// //             }
// //         });
// //     });
// // };

// function cleanup () {
//   console.log(`Cleaning up by deleting database ${config.database.id}`)

//   return new Promise((resolve, reject) => {
//     client.deleteDatabase(databaseUrl, (err) => {
//       if (err) reject(err)
//       else resolve(null)
//     })
//   })
// }

// function exit (message) {
//   console.log(message)
//   console.log('Press any key to exit')
//   process.stdin.setRawMode(true)
//   process.stdin.resume()
//   process.stdin.on('data', process.exit.bind(process, 0))
// }

// getDatabase()
//   .then(() => getCollection())
//   .then(() => getFamilyDocument(config.documents.documentID))
//   .then(() => cleanup())
//   .then(() => { exit(`Completed successfully`) })
//   .catch((error) => { exit(`Completed with error ${JSON.stringify(error)}`) })
