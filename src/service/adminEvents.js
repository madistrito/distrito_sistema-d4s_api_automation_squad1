const env = require('../settings/config')
const request = require('supertest')(env.url)
const token = env.bearerToken
id = 1
class AdminEvents {

    async getAll() {
        const res = await request.get('/events/v1/events')
            .auth(token, { type: "bearer" })
        return res
    }

    async getById(id) {
        const res = await request.get(`/events/v1/events/${id}`)
            .auth(token, { type: "bearer" })
        return res
    }

    async post(body) {
        const res = await request.post(`/events/v1/events/${id}/subscription`)
            .auth(token, { type: "bearer" })
            .send(body)
        return res
    }

}

module.exports = AdminEvents