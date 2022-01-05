const env = require('../settings/config')
const request = require('supertest')(env.url)
const token = env.bearerToken

class AdminTrailSearch {

    async getAll() {
        const res = await request.get('academy/v1/trails/search')
            .auth(token, { type: "bearer" })
        return res
    }

}

module.exports = AdminTrailSearch