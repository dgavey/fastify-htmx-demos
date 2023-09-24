'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return reply.view("forms.hbs", { });
  })

  fastify.post('/', async function (request, reply) {
    // Check form, throw errors, redirect on positive signup
    const errors = {password: null};
    if ( request.body.password.length < 5) {
      errors.password = "password must be more than 5 chars"
    }
    if (errors.password === null) {
      // If no errors redirect
     
      return reply.redirect('/signed-up')
    }
    return reply.view("forms.hbs", { form: request.body, errors: errors });
  })
}