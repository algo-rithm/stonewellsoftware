'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')

module.exports = function (fastify, opts, next) {
  // Place here your custom code!

  //Activate MONGO DB
  fastify.register(require('fastify-mongodb'), {
    forceClose: true,
    url: 'mongodb://localhost:27017/stonewellsoftware'
  })

  //Enable PUG Javascript Rendering Engine
  fastify.register(require('point-of-view'), {
    engine: {
      pug: require('pug')
    }
  })

  // fastify.register(require('fastify-static'), {
  //   root: path.join(__dirname, 'public')
  // })

  fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'app_public', 'build')
  })



  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
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

  // Make sure to call next when done
  next()
}
