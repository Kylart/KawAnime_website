const {homedir} = require('os')
const {join} = require('path')
const {appendFileSync} = require('fs')
const redis = require('redis')
const client = redis.createClient()

client.on('error', (err) => {
  appendFileSync(join(homedir(), 'redis_log.txt'), err.message, 'utf-8')
})

const store = (data, req, res) => {
  const ip = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress ||
    null

  const now = new Date()

  if (ip) {
    client.hincrby(`ip:${ip}`, 'hits', 1, redis.print)
    client.lpush(`ip:${ip}:connections`, now.getTime())
  }

  res.send()
}

module.exports = {
  store
}
