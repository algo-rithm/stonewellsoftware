'use strict'

module.exports = function (fastify, opts, next) {
  fastify.get('/api/v3/users', function (request, reply) {

    reply.send(fastify.someSupport())
  })


  




  next()
}
