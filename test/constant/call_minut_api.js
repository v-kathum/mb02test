module.exports.LOGIN_BODY = {
  'access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI1YWIyMzVlNzQ5Y2NiZDAwMDFhOGNmMzgiLCJyb2xlcyI6WyJhZG1pbiJdLCJvcmdJZCI6InJocCIsInNjb3BlIjoiIiwiaWF0IjoxNTM5MTgyMTMxLCJleHAiOjE1MzkxODU3MzEsImlzcyI6Ik1pbnV0LCBJbmMuIn0.iBRUFJ6FNSaZOBsSvp8hYSbP89o8xJXoK6jXOHBeG54',
  'refresh_token': 'kHAN40CiBaBuY6Tkk9FJB5HKA6AnHSKg',
  'expires_in': '3600',
  'user_id': '5ab235e749ccbd0001a8cf38',
  'token_type': 'Bearer'
}

const DEVICE_BODY = {
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

module.exports.DEVICES_BODY = {
  'devices': [ DEVICE_BODY ]
}

const TEMP_DATA = module.exports.TEMP_DATA = {
  'unit': 'celsius',
  'time_resolution': null,
  'values': []
}

const HUMIDITY_DATA = module.exports.HUMIDITY_DATA = {
  'unit': '% rH',
  'time_resolution': null,
  'values': []
}

const SOUND_DATA = module.exports.SOUND_DATA = {
  'unit': '',
  'time_resolution': null,
  'values': []
}

const BATTERY_DATA = module.exports.BATTERY_DATA = {
  'unit': '',
  'time_resolution': null,
  'values': []
}

module.exports.TEST_DATA = [Object.assign(DEVICE_BODY, {
  temp: TEMP_DATA,
  humidity: HUMIDITY_DATA,
  sound: SOUND_DATA,
  battery: BATTERY_DATA
})]

module.exports.EVENTS_DATA = {
  'events': [
    {
      'type': 'alarm_heard'
    }
  ]
}
