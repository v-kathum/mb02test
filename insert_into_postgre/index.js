const { Client } = require('pg')

// const {
//   SQL_CONNECTION_STRING,
//   DATABASE_NAME,
//   COLLECTION_NAME
// } = require('./constant')

const _ = require('lodash')

const executeQueries = (insertText, insertVals, client) => {
  for (let i = 0; i < insertText.length; i++) {
    client.query(insertText[i], insertVals[i])
      .then(res => {
        console.log(res.rows[0])
      })
      .catch(e => console.error(e.stack))
  }
}

const handler = ({ bindings, done }) => {
  try {
    bindings.postGresDevice = Object.assign(bindings.queuePostGresDbItem, {
      id: bindings.queuePostGresDbItem.device_id
    })

    const client = new Client({
      user: 'olufemiadesina',
      host: ' postgresql://localhost',
      database: 'minutdb',
      password: '',
      port: 5432
    })

    client.connect()

    const deviceInsertQuery = [
      'INSERT INTO devices(id, mac, account_id, home_id, offline, active, last_heard, first_seen, description) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      'INSERT INTO firmware(deviceID, wanted) VALUES($1, $2)',
      'INSERT INTO battery(deviceID, unit, time_resolution, values) VALUES($1, $2, $3, $4)',
      'INSERT INTO sound(devceID, unit, time_resolution, values) VALUES($1, $2, $3, $4)',
      'INSERT INTO humidity(deviceID, unit, time_resolution, values) VALUES($1, $2, $3, $4)',
      'INSERT INTO temperature(deviceID, unit, time_resolution, values) VALUES($1, $2, $3, $4)'
    ]

    const deviceInsertValues = [
      _.values(_.pick(bindings.queuePostGresDbItem, ['id', 'device_mac', 'account_id', 'home_id', 'offline', 'active', 'last_heard_from_at', 'first_seen_at', 'description'])),
      _.values(_.pick(bindings.queuePostGresDbItem, ['id', 'wanted'])),
      _.values(_.pick(bindings.queuePostGresDbItem, ['id', 'battery.unit', 'battery.time_resolution', 'battery.values'])),
      _.values(_.pick(bindings.queuePostGresDbItem, ['id', 'sound.unit', 'sound.time_resolution', 'sound.values'])),
      _.values(_.pick(bindings.queuePostGresDbItem, ['id', 'humidity.unit', 'humidity.time_resolution', 'humidity.values'])),
      _.values(_.pick(bindings.queuePostGresDbItem, ['id', 'temp.unit', 'temp.time_resolution', 'temp.values']))
    ]

    console.log('InsertQuery: ', deviceInsertQuery)
    console.log('ValuesQuery: ', deviceInsertValues)
    executeQueries(deviceInsertQuery, deviceInsertQuery, client)

    done(null, bindings.postGresDevice)
  } catch (error) {
    done(error)
  }
}

module.exports = { handler }
