// request.post({
//   url: `${minutUrl}/v1/oauth/token`,
//   formData: {
//     client_id: 'b2476a2909f68667',
//     redirect_uri: 'http://localhost:8080',
//     client_secret: '8c23a4179c932071a2ff9f6f7fc828f8',
//     password: 'sn5wLV0lCGHj7A',
//     grant_type: 'password',
//     username: 'rhp@example.com'
//   }
// }, (e, r, b) => {
//   if (e) {
//     return done(e)
//   } else {
//     const body = JSON.parse(b)
//     const accessToken = body.access_token
//     async.parallel(devices.map((device) => (done) => {
//       // make the request, when it's successfull do done(null, data), if there's an error done(error)
//     }), (error, results) => {
//       if (error) {
//         return reject(error)
//       }

//       resolve(results)
//     })
//     const deviceBody = getDeviceList(accessToken, done)
//     // const tempList = getTempList()
//     // request.get('https://api.minut.com/draft1/admin/devices', {
//     //   'auth': {
//     //     'bearer': accessToken
//     //   }
//     // }, (error, response, body) => {
//     //   if (error) {
//     //     return done(error)
//     //   } else {
//     //     const deviceBody = _.get(JSON.parse(body), 'devices')
//     //     const deviceData = _.map(deviceBody, (device) => {
//     //       const getTempAttr = {}
//     //       const getSoundAttr = {}
//     //       const getHumdityAttr = {}
//     //       request.get('https://api.minut.com/draft1/admin/devices/${device.device_id}', {
//     //         'auth': {
//     //           'bearer': accessToken
//     //         }
//     //       }, (error, response, body) => {
//     //         if(error) {
//     //           return done(error)
//     //         } error {
//     //           console.log('Body stuff: ', body)
//     //         }
//     //       })
//     //       return {
//     //         id: device.device_id,
//     //         mac: device.device_mac,
//     //         account: device.account_id,
//     //         home: device.home_id
//     //       }
//     //     })
//     //     console.log('Device Data: ', deviceData)
//     //   }
//     // })
//   }
// })

// .map(({ type, deviceId }) => (done) => {
//   console.log('Type: ', type)
//   console.log('Device Id: ', deviceId)
//   request.get(`${minutUrl}/draft1/admin/devices/${deviceId}/${type}`, {
//     'auth': {
//       'bearer': token
//     },
//     'json': true
//   }, (error, response, body) => {
//     if (error) {
//       return done(error)
//     }
//     return body
//   })
// })

// .get(/\/draft1\/admin\/devices\/5ab27262b933c045e709ea9f\/battery/, /.*/)
//       .reply(200, batteryData)
//       .get(/\/draft1\/admin\/devices\/5ab27262b933c045e709ea9f\/sound/, /.*/)
//       .reply(200, soundData)
//       .get(/\/draft1\/admin\/devices\/5ab27262b933c045e709ea9f\/humidity/, /.*/)
//       .reply(200, humdityData)
//       .get(/\/draft1\/events\/#\/parameters\/order/, /.*/)
//       .reply(200, devicesEvents)
