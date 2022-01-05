const env = require('../settings/config')
const request = require('supertest')(env.url)
const token = env.bearerToken
class AdminAssessments {

    async getAll() {
        const res = await request.get('my_progress/v1/assessments')
            .auth(token, { type: "bearer" })
        return res
    }

    async getById(id) {
        const res = await request.get(`/person/${id}`)
    }

    async post(body) {
        const res = await request.post('my_progress/v1/assessments')
            .auth(token, { type: "bearer" })
            .send(body)
        return res
    }

}

module.exports = AdminAssessments