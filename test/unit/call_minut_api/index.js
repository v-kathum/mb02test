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
    },
    {
      'device_id': '5ab27262b933c045e709ea9f',
      'device_mac': 'b0f1ec1d3210',
      'account_id': '5ab235e749ccbd0001a8cf38',
      'home_id': '5ab26fa472e79160c52b7465',
      'offline': false,
      'active': false,
      'last_heard_from_at': 1533634854,
      'first_seen_at': 1521644131,
      'firmware': {
        'installed': 10744,
        'wanted': null
      },
      'hardware_version': 105,
      'description': 'RHP Demo',
      'timezone': 'Europe/Stockholm',
      'battery': {
        'voltage': 3.61899995803833,
        'low_warning_sent_at': 1532632649,
        'percent': null
      }
    },
    {
      'device_id': '5adb7e707e9b57e7945f791b',
      'device_mac': 'b0f1ec1cf578',
      'account_id': '5adb7dc47e9b5757725f78e0',
      'home_id': '5adb7e00d615801aa139313b',
      'offline': true,
      'active': true,
      'last_heard_from_at': 1526824181,
      'first_seen_at': 1524334192,
      'firmware': {
        'installed': 10285
      },
      'hardware_version': 105,
      'description': 'Hallway',
      'timezone': 'Europe/London',
      'battery': {
        'voltage': 0.003000000026077032,
        'low_warning_sent_at': 1525980597,
        'percent': null
      }
    }
  ]
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
    t.falsy(error)
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
