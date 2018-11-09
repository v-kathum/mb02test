const {
  MINUT_LOGIN_DATA,
  MINUT_LOGIN_URL,
  MINUT_DEVICES_URL
} = require('./constant')

const request = require('request')
const _ = require('lodash')

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

const handler = async ({ bindings, done, log }) => {
  try {
    const {
      access_token: accessToken
    } = await getLogin(log)

    const devices = await getDeviceList(log, accessToken)
    const deviceData = await Promise.all(devices.map((device) => getDeviceInformation(log, accessToken, device)))

    bindings.queueCosmosDb = deviceData.slice()
    bindings.queuePostGres = deviceData.slice()

    done(null, deviceData)
  } catch (error) {
    done(error)
  }
}

module.exports = { handler }
