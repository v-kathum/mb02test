// import _ from lodash // import lodash

const request = require('request')
// const deviceData = []

const handler = ({ done }) => {
  request.post({
    url: 'https://api.minut.com/v1/oauth/token',
    'content-type': 'application/json',
    formData: {
      client_id: 'b2476a2909f68667',
      redirect_uri: 'http://localhost:8080',
      client_secret: '8c23a4179c932071a2ff9f6f7fc828f8',
      password: 'sn5wLV0lCGHj7A',
      grant_type: 'password',
      username: 'rhp@example.com'
    }
  }, (e, r, b) => {
    if (e) {
      return done(e)
    } else {
      console.log('Error: ', e)
      console.log('Response: ', r)
      console.log('Body (index): ', b)
      console.log('Access Token: ', b.access_token)
      // const accessToken = b.access_token
    }
    console.log('Upload successful!  Server responded with:', b)
  })
}

module.exports = { handler }
