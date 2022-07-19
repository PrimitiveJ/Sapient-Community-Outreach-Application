
const { gql } = require('apollo-server-express');

const typeDefs = `

    type User {
        username: String
        email: String
    }

    type AuthFilter {
        token: ID!
        user: User
    }

    type TestObject { 
        name: String
        message: String
        content: String
    }

    type Query {
        getUser(username: String!): User
        getTest: TestObject
    }
    
    type Mutation {
        login(username: String!, password: String!): AuthFilter
        setTest(name: String!): TestObject
    }

`

module.exports = typeDefs;
