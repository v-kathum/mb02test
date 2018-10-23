const DocumentClient = require('documentdb').DocumentClient
const config = require('./config')

const client = new DocumentClient(config.endpoint, { 'masterKey': config.primaryKey })
const databaseUrl = `dbs/${config.database.id}`
const collectionUrl = `${databaseUrl}/colls/${config.collection.id}`

const getDatabase = () => {
  console.log('Getting Database: ', config.database.id)
  return new Promise((resolve, reject) => {
    try {
      client.readDatabase(databaseUrl, (err, result) => {
        console.log('err: ', err)
        console.log('Reading Database')
        if (err) {
          if (err.code === 404) {
            console.log('Could not get database')
            reject(err)
          }
        } else {
          console.log('Returning database')
          resolve(result)
        }
      })
    } catch (err) {
      console.log('err')
    }
  })
}

const getCollection = () => {
  console.log('Getting collection: ', config.collection.id)
  return new Promise((resolve, reject) => {
    client.readCollection(collectionUrl, (err, result) => {
      if (err) {
        if (err.code === 404) {
          console.log('Could not get database')
          reject(err)
        }
      } else {
        console.log('Returning Collection')
        resolve(result)
      }
    })
  })
}

const exit = (message) => {
  console.log(message)
  console.log('Press any key to exit')
  process.stdin.setRawMode(true)
  process.stdin.resume()
  process.stdin.on('data', process.exit.bind(process, 0))
}

const handler = ({ bindings, done }) => {
  try {
    bindings.cosmosDevice = Object.assign(bindings.queueCosmosDbItem, {
      id: bindings.queueCosmosDbItem.device_id
    })

    getDatabase()
      .then(() => getCollection())
      .then(() => { exit(`Completed successfully`) })
      .catch((error) => { exit(`Completed with error ${JSON.stringify(error)}`) })

    done(null, bindings.cosmosDevice)
  } catch (error) {
    done(error)
  }
}

module.exports = { handler }
