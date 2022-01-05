const trailSchema = [{
    type: "array",
    items: {
        type: "object",
        required: ["avatar_url", "comment", "created_at", "rating", "username"],
        properties: {
            avatar_url: {
                type: "string"
            },
            comment: {
                type: "string"
            },
            created_at: {
                type: "string"
            },
            rating: {
                type: "string"
            },
            username: {
                type: "string"
            }
        }
    }
}]

const trailSchemaRating = [{
    type: "object",
    required: ["id", "rating", "comment", "created_at"],
    properties: {
        id: {
            type: "string"
        },
        rating: {
            type: "number"
        },
        comment: {
            type: "string"
        },
        createad_at: {
            type: "string"
        }
    }
}]

const trailSearch = [{
    type: "object",
    required: [],
    properties: {
        id: {
            type: "string"
        },
        title: {
            type: "string"
        },
        cover_url: {
            type: "string"
        },
        duration: {
            type: "string"
        },
        rating: {
            type: "string"
        },
        instructor_names: {
            type: "array",
            items: {
                type: "string"
            }
        },
        objectives: {
            type: "array",
            items: {
                type: "object",
                required: [],
                properties: {
                    id: {
                        type: "string"
                    },
                    title: {
                        type: "string"
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
                        type: "string"
                    },
                    title: {
                        type: "string"
                    }
                }
            }
        },
        started: {
            type: "boolean"
        }
    }
}]


module.exports = { trailSchema, trailSchemaRating, trailSearch }