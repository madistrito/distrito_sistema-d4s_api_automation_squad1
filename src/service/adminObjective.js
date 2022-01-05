const env = require('../settings/config')
const request = require('supertest')(env.url)
const token = env.bearerToken
class AdminObjective {

    async getAll() {
        const res = await request.get('academy/v1/objectives')
            .auth(token, { type: "bearer" })
        return res
    }

    async getById(id) {
        const res = await request.get(`/person/${id}`)
    }

    async post(body) {
        const res = await request.post('/person')
            .auth(token, { type: "bearer" })
            .send(body)
        return res
    }

}

module.exports = AdminObjective