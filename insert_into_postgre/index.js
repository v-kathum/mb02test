const handler = ({ bindings, done }) => {
  try {
    bindings.postGresDevice = Object.assign(bindings.queuePostGresDbItem, {
      id: device.device_id
    })

    done(null, bindings.postGresDevice)
  } catch (error) {
    done(error)
  }
}

module.exports = { handler }
