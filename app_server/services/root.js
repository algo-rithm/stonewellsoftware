'use strict'

// module.exports = function (fastify, opts, next) {
//   fastify.get('/', function (request, reply) {
//     reply.send({ root: true })
//   })
//
//   next()
// }

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/', async function (request, reply) {
//     return { root: true }
//   })
// }
const ctrlUsers = require('../../app-public/src/app/app.component');


module.exports = function (fastify, opts, next) {
  const options = {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            hello: {type: 'string' }
          }
        }
      }
    },
    handler: ctrlUsers.helloWorld
  }

  fastify.get('/', options)

  next()
}
