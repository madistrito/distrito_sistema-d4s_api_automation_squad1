
const { retriveEventSchema } = require('../../src/schemas/eventSchema')
const { retriveAllEventsSchema } = require('../../src/schemas/eventSchema')
const AdminEvents = require('../../src/service/adminEvents')

const chai = require('chai')
const assert = chai.assert
chai.use(require('chai-json-schema'))

describe('#Objective', () => {
    const adminEvents = new AdminEvents()
    let response

    describe('#GET ALL', () => {
        describe('Listagem Completa', () => {

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
                    assert(element.event_type)
                    assert(element.init_date)
                    assert(element.init_time)
                    assert(element.subscribed)
                    assert(element.subscription_url)
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
                    assert.equal(element.cover_url === "https://staging-s1-network-v2.distrito.network/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBTQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ee40dce27b55c684566acb0b12a9470be7266e82/mockup.png")
                    assert.equal(element.created_at === "2021-09-24T18:01:02Z")
                    assert.equal(element.description === "Nullam probo, unam, ut eodem modo erga amicum adfecti simus, quo erga nosmet ipsos, alteram, ut nostra in amicos benevolentia illorum erga nos benevolentiae pariter aequaliterque respondeat, tertiam, ut, quanti quisque se ipse facit, tanti fiat ab amicis. eodem tempore etiam hymetii praeclarae indolis viri negotium est actitatum, cuius hunc novimus esse textum. cum africam pro consule regeret carthaginiensibus victus inopia iam lassatis, ex horreis romano populo destinatis frumentum dedit, pauloque postea cum provenisset segetum copia, integre sine ulla restituit mora. quapropter a natura mihi videtur potius quam ab indigentia orta amicitia, applicatione magis animi cum quodam sensu amandi quam cogitatione quantum illa res utilitatis esset habitura. quod quidem quale sit, etiam in bestiis quibusdam animadverti potest, quae ex se natos ita amant ad quoddam tempus.")
                    assert.equal(element.end_date === "2021-09-30")
                  
                    assert.equal(element.event_format === "online")
                    assert.equal(element.event_type === "free")
                   
                    assert.equal(element.init_time === "2000-01-01T19:00:00Z")
                    assert.equal(element.platform === "youtube")
                    assert.equal(element.platform_id === "123")
                    assert.equal(element.subscribed === false)
                    assert.equal(element.subscription_url === null)
                    assert.equal(element.title === "Teste 1")


            })
        })
    })

    describe('#POST', () => {
        describe('Inscrevendo usuário ao evendo', () => {
            beforeAll(async() => {
                response = await adminEvents.post()
            })

            it('#Status Code', async() => {
                assert.equal(response.status, 201)
            })

            it('#Response Body', async() => {
                assert(response.body.show_csat_event)
            })
        })
    })

})