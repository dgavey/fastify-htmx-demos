'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const limit = request.query?.limit ? parseInt(request.query?.limit) : 5;
    const offset = request.query?.offset ?  parseInt(request.query?.offset) : 0;
    const response = await fetch(`https://api.dedolist.com/api/v1/science/periodic-table-summary/?limit=${limit}&offset=${offset}&sort=number`)
    var body = await response.json(); 
    console.log('query', request.query)
    if (request.query?.partial === 'true') {
      const newOffest = offset+limit;
      return reply.view("table-partial.hbs", { elements: body, offset: newOffest });
    }
    return reply.view("table.hbs", { elements: body });
  })
}