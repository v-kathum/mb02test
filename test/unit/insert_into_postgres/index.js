const {
  INSERT_INTO_DATA
} = require('constant/insert_into')

const {
  QUERIES_TEXT
} = require('insert_into_postgres/constant')

const proxyquire = require('proxyquire')
const sinon = require('sinon')
const test = require('ava')

const resolvePath = (x) => x

test.cb('success', (t) => {
  class Client {
    connect () {}
    end () {}
    query () {}
  }

  const connect =
    sinon
      .stub(Client.prototype, 'connect')
      .resolves('Client Connected')

  const end =
    sinon
      .stub(Client.prototype, 'end')
      .resolves('Client Disconnected')

  const query =
    sinon
      .stub(Client.prototype, 'query')
      .resolves('Queried')

  const { handler } = proxyquire('insert_into_postgres', {
    [resolvePath('pg')]: {
      Client
    }
  })

  const message = INSERT_INTO_DATA[0]

  const done = (error, success) => {
    t.falsy(error)
    t.true(connect.calledOnce)
    t.true(end.calledOnce)
    t.true(query.callCount === QUERIES_TEXT.length)
    t.end()
  }

  handler({ done, log: console.log.bind(console) }, message)
})
