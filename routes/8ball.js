'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/8ball', async function (request, reply) {
    return reply.view("8ball.hbs", { });
  })

  fastify.post('/8ball', async function (request, reply) {
    // https://eightballapi.com/api
    const response = await fetch(`https://eightballapi.com/api`);
    var body = await response.json();
    return reply.view("8ball-partial.hbs", {answer: body.reading});
  })
}