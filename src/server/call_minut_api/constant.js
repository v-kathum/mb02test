const MINUT_URL_PREFIX = 'https://api.minut.com'

module.exports.MINUT_LOGIN_DATA = {
  client_id: 'b2476a2909f68667',
  redirect_uri: 'http://localhost:8080',
  client_secret: '8c23a4179c932071a2ff9f6f7fc828f8',
  password: 'sn5wLV0lCGHj7A',
  grant_type: 'password',
  username: 'rhp@example.com'
}

module.exports.MINUT_URL = 'https://api.minut.com'
module.exports.MINUT_LOGIN_URL = `${MINUT_URL_PREFIX}/v1/oauth/token`
module.exports.MINUT_DEVICES_URL = `${MINUT_URL_PREFIX}/draft1/admin/devices`

module.exports.COSMOS_DB_CONNECTION_ENDPOINT = 'https://minut-db.documents.azure.com:443/'
module.exports.COSMOS_DB_CONNECTION_KEY = 'LeVtIh77Qhe7BysE3yyje1V2r9wN3hvsuorqcdMHYCoILxIra1WdpoB54Drw5nx2H0DebuL0637BETWpP9Bvig=='
module.exports.COSMOS_DB_COL_NAME = 'devices'

module.exports.SQL_CONNECTION_STRING = process.env.SQL_CONNECTION_STRING || 'iafinancialanalysisnew.postgres.database.azure.com'
module.exports.DATABASE_NAME = process.env.DATABASE_NAME || 'wandlepg'
module.exports.POSTGRES_USER = process.env.POSTGRES_USER || 'wandlepg1414145@iafinancialanalysisnew.postgres.database.azure.com'
module.exports.POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || 'JjoupoespappaGesELSSKAP'
module.exports.POSTGRES_PORT = process.env.POSTGRES_PORT || 5432

module.exports.QUERIES_TEXT = 'INSERT INTO minut_latest (device_id, device_mac, account_id, home_id, offline, active, last_heard_from_at, first_seen_at, firmware, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)'

module.exports.QUERIES_VALUE = ['device_id', 'device_mac', 'account_id', 'home_id', 'offline', 'active', 'last_heard_from_at', 'first_seen_at', 'firmware.wanted', 'description']
