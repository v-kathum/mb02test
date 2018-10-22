const {
  GET_DATABASE_DATA
} = require('./constant')

const handler = ({ bindings, done }) => {
  try {
    const req = bindings.req

    const httpObj = {
      body: req.body
      // method: req.method,
      // url: req.originalUrl,
      // headers: req.headers,
      // param: req.params
    }

    console.log('http object: ', httpObj)

    bindings.res = {
      headers: {
        'content-type': 'application/json'
      },
      body: {
        'devices': GET_DATABASE_DATA
      }
    }

    done(null, bindings.res)
  } catch (error) {
    done(error)
  }
}

module.exports = { handler }
