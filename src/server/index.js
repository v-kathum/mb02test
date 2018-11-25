const {
  DB_COLLECTION_NAME,
  DB_HOST,
  DB_NAME,
  DB_KEY
} = require('./db/constant')

const {
  DocumentClient
} = require('documentdb')

const {
  OIDCStrategy
} = require('passport-azure-ad')

const CONFIG_TTL = 28000
const SESSION_DB_NAME = 'frontend-sessions'
const SESSION_SECRET = 'azureminutwanda=nosecret'
const OIDC_CLIENT_ID = 'fc4d3f50-0259-44b0-af46-0138eaa3130f'
const OIDC_CLIENT_SECRET = '2Yl2hRGzApXU2wTWceN6qSmhq3zVT94/U1j3xbMC8U8='
const PORT = process.env.PORT || 8000

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const DocumentDBSession = require('documentdb-session')
const express = require('express')
const helmet = require('helmet')
const passport = require('passport')
const path = require('path')
const session = require('express-session')

const callMinutAPI = require('./call_minut_api')

const app = express()
const DocumentDBStore = DocumentDBSession(session)

const client = new DocumentClient(DB_HOST, {
  masterKey: DB_KEY
})

const dbConfig = {
  host: DB_HOST,
  key: DB_KEY,
  collection: SESSION_DB_NAME,
  database: SESSION_DB_NAME,
  ttl: CONFIG_TTL
}

const sessionConfig = {
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 28000000,
    secure: true
  },
  store: new DocumentDBStore(dbConfig)
}

const query = (queryString, queryPath) =>
  new Promise((resolve, reject) =>
    client
      .queryDocuments(
        queryPath,
        queryString, {
          enableCrossPartitionQuery: true
        })
      .toArray((error, results) => {
        console.log({ queryString, queryPath, error, results }, results && results.length)

        if (error) {
          reject(error)
        } else {
          resolve(results)
        }
      })
  )

const getAllDevices = () => query('SELECT * FROM c', `dbs/${DB_NAME}/colls/${DB_COLLECTION_NAME}/`)

passport.use(new OIDCStrategy({
  identityMetadata: 'https://login.microsoftonline.com/common/.well-known/openid-configuration',
  clientID: OIDC_CLIENT_ID,
  responseType: 'code id_token',
  responseMode: 'form_post',
  redirectUrl: 'https://portal.azure.com', // Change
  passReqToCallback: true,
  clientSecret: OIDC_CLIENT_SECRET,
  isB2C: true
}, (iss, sub, profile, accessToken, refreshToken, done) => {
  done(null, profile)
}))

app.disable('x-powered-by')

app.use(bodyParser.json({
  extended: false
}))

app.use(cors())
app.use(helmet())
app.use(cookieParser(SESSION_SECRET))
app.use(session(sessionConfig))
app.use(passport.initialize())
app.use(passport.session())

app.use(passport.authenticate('azuread-openidconnect', { failureRedirect: '/' }))

app.use(express.static(path.resolve(process.cwd(), './build/client/')))

app.get('/get/data/all', async (req, res) => {
  try {
    const results = await getAllDevices()

    res.json(results)
  } catch (error) {
    res.sendStatus(500)
  }
})

app.listen(PORT, () => {
  try {
    setInterval(callMinutAPI, 60 * 5 * 1000)
    callMinutAPI()
  } catch (error) {
    console.log(error)
  }

  console.log(`Started on ${PORT}`)
})
