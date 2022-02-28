function attachLocals (req, res, next) {
  res.locals.context = req.context
  next()
}

export { attachLocals }
