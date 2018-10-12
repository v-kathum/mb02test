const request = require('request')
const _ = require('lodash')
// const async = require('async')

const minutUrl = 'https://api.minut.com'
// const paths = ['temperature', 'humidity', 'sound', 'battery']

const getLogin = () =>
  new Promise((resolve, reject) => {
    request.post({
      url: `${minutUrl}/v1/oauth/token`,
      formData: {
        client_id: 'b2476a2909f68667',
        redirect_uri: 'http://localhost:8080',
        client_secret: '8c23a4179c932071a2ff9f6f7fc828f8',
        password: 'sn5wLV0lCGHj7A',
        grant_type: 'password',
        username: 'rhp@example.com'
      },
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
    request.get(`${minutUrl}/draft1/admin/devices`, {
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

    request.get(`${minutUrl}/draft1/admin/devices/${deviceId}/${path}`, {
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
        humid,
        sound,
        battery
      ] = await Promise.all([
        getInfo(token, device, 'temperature'),
        getInfo(token, device, 'humidity'),
        getInfo(token, device, 'sound'),
        getInfo(token, device, 'battery')
      ])

      resolve({
        init: device,
        temp,
        humidity,
        sound,
        battery
      })
    } catch (error) {
      reject(error)
    }
  })

const handler = async ({ done }) => {
  try {
    const {
      access_token: accessToken
    } = await getLogin()

    const devices = await getDeviceList(accessToken)
    const deviceData = await Promise.all(devices.map((device) => getDeviceInformation(accessToken, device)))

    done(null, devices)
  } catch (error) {
    done(error)
  }
}

module.exports = { handler }
