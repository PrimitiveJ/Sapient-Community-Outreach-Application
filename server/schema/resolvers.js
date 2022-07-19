const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const {
    User
} = require('../models');

const resolvers = {
    Query: {
        getUser: async (_, { username }, context) => {
            const user = await User.findOne({ username });
            return user;
        },

        getTest: (_, args, context) => {
            return {
                name: 'get_1',
                message: 'get test worked',
                content: 'got test data'
            }
        }
    },

    Mutation: {
        login: async (_, { username, password }, context) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError("No user found");
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError("Incorrect password");
            }

            const token = signToken(user);
            return { token, user };
        },

        setTest: (_, args) => {
            console.log('set payload: ', args);
            return { name: 'set_1', content: 'awoidjawd' }
        },
    }
}

module.exports = resolvers;