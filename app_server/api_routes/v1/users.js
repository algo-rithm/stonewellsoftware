module.exports = function (fastify, opts, next) {

  // async function registerUser (request,response) {
  //   request.log.info('Creating new user')
  //   fastify.level.put(request.body.user, request.body.password. onPut)
  //
  //   function onPut (err) {
  //     if (err) return response.send(err)
  //     fastify.jwt.sign(request.body, onToken)
  //   }
  //
  //   function onToken (err, token) {
  //     if (err) return response.send(err)
  //     request.log.info('User created')
  //     response.send({ token })
  //   }
  // }
  //
  // fastify.route({
  //   method: 'POST',
  //   url: '/registerUser',
  //   schema: {
  //     body: {
  //       type: 'object',
  //       properties: {
  //         user: { type: 'string' },
  //         password: { type: 'string' }
  //       },
  //       required: ['user', 'password']
  //     }
  //   },
  //   handler: registerUser
  // })



  next()
}
