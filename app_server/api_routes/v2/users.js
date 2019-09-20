module.exports = function (fastify, opts, next) {
  fastify.get('/user', function (req, rep) {
    rep.send('v2 user')
  })
  next()
}
