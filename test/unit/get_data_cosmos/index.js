const {
  GET_DATABASE_DATA
} = require('constant/get_data_cosmos/')

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

  const stub = () => sinon.stub().returns(sinon.stub().callsArg(2))

  const { handler } = proxyquire('get_data_cosmos', {
    [resolvePath('documentdb')]: {
      DocumentClient
    },
    [resolvePath('passport')]: {
      use: sinon.stub(),
      initialize: stub(),
      session: stub(),
      authenticate: stub()
    },
    [resolvePath('cookie-parser')]: stub(),
    [resolvePath('express-session')]: stub()
  })

  const bindings = {
    req: {
      method: 'get',
      originalUrl: '/get/data/all'
    }
  }

  const res = {}

  const done = (error) => {
    t.true(res.status === 200)
    t.falsy(error)
    t.end()
  }

  handler({ bindings, done, res, log: console.log.bind(console) })
})
