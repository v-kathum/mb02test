const { handler } = require('insert_into_postgre')
// const nock = require('nock')
const test = require('ava')

const {
  INSERT_INTO_DATA,
  TEST_DATA
} = require('constant/insert_into')

test.cb('insert_into_postgre: RECEIVE QUEUE INFORMATION', (t) => {
  const bindings = {
    queuePostGresDbItem: INSERT_INTO_DATA
  }

  const done = (error, success) => {
    t.deepEqual(success, TEST_DATA)
    t.falsy(error)
    t.end()
  }

  handler({ bindings, done })
})

