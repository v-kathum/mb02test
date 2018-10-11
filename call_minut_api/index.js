const request = require('request')
const _ = require('lodash')

const minutUrl = 'https://api.minut.com'

const getDeviceList = (token, done) => {
  request.get(`${minutUrl}/draft1/admin/devices`, {
    'auth': {
      'bearer': token
    }
  }, (error, response, body) => {
    if (error) {
      return done(error)
    } else {
      const deviceBody = _.get(JSON.parse(body), 'devices')
      return deviceBody
    }
  })
}

// const getTempList = (id) => {
//   request.get(`$(minutUrl)/devices/${device_id}/temperature`, {
//   })
// }

const handler = ({ done }) => {
  request.post({
    url: `${minutUrl}/v1/oauth/token`,
    formData: {
      client_id: 'b2476a2909f68667',
      redirect_uri: 'http://localhost:8080',
      client_secret: '8c23a4179c932071a2ff9f6f7fc828f8',
      password: 'sn5wLV0lCGHj7A',
      grant_type: 'password',
      username: 'rhp@example.com'
    }
  }, (e, r, b) => {
    if (e) {
      return done(e)
    } else {
      const body = JSON.parse(b)
      const accessToken = body.access_token
      const deviceList = getDeviceList(accessToken, done)
      console.log('Device List: ', deviceList)
      // const tempList = getTempList()
      // request.get('https://api.minut.com/draft1/admin/devices', {
      //   'auth': {
      //     'bearer': accessToken
      //   }
      // }, (error, response, body) => {
      //   if (error) {
      //     return done(error)
      //   } else {
      //     const deviceBody = _.get(JSON.parse(body), 'devices')
      //     const deviceData = _.map(deviceBody, (device) => {
      //       const getTempAttr = {}
      //       const getSoundAttr = {}
      //       const getHumdityAttr = {}
      //       request.get('https://api.minut.com/draft1/admin/devices/${device.device_id}', {
      //         'auth': {
      //           'bearer': accessToken
      //         }
      //       }, (error, response, body) => {
      //         if(error) {
      //           return done(error)
      //         } error {
      //           console.log('Body stuff: ', body)
      //         }
      //       })
      //       return {
      //         id: device.device_id,
      //         mac: device.device_mac,
      //         account: device.account_id,
      //         home: device.home_id
      //       }
      //     })
      //     console.log('Device Data: ', deviceData)
      //   }
      // })
    }
  })
}

module.exports = { handler }
