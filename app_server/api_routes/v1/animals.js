'use strict'

module.exports = function (fastify, opts, next) {
  fastify.get('/animals', function (request, reply) {

    reply.send(fastify.someSupport())
  })







  next()
}
