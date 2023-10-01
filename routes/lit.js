'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/lit', async function (request, reply) {
    return reply.view("lit.hbs", { });
  })

  fastify.post('/lit', async function (request, reply) {
    return reply.view("lit-partial.hbs");
  })
}