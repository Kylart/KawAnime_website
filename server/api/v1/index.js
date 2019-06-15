import { Router } from 'express'

import analytics from './analytics'

const routes = [
  ...analytics
]

export default function (app) {
  const router = new Router()

  routes.forEach(({ path, method, handler }) => {
    router[method](path, handler)
  })

  app.use('/api/v1', router)
}
