'use strict'

const helloWorld = (req, res) => {
  res.send({hello: 'hello Users!!'})
}
module.exports = {
  helloWorld
}
