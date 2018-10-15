const { handler } = require('database_call')
const nock = require('nock')
const test = require('ava')

test.cb('database_call: RECEIVE QUEUE INFORMATION', (t) => {
  const bindings = {}
  const scope = ''

  const done = (error, success) => {

    t.end()
  }

  handler({ bindings, done })
})
