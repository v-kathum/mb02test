const {
  DB_COLLECTION_NAME,
  DB_HOST,
  DB_NAME,
  DB_KEY
} = require('../db/constant')

const { DocumentClient } = require('documentdb')

const client = new DocumentClient(DB_HOST, {
  masterKey: DB_KEY
})

const query = (queryString, queryPath, log) =>
  new Promise((resolve, reject) =>
    client
      .queryDocuments(
        queryPath,
        queryString, {
          enableCrossPartitionQuery: true
        })
      .toArray((error, results) => {
        log({ queryString, queryPath, error, results }, results && results.length)

        if (error) {
          reject(error)
        } else {
          resolve(results)
        }
      })
  )

const getAllDevices = (log) => query('SELECT * FROM c', `dbs/${DB_NAME}/colls/${DB_COLLECTION_NAME}/`, log)

const handler = async ({ done, log, res }) => {
  try {
    const results = await getAllDevices(log)

    if (results.length) {
      log(results.length)
      res.body = results
      res.status = 200
    }

    done()
  } catch (error) {
    done(error)
  }
}

module.exports = { handler }
