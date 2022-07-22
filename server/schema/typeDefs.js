const { gql } = require("apollo-server-express");

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
        _id: ID
        author: String
        title: String
        description: String
        location: Location
        response: Response
        comments: [Comment]
        participants: [User]
        date: String
        image: String
        time: String
    }

    type AuthFilter {
        token: ID
        user: User
        response: Response
    }

    type Query {
        getMapAPIKey: String
        getSelf: User
        getUser(username: String!): User
        getEvent(id: ID!): Event
        get10Events: [Event]
    }

    input EventInput {
        title: String
        description: String
        location: LocationInput
        date: String
        time: String
        image: String
        createdAt: String
    }
    
    type Mutation {
        createEvent(author: String!, inputPayload: EventInput): Event
        login(username: String!, password: String!): AuthFilter
        signup(inputPayload: UserInput): AuthFilter
    }

`;

module.exports = typeDefs;
