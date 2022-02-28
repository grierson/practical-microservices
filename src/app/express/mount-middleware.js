import express from 'express'
import path from 'path'
import { attachLocals } from './attach-locals.js'
import { lastResortErrorHandler } from './last-resort-error-handler.js'
import { primeRequestContext } from './prime-request-context.js'

function mountMiddleware (app, env) {
  app.use(lastResortErrorHandler)
  app.use(primeRequestContext)
  app.use(attachLocals)
  app.use(
    express.static(path.join(path.dirname('.'), '..', 'public'), { maxAge: 86400000 })
  )
}

export { mountMiddleware }
