
const { eventPublicSchema } = require('../../src/schemas/eventSchema')
const { eventPublicIdSchema } = require('../../src/schemas/eventSchema')
const AdminEventsPublic = require('../../src/service/adminEventsPublic')

const chai = require('chai')
const assert = chai.assert
chai.use(require('chai-json-schema'))

describe('#Objective', () => {
    const adminEvents = new AdminEventsPublic()
    let response

    describe('#GET ALL', () => {
        describe('Trás alguns detalhes de todos os eventos', () => {

            beforeAll(async() => {
                response = await adminEvents.getAll()
            })

            it('#status code', async() => {
                assert.equal(response.status, 200)
            })

            it('#contract', async() => {
                assert.jsonSchema(response.body, retriveAllEventsSchema)
            })

            it('#headers', async() => {
                assert.equal(response.header['content-type'], 'application/json; charset=utf-8')
            })

            it('#response body', async() => {

                response.body.forEach(element => {
                    assert(element.cover_url)
                    assert(element.created_at)
                    assert(element.event_format)
                    assert(element.init_date)
                    assert(element.tittle)

                });

            })
        })
    })
    describe('#GET BY ID', () => {
        describe('Evento de Id 1', () => {

            beforeAll(async() => {
                response = await adminEvents.getById(1)
            })

            it('#status code', async() => {
                assert.equal(response.status, 200)
            })

            it('#contract', async() => {
                assert.jsonSchema(response.body, retriveEventSchema)
            })

            it('#headers', async() => {
                assert.equal(response.header['content-type'], 'application/json; charset=utf-8')
            })

            it('#response body', async() => {
                    assert.equal(element.event_format === "online")
                    assert.equal(element.init_time === "2021-09-24T13:00:00Z")
                    assert.equal(element.platform === "youtube")
                    assert.equal(element.platform_id === "123")
                    assert.equal(element.subscribed === false)
                    assert.equal(element.subscription_url === null)
                    assert.equal(element.title === "Teste 1")


            })
        })
    })
})