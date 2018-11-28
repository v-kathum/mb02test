const express = require('express')

const port = process.env.PORT || 8080

const app = express()

app.get('/', (req, res) => res.status(200).send('Hello!'))

app.listen(PORT, () => console.log(`Started on ${PORT}`))
