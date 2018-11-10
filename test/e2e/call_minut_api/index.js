const { handler } = require('call_minut_api')

handler({
  bindings: {},
  done: console.log.bind(console),
  log: console.log.bind(console)
})
