const createAssessment = require('../../src/data/assessmentBody')
const { assessmentsRetrive } = require('../../src/schemas/assessmentsSchema')
const { assessmentsCreate } = require('../../src/schemas/assessmentsSchema')
const AdminAssessments = require('../../src/service/adminAssessments')

const chai = require('chai')
const assert = chai.assert
chai.use(require('chai-json-schema'))

describe('#Assessments', () => {
    const adminAssessments = new AdminAssessments()
    let response

    describe('#GET', () => {
        describe('Listagem Completa', () => {

            beforeAll(async() => {
                response = await adminAssessments.getAll()
            })

            it('#status code', async() => {
                console.log(response["body"])
                assert.equal(response.status, 200)
            })

            it('#contract', async() => {
                assert.jsonSchema(response.body, assessmentsRetrive)
            })

            it('#headers', async() => {
                assert.equal(response.header['content-type'], 'application/json; charset=utf-8')
            })

            it('#Retorna o valor esperado para o registro', async () => {
                assert.equal(JSON.stringify(response['body']),
                    JSON.stringify({ assessment: true }))

            })
        })
    })

    describe('#POST' , () =>{
        beforeAll(async() => {
            response = await adminAssessments.post(assessmentsCreate)
        })

        it ('#Status Code', async() => {
            assert.equal(response.status, 201)
        })

        it('#Response Body', async() => {
            assert.equal(response.body.stage_i)
            assert.equal(response.body.stage_title)
        })
    })
})