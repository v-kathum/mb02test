const { DocumentClient } = require('documentdb')

const host = process.env.DB_HOST || 'https://ml-asset-tracking.documents.azure.com:443/'
const masterKey = process.env.DB_KEY || 'zQpfEBmqw5f5hdh2uE4Cy6KI67TvwbTe1NNENBvXr68ynODngxSV1hMLCY8vbGurPOduyxzeLDgTWT81PqopSg=='

const client = new DocumentClient(host, { masterKey })

const query = (queryString, queryPath, log) =>
  new Promise((resolve, reject) =>
    client
      .queryDocuments(
        queryPath,
        queryString, {
          enableCrossPartitionQuery: true
        })
      .toArray((error, results) => {
        log(queryString, queryPath, error, results && results.length)

        if (error) {
          reject(error)
        } else {
          resolve(results)
        }
      })
  )

const getAllDevices = (log) => query('SELECT * FROM c', 'dbs/DB/colls/COLLECTION/', log)

module.exports = ({ done, log, res }, req) => {
  res = {
    status: 200
  }

  getAllDevices(log)
    .then((results) => {
      if (results.length) {
        res.body = results
      }

      done()
    }, done)
}
