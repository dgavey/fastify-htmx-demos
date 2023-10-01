'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/mixed', async function (request, reply) {
    return reply.view("mixed.hbs");
  })

  /*fastify.post('/mixed', async function (request, reply) {
    var time = new Date().toLocaleTimeString();
    return reply.view("poller-partial.hbs", {time: time});
  })*/
}