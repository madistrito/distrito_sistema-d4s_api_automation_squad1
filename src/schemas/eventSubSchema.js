const eventSubSchema = [{
    
        type: "object",
        required: [],
        properties: {
          user_id: {
            type: "string"
          },
          token: {
            type: "string"
          },
          name: {
            type: "string"
          },
          email: {
            type: "string"
          }
        }
      }
]

module.exports = { eventSubSchema }