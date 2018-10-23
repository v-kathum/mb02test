const { handler } = require('insert_into_cosmos')
// const nock = require('nock')
const test = require('ava')

const {
  INSERT_INTO_DATA,
  TEST_DATA
} = require('constant/insert_into')

test.cb('insert_into_cosmos: RECEIVE QUEUE INFORMATION', (t) => {
  const bindings = {
    queueCosmosDbItem: INSERT_INTO_DATA
  }

  console.log('Bindings Cosmos: ', bindings)

  const done = (error, success) => {
    t.deepEqual(success, TEST_DATA)
    t.falsy(error)
    t.end()
  }

  handler({ bindings, done })
})
