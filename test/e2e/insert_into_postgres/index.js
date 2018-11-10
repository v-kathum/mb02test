const { handler } = require('insert_into_postgres')

handler({
  bindings: {},
  done: console.log.bind(console),
  log: console.log.bind(console),
  message: { 'device_id': '55a62ad4f171ec14540dd918', 'device_mac': 'c0de008e078e', 'account_id': '55a526d6908524fd0ffe2b8e', 'home_id': '56fe671c0dacfdc73fd6d83f', 'offline': true, 'active': true, 'last_heard_from_at': 1478189329, 'first_seen_at': 1436953301, 'firmware': { 'wanted': 2513 }, 'description': 'Office', 'battery': { 'unit': '', 'time_resolution': null, 'values': [] }, 'humidity': { 'unit': '% rH', 'time_resolution': null, 'values': [] }, 'sound': { 'error': 'missing', 'message': 'Resource not found', 'status': 404, 'context': '/draft1/admin/devices/55a62ad4f171ec14540dd918/sound' }, 'temperature': { 'unit': 'celsius', 'time_resolution': null, 'values': [] }, 'events': { 'events': [] } }
})
