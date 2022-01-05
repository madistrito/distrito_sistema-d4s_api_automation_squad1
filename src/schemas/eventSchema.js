const retriveEventSchema = [{
    items:{
        type: "object",
        required: [],
        properties: {
          id: {
            type: "string"
          },
          address: {
            type: "string"
          },
          cover_url: {
            type: "string"
          },
          created_at: {
            type: "string"
          },
          end_date: {
            type: "string"
          },
          end_time: {
            type: "string"
          },
          event_format: {
            type: "string"
          },
          event_type: {
            type: "string"
          },
          init_date: {
            type: "string"
          },
          init_time: {
            type: "string"
          },
          description: {
            type: "string"
          },
          platform: {
            type: "string"
          },
          platform_id: {
            type: "string"
          },
          subscribed: {
            type: "boolean"
          },
          subscription_url: {
            type: "string"
          },
          title: {
            type: "string"
          }
        }
      }
}]

const retriveAllEventsSchema = [{
    itens:{
        cover_url: "string",
        title: "string",
        init_date: "2021-09-24T17:56:13.773Z",
        init_time: "2021-09-24T17:56:13.773Z",
        event_format: "string",
        event_type: "string",
        subscription_url: "string",
        subscribed: true,
        created_at: "2021-09-24T17:56:13.773Z"
      }

}] 

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

const eventPublicSchema = [{
  
    type: "object",
    required: [],
    properties: {
      events: {
        type: "array",
        items: {
          type: "object",
          required: [],
          properties: {
            id: {
              type: "string"
            },
            cover_url: {
              type: "string"
            },
            title: {
              type: "string"
            },
            init_date: {
              type: "string"
            },
            event_format: {
              type: "string"
            },
            segment: {
              type: "string"
            },
            subscription_url: {
              type: "string"
            },
            created_at: {
              type: "string"
            }
          }
        }
      },
      meta: {
        type: "object",
        required: [],
        properties: {
          links: {
            type: "object",
            required: [],
            properties: {
              previous_page: {
                type: "string"
              },
              next_page: {
                type: "string"
              }
            }
          }
        }
      }
    }
  
}]

const eventPublicIdSchema = [{
  
    type: "object",
    required: [],
    properties: {
      id: {
        type: "string"
      },
      address: {
        type: "string"
      },
      cover_url: {
        type: "string"
      },
      created_at: {
        type: "string"
      },
      end_date: {
        type: "string"
      },
      event_format: {
        type: "string"
      },
      init_date: {
        type: "string"
      },
      description: {
        type: "string"
      },
      platform: {
        type: "string"
      },
      platform_id: {
        type: "string"
      },
      segment: {
        type: "string"
      },
      title: {
        type: "string"
      }
    }
  
}]

module.exports = { retriveEventSchema, retriveAllEventsSchema, eventSubSchema, eventPublicSchema, eventPublicIdSchema  }