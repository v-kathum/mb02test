const {
  GET_DATABASE_DATA
} = require('constant/get_data_cosmos')

const proxyquire = require('proxyquire')
const sinon = require('sinon')
const test = require('ava')

const resolvePath = (x) => x

test.cb('success', (t) => {
  class DocumentClient {
    queryDocuments () {}
  }

  sinon
    .stub(DocumentClient.prototype, 'queryDocuments')
    .returns({
      toArray: sinon.stub().callsArgWith(0, null, GET_DATABASE_DATA)
    })

  const { handler } = proxyquire('get_data_cosmos', {
    [resolvePath('documentdb')]: {
      DocumentClient
    }
  })

  const res = {}
  const done = () => {
    t.deepEqual(res.body, GET_DATABASE_DATA)
    t.true(res.status === 200)
    t.end()
  }

  handler({ done, res, log: console.log.bind(console) })
})
