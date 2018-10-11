const request = require('request')
const _ = require('lodash')
// const async = require('async')

const minutUrl = 'https://api.minut.com'

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

// const getDeviceInformationOld = (token, devices, path) =>
//   new Promise((resolve, reject) => {
//     console.log('Get to Device Info Function')
//     const devInfo = _.map(devices, (device) => {
//       request.get(`${minutUrl}/devices/${device.id}/${path}`, {
//         'auth': {
//           'bearer': token
//         },
//         'json': true
//       }, (error, response, body) => {
//         if (error) {
//           return reject(error)
//         }

//         resolve(devInfo)
//       })
//     })
//   })

const getDeviceInformation = (token, devices, path) => {
  async.parallel(['temperature', 'sound', 'humidity', 'battery'].reduce((result, type) => {
    devices.forEach((device) => result.push({
      deviceId: device.id, type
    }))
  }, []).map(({ type, deviceId }) => (done) => {
    request.get(`${minutUrl}/devices/${deviceId}/${type}`, {
      'auth': {
        'bearer': token
      },
      'json': true
    }, (error, response, body) => {
      if (error) {
        return done(error)
      }
      return body
    })
  }), (error, result) => {
    if(error) {
      console.log('error')
    }
    else {
      return result
    }
  }))
}


const handler = async ({ done }) => {
  try {
    const {
      access_token: accessToken
    } = await getLogin()

    const devices = await getDeviceList(accessToken)
    const devicesTemp = await getDeviceInformation(accessToken, devices, 'temperature')
    const devicesSound = await getDeviceInformation(accessToken, devices, 'sound')
    const devicesHumidity = await getDeviceInformation(accessToken, devices, 'humidity')
    const devicesBattery = await getDeviceInformation(accessToken, devices, 'battery')

    console.log('Device Information: ', devicesTemp, devicesSound)

    done(null, deviceData)
  } catch (error) {
    done(error)
  }
}

module.exports = { handler }
