const env = require('../settings/config')
const request = require('supertest')(env.url)
const token = env.bearerToken
class AdminService {

    async getAll() {
        const res = await request.get('academy/v1/trails')
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

module.exports = AdminService