const handler = ({ bindings, done }) => {
  try {
    bindings.cosmosDevice = Object.assign(bindings.queueCosmosDbItem, {
      id: bindings.queueCosmosDbItem.device_id
    })

    console.log('Cosmos: ', bindings.cosmosDevice)

    done(null, bindings.cosmosDevice)
  } catch (error) {
    done(error)
  }
}

module.exports = { handler }
