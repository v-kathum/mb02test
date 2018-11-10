module.exports.SQL_CONNECTION_STRING = process.env.SQL_CONNECTION_STRING || 'iafinancialanalysisnew.postgres.database.azure.com'
module.exports.DATABASE_NAME = process.env.DATABASE_NAME || 'wandlepg'
module.exports.POSTGRES_USER = process.env.POSTGRES_USER || 'wandlepg1414145@iafinancialanalysisnew.postgres.database.azure.com'
module.exports.POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || 'JjoupoespappaGesELSSKAP'
module.exports.POSTGRES_PORT = process.env.POSTGRES_PORT || 5432

module.exports.QUERIES_TEXT = [
  'INSERT INTO minut_latest (device_id, device_mac, account_id, home_id, offline, active, last_heard_from_at, first_seen_at, firmware, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)'
]

module.exports.QUERIES_VALUE = [
  ['device_id', 'device_mac', 'account_id', 'home_id', 'offline', 'active', 'last_heard_from_at', 'first_seen_at', 'firmware.wanted', 'description']
]
