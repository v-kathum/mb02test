module.exports.SQL_CONNECTION_STRING = process.env.SQL_CONNECTION_STRING || 'postgresql://iafinancialanalysisnew.postgres.database.azure.com'
module.exports.DATABASE_NAME = process.env.DATABASE_NAME || 'wandlepg'
module.exports.POSTGRES_USER = process.env.POSTGRES_USER || 'wandlepg1414145@iafinancialanalysisnew'
module.exports.POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || ''
module.exports.POSTGRES_PORT = process.env.POSTGRES_PORT || 5432

module.exports.QUERIES_TEXT = [
  'INSERT INTO devices(id, mac, account_id, home_id, offline, active, last_heard, first_seen, description) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
  'INSERT INTO firmware(deviceID, wanted) VALUES($1, $2)',
  'INSERT INTO battery(deviceID, unit, time_resolution, values) VALUES($1, $2, $3, $4)',
  'INSERT INTO sound(devceID, unit, time_resolution, values) VALUES($1, $2, $3, $4)',
  'INSERT INTO humidity(deviceID, unit, time_resolution, values) VALUES($1, $2, $3, $4)',
  'INSERT INTO temperature(deviceID, unit, time_resolution, values) VALUES($1, $2, $3, $4)'
]

module.exports.QUERIES_VALUE = [
  ['id', 'device_mac', 'account_id', 'home_id', 'offline', 'active', 'last_heard_from_at', 'first_seen_at', 'description'],
  ['id', 'wanted'],
  ['id', 'battery.unit', 'battery.time_resolution', 'battery.values'],
  ['id', 'sound.unit', 'sound.time_resolution', 'sound.values'],
  ['id', 'humidity.unit', 'humidity.time_resolution', 'humidity.values'],
  ['id', 'temp.unit', 'temp.time_resolution', 'temp.values']
]
