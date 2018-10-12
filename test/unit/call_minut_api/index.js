const { handler } = require('call_minut_api')
const nock = require('nock')
const test = require('ava')

const devicesBody = {
  'devices': [
    {
      'device_id': '55a62ad4f171ec14540dd918',
      'device_mac': 'c0de008e078e',
      'account_id': '55a526d6908524fd0ffe2b8e',
      'home_id': '56fe671c0dacfdc73fd6d83f',
      'offline': true,
      'active': true,
      'last_heard_from_at': 1478189329,
      'first_seen_at': 1436953301,
      'firmware': {
        'wanted': 2513
      },
      'description': 'Office',
      'battery': {
        'low_warning_sent_at': null,
        'percent': null
      }
    }
  ]
}

// const devicesEvents = {
//   id: '0'

// }

const soundData = {
  'unit': '',
  'time_resolution': null,
  'values': []
}

const tempData = {
  'unit': 'celsius',
  'time_resolution': null,
  'values': []
}

const humdityData = {
  'unit': '% rH',
  'time_resolution': null,
  'values': []
}

const batteryData = {
  'unit': '',
  'time_resolution': null,
  'values': []
}

test.cb('call_minut_api: Get user credentials', (t) => {
  const scope =
    nock(/api\.minut\.com/)
      .post(/\/v1\/oauth\/token/, /.*/)
      .reply(200, {
        'access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI1YWIyMzVlNzQ5Y2NiZDAwMDFhOGNmMzgiLCJyb2xlcyI6WyJhZG1pbiJdLCJvcmdJZCI6InJocCIsInNjb3BlIjoiIiwiaWF0IjoxNTM5MTgyMTMxLCJleHAiOjE1MzkxODU3MzEsImlzcyI6Ik1pbnV0LCBJbmMuIn0.iBRUFJ6FNSaZOBsSvp8hYSbP89o8xJXoK6jXOHBeG54',
        'refresh_token': 'kHAN40CiBaBuY6Tkk9FJB5HKA6AnHSKg',
        'expires_in': '3600',
        'user_id': '5ab235e749ccbd0001a8cf38',
        'token_type': 'Bearer'
      })

  const done = (error, success) => {
    t.true(scope.isDone())
    t.truthy(error)
    t.end()
  }

  handler({ done })
})

test.cb('call_minut_api: Get device list', (t) => {
  const scope =
    nock(/api\.minut\.com/)
      .get(/\/draft1\/admin\/devices/, /.*/)
      .reply(200, devicesBody)

  const done = (error, success) => {
    t.false(scope.isDone())
    t.falsy(success === devicesBody)
    t.truthy(error)
    t.end()
  }

  handler({ done })
})

test.cb('call_minut_api: Get device information', (t) => {
  const scope =
    nock(/api\.minut\.com/)
      .get(/\/draft1\/admin\/devices\/55a62ad4f171ec14540dd918\/temperature/, /.*/)
      .reply(200, tempData)
      .get(/\/draft1\/admin\/devices\/55a62ad4f171ec14540dd918\/battery/, /.*/)
      .reply(200, batteryData)
      .get(/\/draft1\/admin\/devices\/55a62ad4f171ec14540dd918\/sound/, /.*/)
      .reply(200, soundData)
      .get(/\/draft1\/admin\/devices\/55a62ad4f171ec14540dd918\/humidity/, /.*/)
      .reply(200, humdityData)
      // .get(/\/draft1\/events\/#\/parameters\/order/, /.*/)
      // .reply(200, devicesEvents)

  const done = (error, success) => {
    t.false(scope.isDone())
    t.falsy(success === tempData)
    t.truthy(error)
    t.end()
  }

  handler({ done })
})
// test.cb('call_minut_api', (t) => {
//   const body = 'body'
//   const scope =
//     nock(/api\.minut\.com/)
//       .post(/\/v1\/oauth\/token/, /.*/)
//       .reply(401, body)

//   const done = (e, success) => {
//     t.true(scope.isDone())
//     t.falsy(success === body)
//     t.end()
//   }

//   handler({ done })
// })
