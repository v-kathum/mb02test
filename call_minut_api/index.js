const request = require('request')

const handler = ({ done }) => {
  request.post({
    url: 'https://api.minut.com/v1/oauth/token',
    formData: {
      client_id: 'b2476a2909f68667',
      redirect_uri: 'http://localhost:8080',
      client_secret: '8c23a4179c932071a2ff9f6f7fc828f8',
      password: 'sn5wLV0lCGHj7A',
      grant_type: 'password',
      username: 'rhp@example.com'
    }
  }, (error, response, body) => {
    if (error) {
      return done(error)
    } else {
      const accessToken = body.access_token
      request.get('https://api.minut.com/draft1/admin/devices', {
        'auth': {
          'bearer': accessToken
        }
      }, (error, response, body) => {
        if (error) {
          return done(error)
        } else {
          done(null, body)
        }
      })
    }
  })
}

module.exports = { handler }
