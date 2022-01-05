const createRating = require('../../src/data/trailBody')
const { objectiveSchema } = require('../../src/schemas/objectiveSchema')
const AdminObjective = require('../../src/service/adminObjective')

const chai = require('chai')
const assert = chai.assert
chai.use(require('chai-json-schema'))

describe('#Objective', () => {
    const adminObjective = new AdminObjective()
    let response

    describe('#GET', () => {
        describe('Listagem Completa', () => {

            beforeAll(async() => {
                response = await adminObjective.getAll()
            })

            it('#status code', async() => {
                assert.equal(response.status, 200)
            })

            it('#contract', async() => {
                assert.jsonSchema(response.body, objectiveSchema)
            })

            it('#headers', async() => {
                assert.equal(response.header['content-type'], 'application/json; charset=utf-8')
            })

            it('#response body', async() => {

                response.body.forEach(element => {
                    assert(element.title !== null)
                });

            })
        })
    })
})