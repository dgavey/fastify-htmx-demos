'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/poller', async function (request, reply) {
    return reply.view("poller.hbs");
  })

  fastify.post('/poller', async function (request, reply) {
    var time = new Date().toLocaleTimeString();
    return reply.view("poller-partial.hbs", {time: time});
  })
}