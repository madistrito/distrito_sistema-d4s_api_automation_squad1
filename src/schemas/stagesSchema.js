
//Post /my_progress/v1/stages/{stage_id}/objectives/{objective_id}/objectives_users
const createObjectSchema = [{
    type: "object",
    required: ["stage_id", "objective_id"],
    items: {
        type: "object",
        required: ["name","email"],
        properties: {
          id: {
            type: "string"
          },
          name: {
            type: "string"
          },
          email: {
            type: "string"
          },
          arr: {
            type: "array",
            items: {
              type: "object",
              required: [],
              properties: {
                site: {
                  type: "string"
                },
                url: {
                  type: "string"
                }
              }
            }
          }
        }
      }
}]

//Get /my_progress/v1/stages
const retriveStageSchema = [{
    type: "object",
    items:{
        type: "object",
        required: [],
        properties: {
          show_csat_assessment: {
            type: "boolean"
          },
          stage: {
            type: "object",
            required: [],
            properties: {
              id: {
                type: "string"
              },
              stage_title: {
                type: "string"
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
                    },
                    total_tasks: {
                      type: "string"
                    },
                    concluded_tasks: {
                      type: "string"
                    },
                    concluded: {
                      type: "boolean"
                    },
                    started: {
                      type: "boolean"
                    },
                    tasks: {
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
                          },
                          link: {
                            type: "string"
                          },
                          concluded: {
                            type: "boolean"
                          }
                        }
                      }
                    }
                  }
                }
              },
              total_objectives: {
                type: "string"
              },
              concluded_objectives: {
                type: "string"
              },
              concluded: {
                type: "boolean"
              }
            }
          }
        }
      }
}]

//Post /my_progress/v1/stages/{stage_id}/objectives/{objective_id}/tasks/{task_id}/tasks_users
const createOrUpdateTaskUserSchema = [{
    type: "object",
    required: ["stage_id", "objective_id", "task_id"],
    items:{
        type: "object",
        required: [],
        properties: {
          id: {
            type: "string"
          },
          user_id: {
            type: "string"
          },
          task_id: {
            type: "string"
          },
          concluded: {
            type: "boolean"
          }
        }
      }
}]