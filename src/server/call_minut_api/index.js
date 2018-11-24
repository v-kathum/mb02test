const {
  MINUT_LOGIN_DATA,
  MINUT_LOGIN_URL,
  MINUT_DEVICES_URL,
  SQL_CONNECTION_STRING,
  DATABASE_NAME,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  QUERIES_TEXT,
  QUERIES_VALUE,
  COSMOS_DB_CONNECTION_ENDPOINT,
  COSMOS_DB_CONNECTION_KEY,
  COSMOS_DB_COL_NAME
} = require('./constant')

const { Client } = require('pg')
const { CosmosClient } = require('@azure/cosmos')

const _ = require('lodash')
const request = require('request')

const getLogin = (log) =>
  new Promise((resolve, reject) => {
    log('getLogin')
    request.post({
      url: MINUT_LOGIN_URL,
      form: MINUT_LOGIN_DATA,
      json: true
    }, (error, response, body) => {
      if (error) {
        return reject(error)
      }

      resolve(body)
    })
  })

const getDeviceList = (log, token) =>
  new Promise((resolve, reject) => {
    log('getDeviceList', token)
    request.get(MINUT_DEVICES_URL, {
      'auth': {
        'bearer': token
      },
      'json': true
    }, (error, response, body) => {
      if (error) {
        return reject(error)
      }

      const devBody = _.get(body, 'devices')
      resolve(devBody)
    })
  })

const getInfo = (token, device, path) => {
  return new Promise((resolve, reject) => {
    const {
      device_id: deviceId
    } = device

    request.get(`${MINUT_DEVICES_URL}/${deviceId}/${path}`, {
      'auth': {
        'bearer': token
      },
      'json': true
    }, (error, response, body) => {
      if (error) {
        reject(error)
      } else {
        resolve(body)
      }
    })
  })
}

const getDeviceInformation = (log, token, device) =>
  new Promise(async (resolve, reject) => {
    try {
      const [
        battery,
        humidity,
        sound,
        temperature,
        events
      ] = await Promise.all([
        getInfo(token, device, 'battery'),
        getInfo(token, device, 'humidity'),
        getInfo(token, device, 'sound'),
        getInfo(token, device, 'temperature'),
        getInfo(token, device, 'events')
      ])

      resolve(Object.assign(device, {
        battery,
        humidity,
        sound,
        temperature,
        events
      }))
    } catch (error) {
      reject(error)
    }
  })

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

module.exports = async () => {
  const log = console.log.bind(console)

  try {
    const {
      access_token: accessToken
    } = await getLogin(log)

    const devices = await getDeviceList(log, accessToken)
    const deviceData = await Promise.all(devices.map((device) => getDeviceInformation(log, accessToken, device)))
    const deviceDataWithIds = deviceData.map((device) => Object.assign(device, {
      id: device.device_id
    }))

    const cosmosClient = new CosmosClient({
      endpoint: COSMOS_DB_CONNECTION_ENDPOINT,
      auth: {
        masterKey: COSMOS_DB_CONNECTION_KEY
      }
    })

    const {
      database: cosmosDatabase
    } = await cosmosClient.databases.createIfNotExists({ id: COSMOS_DB_COL_NAME })

    const {
      container: cosmosContainer
    } = await cosmosDatabase.containers.createIfNotExists({ id: COSMOS_DB_COL_NAME })

    await Promise.all(deviceDataWithIds.map((device) => cosmosContainer.items.create(device)))

    const pgClient = new Client({
      user: POSTGRES_USER,
      host: SQL_CONNECTION_STRING,
      database: DATABASE_NAME,
      password: POSTGRES_PASSWORD,
      port: POSTGRES_PORT
    })

    await pgClient.connect()

    const queries = deviceDataWithIds.map((device, i) => ({
      text: QUERIES_TEXT,
      values: _.at(device, QUERIES_VALUE)
    }))

    await executeQueries(log, pgClient, queries)
    await pgClient.end()

    console.log('Done')
  } catch (error) {
    console.log(error)
  }
}
