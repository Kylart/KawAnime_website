const router = require('express').Router()
const subdomain = require('express-subdomain')
const storeUsers = require('./storeUsers.js')

module.exports = (app) => {
  router.post('/', (req, res) => {
    req.on('data', (chunk) => {
      chunk = JSON.parse(chunk)
      storeUsers.store(chunk, req, res)
    })
  })

  app.use(subdomain('api', router))
}
