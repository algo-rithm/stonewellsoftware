const fp = require('fastify-plugin')

module.exports = fp(function (fastify, opts, next) {
  fastify.register(require('fastify-mongodb'), {
    forceClose: true,
    url: opts.url
  })
  next()
})
