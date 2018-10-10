const { handler } = require('call_minut_api')
const nock = require('nock')
const test = require('ava')

test.cb('call_minut_api', (t) => {
  const scope =
    nock(/api\.minut\.com/)
      .post(/\/v1\/oauth\/token/, /.*/)
      .reply(200)

  const done = (error, success) => {
    t.true(scope.isDone())
    console.log(error)
    t.falsy(error)
    // t.truthy(success === body)
    t.end()
  }

  handler({ done })
})

// test.cb('call_minut_api', (t) => {
//   const body = 'body'
//   const scope =
//     nock(/api\.minut\.com/)
//       .post(/\/v1\/oauth\/token/, /.*/)
//       .reply(401, body)

//   const done = (e, success) => {
//     t.true(scope.isDone())
//     t.falsy(success === body)
//     t.end()
//   }

//   handler({ done })
// })
