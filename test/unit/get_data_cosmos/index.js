const { handler } = require('get_data_cosmos')
const nock = require('nock')
const test = require('ava')

const {
  GET_DATABASE_DATA
} = require('constant/get_data')

test.cb('insert_into_cosmos: GET DATABASE DATA', (t) => {
  const bindings = {}
  const scope =
    nock(/api\.minut\.com/)
      .get('/data/cosmos/all', /.*/)
      .reply(200, GET_DATABASE_DATA)

  const done = (error, success) => {
    t.true(scope.isDone())
    t.deepEqual(success, GET_DATABASE_DATA)
    t.falsy(error)
    t.end()
  }

  handler({ bindings, done })
})
