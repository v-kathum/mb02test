// const { Client } = require('pg')

// const {
//   SQL_CONNECTION_STRING,
//   DATABASE_NAME,
//   COLLECTION_NAME
// } = require('/constant')

const handler = ({ bindings, done }) => {
  try {
    bindings.postGresDevice = Object.assign(bindings.queuePostGresDbItem, {
      id: bindings.queuePostGresDbItem.device_id
    })

    // const pool = new Pool ( {
    //   user: '',
    //   host: 'database.server.com',
    //   database: 'mydb',
    //   password: 'secretpassword',
    //   port: 3211,
    // })

    // await client.connect

    done(null, bindings.postGresDevice)
  } catch (error) {
    done(error)
  }
}

module.exports = { handler }
