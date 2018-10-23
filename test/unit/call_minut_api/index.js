const { handler } = require('call_minut_api')
const {
  LOGIN_BODY,
  DEVICES_BODY,
  TEMP_DATA,
  BATTERY_DATA,
  HUMIDITY_DATA,
  SOUND_DATA,
  TEST_DATA
} = require('constant/call_minut_api')
const nock = require('nock')
const test = require('ava')

test.cb('call_minut_api: GET DEVICE INFORMATION', (t) => {
  const bindings = {}
  const scope =
    nock(/api\.minut\.com/)
      .post('/v1/oauth/token', /.*/)
      .reply(200, LOGIN_BODY)
      .get('/draft1/admin/devices', /.*/)
      .reply(200, DEVICES_BODY)
      .get('/draft1/admin/devices/55a62ad4f171ec14540dd918/temperature', /.*/)
      .reply(200, TEMP_DATA)
      .get('/draft1/admin/devices/55a62ad4f171ec14540dd918/battery', /.*/)
      .reply(200, BATTERY_DATA)
      .get('/draft1/admin/devices/55a62ad4f171ec14540dd918/sound', /.*/)
      .reply(200, SOUND_DATA)
      .get('/draft1/admin/devices/55a62ad4f171ec14540dd918/humidity', /.*/)
      .reply(200, HUMIDITY_DATA)

  const done = (error, success) => {
    t.true(scope.isDone())
    t.deepEqual(success, TEST_DATA)
    t.deepEqual(success, bindings.queueCosmosDb)
    t.deepEqual(success, bindings.queuePostGres)
    t.falsy(error)
    t.end()
  }

  handler({ bindings, done })
})

// test.cb('call_minut_api: FAILED TO GET DEVICE INFORMATION', (t) => {
//   const bindings = {}
//   const scope =
//     nock(/api\.minut\.com/)
//       .post('/v1/oauth/token', /.*/)
//       .reply(500, LOGIN_BODY)
//       .get('/draft1/admin/devices', /.*/)
//       .reply(500, DEVICES_BODY)
//       .get('/draft1/admin/devices/55a62ad4f171ec14540dd918/temperature', /.*/)
//       .reply(500, TEMP_DATA)
//       .get('/draft1/admin/devices/55a62ad4f171ec14540dd918/battery', /.*/)
//       .reply(500, BATTERY_DATA)
//       .get('/draft1/admin/devices/55a62ad4f171ec14540dd918/sound', /.*/)
//       .reply(500, SOUND_DATA)
//       .get('/draft1/admin/devices/55a62ad4f171ec14540dd918/humidity', /.*/)
//       .reply(500, HUMIDITY_DATA)

//   const done = (error, success) => {
//     t.false(scope.isDone())
//     t.truthy(error)
//     t.end()
//   }

//   handler({ bindings, done })
// })
