import { json } from 'express'
import setupApi from './api/v1'

export default (app, http) => {
  app.use(json())

  setupApi(app)
}
