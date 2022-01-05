const createRating = require('../../src/data/trailBody')
const { trailSchema } = require('../../src/schemas/trailSchema')
const { trailSchemaRating } = require('../../src/schemas/trailSchema')
const AdminTrailService = require('../../src/service/adminTrailRating')

const chai = require('chai')
const assert = chai.assert
chai.use(require('chai-json-schema'))

describe('#Trail Rating', () => {
    const adminTrailService = new AdminTrailService()
    let response

    describe('#GET', () => {
        describe('Listagem Completa', () => {

            beforeAll(async() => {
                response = await adminTrailService.getAll()
            })

            it('#status code', async() => {
                console.log(response.status)
                assert.equal(response.status, 200)
                
            })

            it('#contract', async() => {
                assert.jsonSchema(response.body, trailSchema)
            })

            it('#headers', async() => {
                assert.equal(response.header['content-type'], 'application/json; charset=utf-8')
            })

            it('#response body', async() => {

                response.body.forEach(element => {
                    assert(element.avatar_url)
                    assert(element.comment !== null)
                    assert(element.created_at)
                    assert(element.full_name)
                    assert(element.rating)
                });

            })
        })
    })

    describe('#POST', () => {
        describe('Adicionando rating a Trilha', () => {
            beforeAll(async() => {
                response = await adminTrailService.post()
            })

            it('#Status Code', async() => {
                assert.equal(response.status, 201)
            })

            it('#Response Body', async() => {
                assert.typeOf(response.body.id, '0')
                assert.equal(response.body.rating > 0)
                assert.assert(response.body.comment)
                assert.assert(response.body.created_at)
            })
        })
    })
})