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
  const id = data.id || null

  if (id) {
    client.hincrby(`usr:${id}`, 'hits', 1, redis.print)
    client.sadd(`usr:${id}:ips`, ip, redis.print)
    client.lpush(`usr:${id}:connections`, now.getTime())
  }

  res.send()
}

module.exports = {
  store
}
