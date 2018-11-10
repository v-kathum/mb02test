const {
  SQL_CONNECTION_STRING,
  DATABASE_NAME,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  QUERIES_TEXT,
  QUERIES_VALUE
} = require('./constant')

const { Client } = require('pg')
const _ = require('lodash')

const executeQueries = (log, client, queries) =>
  Promise.all(queries.map((query) => new Promise(async (resolve, reject) => {
    try {
      const result = await client.query(query)

      log(result)
      resolve(result)
    } catch (error) {
      reject(error)
    }
  })))

const handler = async ({ done, log }, message) => {
  try {
    const client = new Client({
      user: POSTGRES_USER,
      host: SQL_CONNECTION_STRING,
      database: DATABASE_NAME,
      password: POSTGRES_PASSWORD,
      port: POSTGRES_PORT
    })

    await client.connect()

    const queries = QUERIES_TEXT.map((text, i) => ({
      text,
      values: _.at(message, QUERIES_VALUE[i])
    }))

    await executeQueries(log, client, queries)
    await client.end()

    done(null, message)
  } catch (error) {
    done(error)
  }
}

module.exports = { handler }
