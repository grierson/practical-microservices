import express from 'express'
import { mountMiddleware } from './mount-middleware.js'
import { mountRoutes } from './mount-routes.js'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

function createExpressApp ({ config, env }) {
  const app = express()
  app.set('views', join(__dirname, '..'))
  app.set('view engine', 'pug')
  mountMiddleware(app, env)
  mountRoutes(app, config)
  return app
}

export { createExpressApp }
