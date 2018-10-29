import express from 'express'
import session from 'express-session'
import mongoSessionStore from 'connect-mongo'
import next from 'next'
import mongoose from 'mongoose'

import dotenv from 'dotenv'
import auth from './google'

dotenv.config()

const dev = process.env.NODE_ENV !== 'production'
const MONGO_URL = process.env.MONGO_URL_TEST

mongoose.connect(
  MONGO_URL,
  { useNewUrlParser: true },
)

const port = process.env.PORT || 8000
const ROOT_URL = dev ? `http://localhost:${port}` : 'moviesearcher.app'

const app = next({ dev })
const handle = app.getRequestHandler()

// Nextjs's server prepared
app.prepare().then(() => {
  const server = express()

  // confuring MongoDB session store
  const MongoStore = mongoSessionStore(session)
  const sess = {
    name: 'MSbook.sid',
    secret: 'HD2w.)q*VqRT4/#NK2M/,E^B)}FED5fWU!dKe[wk',
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 14 * 24 * 60 * 60, // save session 14 days
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 14 * 24 * 60 * 60 * 1000,
    },
  }

  server.use(session(sess))

  auth({ server, ROOT_URL })

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on ${ROOT_URL}`) // eslint-disable-line no-console
  })
})
