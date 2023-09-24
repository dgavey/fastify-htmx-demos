'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return reply.view("search.hbs", { });
  })

  fastify.post('/', async function (request, reply) {
    const query = request.body.query;
    const response = await fetch(`https://api.dedolist.com/api/v1/locations/airports/filter?city=${query}`)
    
    var body = await response.json(); 
    return reply.view("search-partial.hbs", { results: body });
  })
}