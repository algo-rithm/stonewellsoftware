'use strict'

module.exports = function (fastify, opts, next) {
  fastify.get('/api/v1/users', function (request, reply) {

    reply.send(fastify.someSupport())
  })

  next()
}
