'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return reply.view("target.hbs");
  })
  fastify.post('/', async function (request, reply) {
    return reply.view("status-partial.hbs", { time: new Date().toISOString() });
  })
}