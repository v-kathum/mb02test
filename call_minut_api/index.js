const {
  MINUT_LOGIN_DATA,
  MINUT_LOGIN_URL,
  MINUT_DEVICES_URL
} = require('./constant')

const request = require('request')
const _ = require('lodash')

const getLogin = () =>
  new Promise((resolve, reject) => {
    request.post({
      url: MINUT_LOGIN_URL,
      formData: MINUT_LOGIN_DATA,
      json: true
    }, (error, response, body) => {
      if (error) {
        return reject(error)
      }
      resolve(body)
    })
  })

const getDeviceList = (token) =>
  new Promise((resolve, reject) => {
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

const getDeviceInformation = (token, device) =>
  new Promise(async (resolve, reject) => {
    try {
      const [
        temp,
        humidity,
        sound
      ] = await Promise.all([
        getInfo(token, device, 'temperature'),
        getInfo(token, device, 'humidity'),
        getInfo(token, device, 'sound')
      ])

      resolve(Object.assign(device, {
        temp,
        humidity,
        sound
      }))
    } catch (error) {
      reject(error)
    }
  })

const handler = async ({ bindings, done }) => {
  try {
    const {
      access_token: accessToken
    } = await getLogin()

    const devices = await getDeviceList(accessToken)
    const deviceData = await Promise.all(devices.map((device) => getDeviceInformation(accessToken, device)))

    bindings.queueCosmosDb = deviceData.slice()
    bindings.queuePostGres = deviceData.slice()

    done(null, deviceData)
  } catch (error) {
    done(error)
  }
}

module.exports = { handler }
