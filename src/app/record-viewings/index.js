import express from 'express'

function createActions ({ db }) {
  function recordViewing (traceId, videoId) {
    return Promise.resolve(true)
  }

  return {
    recordViewing
  }
}

function createHandlers ({ actions }) {
  function handleRecordViewing (req, res) {
    return actions
      .recordViewing(req.context.traceId, req.params.videoId)
      .then(() => res.redirect('/'))
  }

  return {
    handleRecordViewing
  }
}

function createRecordViewings ({ db }) {
  const actions = createActions({
    db
  })
  const handlers = createHandlers({ actions })

  const router = express.Router()

  router.route('/:videoId').post(handlers.handleRecordViewing)

  return { actions, handlers, router }
}

export { createRecordViewings }
