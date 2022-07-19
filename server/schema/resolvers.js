const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const { User, Event } = require("../models");

const resolvers = {
  Query: {
    getMapAPIKey: () => {
      return process.env.REACT_APP_MAP_API_KEY;
    },

    getUser: async (_, { username }, context) => {
      const userData = await User.findOne({ username });
      return userData;
    },

    getSelf: async (_, args, context) => {
      /*
                If [context.user] exists, then the requesting user is logged in and their data
                is stored inside of [context.user], provided by the auth middleware on the server.
            */
      if (context.user) {
        const userData = await User.findOne({
          username: context.user.username,
        });
        return {
          ...userData,
          response: { message: "local user is logged in", ok: true },
        };
      }

      return {
        response: { message: "local user is not logged in", ok: false },
      };
    },

    getEvent: async (_, { id }) => {
      const event = await Event.findOne({ _id: id });
      if (event) {
        const response = {
          ...event._doc,
          response: { message: "found event", ok: true },
        };
        return response;
      }
      return { response: { message: "event not found", ok: false } };
    },
  },

  Mutation: {
    login: async (_, { username, password }, context) => {
      const user = await User.findOne({ username });

      if (!user) {
        return { response: { message: "user does not exist", ok: false } };
        // throw new AuthenticationError("No user found");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        return { response: { message: "incorrect password", ok: false } };
        // throw new AuthenticationError("Incorrect password");
      }

      const token = signToken(user);
      return {
        token,
        user,
        response: { message: "login successful", ok: true },
      };
    },

    createEvent: async (_, { author, inputPayload }) => {
      console.log("created new event: ", author, inputPayload);
      return { message: "created new event!", ok: true };
    },
  },
};

module.exports = resolvers;
