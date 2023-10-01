'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/signed-up', async function (request, reply) {
    return reply.view("signed-up-success.hbs");
  })
}