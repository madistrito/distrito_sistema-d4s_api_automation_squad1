const env = require('../settings/config')
const request = require('supertest')(env.url)
const token = env.bearerToken
const stage_id = 1
const objective_id = 1
const task_id = 1
const id = 38


class AdminStage {

    async getAll() {
        const res = await request.get(`/my_progress/v1/stages`)
            .auth(token, { type: "bearer" })
        return res
    }

    async getById(id) {
        const res = await request.get(`/person/${id}`)
    }

    async postCreate(body) {
        const res = await request.post(`/my_progress/v1/stages/${stage_id}/objectives/${objective_id}/objectives_users`)
            .auth(token, { type: "bearer" })
            .send(body)
        return res
    }

    async postCreateOU(body) {
        const res = await request.post(`/my_progress/v1/stages/${stage_id}/objectives/${objective_id}/objectives_users`)
            .auth(token, { type: "bearer" })
            .send(body)
        return res
    }

    async postCreateTU(body) {
        const res = await request.post(`
        ​/my_progress​/v1​/stages​/${stage_id}​/objectives​/${objective_id}​/tasks​/${task_id}​/tasks_users`)
            .auth(token, { type: "bearer" })
            .send(body)
        return res
    }


}

module.exports = AdminStage