const objectiveSchema = [{
    items: {
        type: "object",
        required: ["id", "title"],
        properties: {
            id: {
                type: "array"
            },
            title: {
                type: "array"
            }
        }
    }
}]

module.exports = { objectiveSchema }