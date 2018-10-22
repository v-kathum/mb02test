const mongoose = require('mongoose')

mongoose.Promise = global.Promise

// const env = require('./env/environment')

// const COSMOSDB_CONNSTR = 'mongodb://minutdb:hhCZ23FD1VhgDs5eWjbSWXFUqp4PqGVUW5iWmqpIQBRpqlvyUoSHjc2yuHPKjpx7T0Ws10XmLSpLdecT9GPSPw==@minutdb.documents.azure.com:10255/'
// const COSMOSDB_CONNSTR = 'mongodb://minutdb.documents.azure.com:10255/MinutDatabase/'
const COSMODDB_USER = 'minutdb'
const COSMOSDB_PASSWORD = 'hhCZ23FD1VhgDs5eWjbSWXFUqp4PqGVUW5iWmqpIQBRpqlvyUoSHjc2yuHPKjpx7T0Ws10XmLSpLdecT9GPSPw%3D%3D'

const connect = () => {
  mongoose.connect('mongodb://minutdb.documents.azure.com:10255/MinutDatabase', {
    auth: {
      user: COSMODDB_USER,
      password: COSMOSDB_PASSWORD
    }
  })
    .then(() => console.log('Connection to CosmosDB successful'))
    .catch((err) => console.error(err))
}

const Device = mongoose.model('Device', new mongoose.Schema({
  device_id: String,
  deviceInfo: [{
    mac: String,
    account_id: String,
    home_id: String,
    offline: String,
    active: String,
    last_heard_from_at: Number,
    first_seen_at: Number,
    description: String
  }],
  battery: [{
    unit: String,
    time_resolution: String,
    values: String
  }],
  temperature: [{
    unit: String,
    time_resolution: String,
    values: String
  }],
  humidity: [{
    unit: String,
    time_resolution: String,
    values: String
  }],
  sound: [{
    unit: String,
    time_resolution: String,
    values: String
  }]
}))

const device = new Device({
  device_id: '55a62ad4f171ec14540dd918',
  device_info: [
    {
      mac: 'c0de008e078e',
      account_id: '55a526d6908524fd0ffe2b8e',
      home_id: '56fe671c0dacfdc73fd6d83f',
      offline: 'true',
      active: 'true',
      last_heard_from_at: 1478189329,
      first_seen_at: 1436953301,
      description: 'Office'
    }
  ],
  battery: [
    { unit: '', time_resolution: null, values: [] }
  ],
  temperature: [
    { unit: 'celsius', time_resolution: null, values: [] }
  ],
  humidity: [
    { unit: '% rH', time_resolution: null, values: [] }
  ],
  sound: [
    { unit: '', time_resolution: null, values: [] }
  ]
})

const handler = ({ bindings, done }) => {
  try {
    connect()

    device.save((err, saveDevice) => {
      if (!err) {
        console.log(JSON.stringify(saveDevice))
      } else {
        console.err('Error caused when attempting to save device')
      }
    })

    Device.find({}, function (err, foundDevice) {
      if (!err) {
        foundDevice.forEach(device => console.log('Found Device: ' + JSON.stringify(device)))
        console.log('Found Devices: ', foundDevice)
      } else {
        console.err('Error caused when attempting to save device')
      }
    })

    done(null, bindings.res)
  } catch (error) {
    done(error)
  }
}

module.exports = { handler }
