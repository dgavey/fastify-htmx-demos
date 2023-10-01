'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/table', async function (request, reply) {
    const limit = request.query?.limit ? parseInt(request.query?.limit) : 25;
    const offset = request.query?.offset ?  parseInt(request.query?.offset) : 0;
    const response = await fetch(`https://api.dedolist.com/api/v1/science/periodic-table-summary/?limit=${limit}&offset=${offset}&sort=number`)
    var body = await response.json(); 
    const newOffest = offset+limit;
    if (request.query?.partial === 'true') {
     
      return reply.view("table-partial.hbs", { elements: body, offset: newOffest, limit: limit});
    }
    return reply.view("table.hbs",  { elements: body, offset: newOffest, limit: limit});
  })
}