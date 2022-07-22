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

<<<<<<< HEAD
            return { response: { message: 'local user is not logged in', ok: false }};
        },


        getEvent: async (_, { id }) => {
            const event = await Event.findOne({ _id: id });
            if (event) {
                const response = {...event._doc, response: { message: 'found event', ok: true }};
                console.log('FOUND EVENT: ', response);
                return response;
            }
            return { response: { message: 'event not found', ok: false }};
        },

        get10Events: async () => {
            const events10 = await Event.find({}).limit(10);
            return events10;
        }
=======
      return {
        response: { message: "local user is not logged in", ok: false },
      };
>>>>>>> 14509b623769678ff193024575e0a3e47b5015e0
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

    get10Events: async () => {
      const events10 = await Event.find({}).limit(10);
      return events10;
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
    },
    signup: async (_, { inputPayload }) => {
      console.log("server recieved signup");
      const existingUser = await User.findOne({
        username: inputPayload.username,
      });

      if (existingUser) {
        console.log("user already exists");
        return {
          response: {
            message: "an account with this username already exists",
            ok: false,
          },
        };
      }

      const newUser = await User.create(inputPayload);
      console.log("server created new user: ", newUser);
      const token = signToken(newUser);
      return {
        token,
        user: newUser,
        response: { message: "account creation successful", ok: true },
      };
    },

<<<<<<< HEAD
        createEvent: async (_, { author, inputPayload }) => {
            console.log('created new event: ', author, inputPayload);
            const newEvent = await Event.create({ ...inputPayload, author });
            console.log('actual event data: ', newEvent);
            return { message: 'created new event!', ok: true };
        }
    }
}
=======
    createEvent: async (_, { author, inputPayload }) => {
      console.log("created new event: ", author, inputPayload);
      const newEvent = await Event.create({ ...inputPayload, author });
      return { message: "created new event!", ok: true };
    },
  },
};
>>>>>>> 14509b623769678ff193024575e0a3e47b5015e0

module.exports = resolvers;
