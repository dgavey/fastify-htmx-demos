'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/target', async function (request, reply) {
    return reply.view("target.hbs");
  })
  fastify.post('/target', async function (request, reply) {
    return reply.view("status-partial.hbs", { time: new Date().toISOString() });
  })
}