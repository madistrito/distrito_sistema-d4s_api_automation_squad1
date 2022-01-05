const env = require('../settings/config')
const request = require('supertest')(env.url)
const token = env.bearerToken
const trail_id = 38
const id = 0

class AdminTrailService {

    async getAll() {
        const res = await request.get(`academy/v1/trails/${trail_id}/ratings`)
            .auth(token, { type: "bearer" })
        return res
    }

    async getById(id) {
        const res = await request.get(`/person/${id}`)
    }

    async post() {
        const res = await request.post(`/academy/v1/trails/${trail_id}/ratings`)
            .auth(token, { type: "bearer" })
            .send(
                {
                    "rating": -47989398,
                    "comment": "magna ipsum culpa"
                }
            )
        return res
    }

}

module.exports = AdminTrailService