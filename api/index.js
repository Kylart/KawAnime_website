const storeUsers = require('./storeUsers.js')

module.exports = (app) => {
  app.post('/_api', (req, res) => {
    req.on('data', (chunk) => {
      chunk = JSON.parse(chunk)
      storeUsers.store(chunk, req, res)
    })
  })
}
