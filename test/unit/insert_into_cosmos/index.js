const {
  INSERT_INTO_DATA
} = require('constant/insert_into')

const { handler } = require('insert_into_cosmos')
const test = require('ava')

test.cb('success', (t) => {
  const bindings = {}
  const message = INSERT_INTO_DATA[0]

  const done = (error, success) => {
    t.falsy(error)
    t.deepEqual(success, Object.assign(message, {
      id: message.device_id
    }))
    t.end()
  }

  handler({ bindings, done, log: console.log.bind(console) }, message)
})
