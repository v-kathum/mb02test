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
