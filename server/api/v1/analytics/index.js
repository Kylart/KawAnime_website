/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 */

/**
 *
 * @param {Request} req Express Request
 * @param {Response} res Express Response
 */
async function post (req, res) {
  res.json({ hello: 'world' })
}

export default [
  { path: '/analytics', method: 'post', handler: post }
]
