const {gql} = require('apollo-server-express');

const typeDefs = gql `
  type User {
    _id: ID
    username: String!
    email: String!
    zip: String!
    savedEvents: [Event]
    businessSponsor: {
            address: String!
            busCity: String!
            busState: String!
        }
    organizer: 
    {
            orgCity: String!
            orgState: String!
            createdEvents: [Event]
        }
  }

  type Event {
    _id: ID
    title: String!
    description: String!
    image: String
    date: Date!
    location: Object
    organizer: [User]
    businessSponsor: [User]
    comments: [
        {
            commentText: String
            username: String!
            reactions: [
                {
                    reactionBody: String
                    username: String!
                }
            ]
        }
    ]
    }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    event(_id: ID!): Event
    events(location: Object, username: String, date: Date): [Event]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    registerUser(username: String!, email: String!, password: String!): Auth
    createEvent(title: String!, description: String!, image: String!, date: Date!, location: Object!, organizer: String!, businessSponsor:String, comments: [Object], participants: [Object]): Event
    saveEvent (newEvent: savedEvent): User
    removeEvent (eventId: ID!): User
  }
`;

module.exports = typeDefs;
