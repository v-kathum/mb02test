const handler = ({ bindings, done }) => {
  try {
    bindings.cosmosDevice = Object.assign(bindings.queueCosmosDbItem, {
      id: device.device_id
    })

    done(null, bindings.cosmosDevices)
  } catch (error) {
    done(error)
  }
}

module.exports = { handler }
