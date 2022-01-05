const assessmentsRetrive = [{
    items:{
            type: "object",
            required: [],
            properties: {
              assessment: {
                type: "boolean"
              }
            } 
    }
}]

const assessmentsCreate = [{
    items:{
        type: "object",
        required: [],
        properties: {
          answers: {
            type: "array",
            items: {
              type: "string"
            }
          }
        }
      }
}]

module.exports = { assessmentsRetrive, assessmentsCreate }