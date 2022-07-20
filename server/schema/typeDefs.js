
const { gql } = require('apollo-server-express');

const typeDefs = `

    type Response {
        message: String
        ok: Boolean
    }

    type User {
        username: String
        response: Response
    }

    input UserInput {
        username: String!
        email: String
        password: String!
        zipcode: String
    }

    type Location {
        city: String
        state: String
    }

    input LocationInput {
        city: String
        state: String
    }

    type Replies {
        author: String
        content: String
    }

    type Comment {
        author: String
        content: String
        replies: [Replies]
    }

    type Event {
        author: String
        title: String
        description: String
        location: Location
        response: Response
        comments: [Comment]
        participants: [User]
    }

    type AuthFilter {
        token: ID
        user: User
        response: Response
    }

    type Query {
        getSelf: User
        getUser(username: String!): User
        getEvent(id: ID!): Event
    }

    input EventInput {
        title: String
        description: String
        location: LocationInput
    }
    
    type Mutation {
        createEvent(author: String!, inputPayload: EventInput): Response
        login(username: String!, password: String!): AuthFilter
        signup(inputPayload: UserInput): AuthFilter
    }

`

module.exports = typeDefs;
