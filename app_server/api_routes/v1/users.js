const User = mongoose.model('User');
const userController = require('../controllers/users');

module.exports = function (fastify, opts, next) {


  // function registerUser (req, res) {
  //   const { level } = fastify
  //   const { db } = fastify.mongo
  //   req.log.info('Creating new user')
  //
  //   if (!req.body.name || !req.body.email || !req.body.password) {
  //     return res.status(400).send({"message": "All fields required!"})
  //   }
  //
  //   const user = new User();
  //   user.name = req.body.name;
  //   user.email = req.body.email;
  //   user.setPassword(req.body.password);
  //   user.save((err) => {
  //     if (err) {
  //       res.status(400).send(err)
  //     } else {
  //       const token = user.generateJwt();
  //       res.status(200).send({token})
  //     }
  //   })


    // level.put(req.body.user, req.body.password, onPut)
    //
    // function onPut (err) {
    //   req.log.info('Assigning user a token')
    //   if (err) return res.send(err)
    //   fastify.jwt.sign(req.body, onToken)
    // }
    //
    // function onToken (err, token) {
    //   if (err) return res.send(err)
    //   req.log.info('User created')
    //   res.send({ token })
    // }
  }

  fastify.route({
    method: 'POST',
    url: '/register',
    schema: {
      body: {
        type: 'object',
        properties: {
          user: { type: 'string' },
          email: { type: 'string' },
          password: { type: 'string' }
        },
        required: ['user', 'email', 'password']
      }
    },
    handler: userController.registerUser
  })

  function authorized(req, res) {
    res.send({hello: 'auth world'})
  }
  fastify.route({
    method: 'GET',
    url: '/auth',
    preHandler: fastify.auth([fastify.verifyJWTandLevelDB]),
    handler: authorized
  })

  next()
}
