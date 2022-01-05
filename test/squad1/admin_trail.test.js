const createRating = require('../../src/data/trailBody')
const { adminSchema } = require('../../src/schemas/adminSchema')
const { trailSearch } = require('../../src/schemas/trailSchema')
const AdminService = require('../../src/service/adminService')
const AdminTrailSearch = require('../../src/service/adminTrailSearch')

const chai = require('chai')
const assert = chai.assert
chai.use(require('chai-json-schema'))

describe('#Trail', () => {
    const adminService = new AdminService()
    let response

    describe('#GET', () => {
        describe('Listagem Completa', () => {

            beforeAll(async() => {
                response = await adminService.getAll()
            })

            it('#status code', async() => {
                assert.equal(response.status, 200)
            })

            it('#contract', async() => {
                assert.jsonSchema(response.body, adminSchema)
            })

            it('#headers', async() => {
                assert.equal(response.header['content-type'], 'application/json; charset=utf-8')
            })

            it('#response body', async() => {

                response.body.forEach(element => {
                    assert(element.id > 0)
                    assert(element.instructor_names)
                    assert(element.objectives)
                    assert(element.stages)
                });

            })
        })
    })
})

describe('#Trail Search', () => {
    const adminService = new AdminTrailSearch()
    let response
    describe('Listagem Completa', () => {

        beforeAll(async() => {
            response = await adminService.getAll()
        })

        it('#status code', async() => {
            assert.equal(response.status, 200)
        })

        it('#contract', async() => {
            assert.jsonSchema(response.body, trailSearch)
        })

        it('#headers', async() => {
            assert.equal(response.header['content-type'], 'application/json; charset=utf-8')
        })

        it('#response body', async() => {

            response.body.forEach(element => {
                assert(element.id > 0)
                assert(element.instructor_names)
                assert(element.objectives)
                assert(element.stages)
            });

        })
    })
})