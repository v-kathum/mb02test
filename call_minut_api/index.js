const request = require('request')
const _ = require('lodash')
const async = require('async')

const minutUrl = 'https://api.minut.com'
const paths = ['temperature', 'sound', 'humidity', 'battery']

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

// const getDeviceInformation = (token, devices, path) => {
//   const names = ['temperature', 'sound', 'humidity', 'battery'].reduce((result, type) => {
//     devices.forEach((device) => result.push({
//       deviceId: device.device_id, type
//     }))
//   }, [])

//   async.parallel(names, (error, result) => {
//     console.log(result)
//     if (error) {
//       console.log(error)
//     } else {
//       console.log('Results: ', result)
//       request.get(`${minutUrl}/draft1/admin/devices/${result[0].deviceId}/${result[0].type}`)
//     }
//   })
// }

const getDeviceInformation = (token, device) => {
  const {
    device_id: deviceId,
  } = device

  const getInfo = request.get(`${minutUrl}/draft1/admin/devices/${deviceId}/${path}`, (err, response, body) => {
    if(error) {
      console.log(error)
    } else {
      console.log('Body: ', body)
      return body
    }
  })

  const devpaths.forEach()

}

const handler = async ({ done }) => {
  try {
    const {
      access_token: accessToken
    } = await getLogin()

    const devices = await getDeviceList(accessToken)
    const device = devices[0]
    const devicesTemp = await getDeviceInformation(accessToken, device)
    console.log('Devices Temp: ', devicesTemp)

    done(null, devices)
  } catch (error) {
    done(error)
  }
}

module.exports = { handler }
