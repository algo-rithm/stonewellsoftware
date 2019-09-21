'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')


module.exports = function (fastify, opts, next) {


  //Activate MONGO DB
  fastify.register(require('./app_server/models/db'), {
    url: 'mongodb://localhost:27017/stonewellsoftware'
  })

  fastify.register(require('fastify-jwt'), { secret: 'supersecret' })
  fastify.register(require('fastify-leveldb'), { name: 'authl3db' })
  fastify.register(require('fastify-auth'))

  //Enable PUG Javascript Rendering Engine
  fastify.register(require('point-of-view'), { engine: { pug: require('pug') }})

  // fastify.register(require('fastify-static'), {
  //   root: path.join(__dirname, 'public')
  // })
  fastify.register(require('fastify-static'), { root: path.join(__dirname, 'app_public', 'build')})

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'app_server/plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in services
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'app_server/services'),
    options: Object.assign({}, opts)
  })

  fastify.register(require('./app_server/api_routes/v1/users'), { prefix: '/v1' })
  fastify.register(require('./app_server/api_routes/v1/animals'), { prefix: '/v1' })
  fastify.register(require('./app_server/api_routes/v2/users'), { prefix: '/v2' })

  // Make sure to call next when done
  next()
}
