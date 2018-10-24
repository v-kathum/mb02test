const handler = async ({ bindings, done, log }, message) => {
  bindings.cosmosDevice = Object.assign(message, {
    id: message.device_id
  })

  done(null, bindings.cosmosDevice)
}

module.exports = { handler }
