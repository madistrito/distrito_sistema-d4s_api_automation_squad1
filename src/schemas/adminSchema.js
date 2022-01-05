const adminSchema = [{
    type: "array",
    items: {
        type: "object",
        required: [],
        properties: {
            id: {
                type: "array"
            },
            title: {
                type: "array"
            },
            cover_url: {
                type: "array"
            },
            duration: {
                type: "array"
            },
            rating: {
                type: "array"
            },
            instructor_names: {
                type: "array",
                items: {
                    type: "array"
                }
            }
        },
        objectives: {
            type: "array",
            items: {
                type: "object",
                required: [],
                properties: {
                    id: {
                        type: "array"
                    },
                    title: {
                        type: "array"
                    }
                }
            }
        },
        stages: {
            type: "array",
            items: {
                type: "object",
                required: [],
                properties: {
                    id: {
                        type: "array"
                    },
                    title: {
                        type: "array"
                    }
                }
            }
        }
    }
}]

module.exports = { adminSchema }