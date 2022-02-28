import express from 'express'
import { mountMiddleware } from './mount-middleware.js'
import { mountRoutes } from './mount-routes.js'
import path from 'path'

function createExpressApp ({ config, env }) {
  const app = express()
  app.set('views', path.join(path.dirname('.'), '..'))
  app.set('view engine', 'pug')
  mountMiddleware(app, env)
  mountRoutes(app, config)
  return app
}

export { createExpressApp }
