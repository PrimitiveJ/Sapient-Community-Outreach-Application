const { AuthenticationError } = require("apollo-server-express");
const { User, Event } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id }).select(
                "-__v -password"
              );
                .populate ("savedEvents")
              return userData;
            }
      
            throw new AuthenticationError("You need to be logged in to do that!");
          },
          users: async () => {
            return User.find()
              .select('-__v -password')
              .populate('savedEvents')
          },
          user: async (parent, { username }) => {
            return User.findOne({ username })
              .select('-__v -password')
              .populate('savedEvents');
          },
          events: async (parent, { username, location, date }) => {
            const params = username ? { username } : location ? {location.city, location.zip, location.state} : date ? { date };
            return Event.find(params).sort({ createdAt: -1 });
          },
          event: async (parent, { _id }) => {
            return Event.findOne({ _id });
          }
        },
    
    Mutation: {
        register: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
          },
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError("Incorrect credentials");
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError("Incorrect credentials");
            }
      
            const token = signToken(user);
            return { token, user };
          },

          createEvent: async ( parent, args) => {
            const event = await Event.create(args);

            return { event };
          }

          saveEvent: async (parent, { newEvent }, context) => {
            if (context.user) {
              const updatedUser = await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { savedEvents: newEvent } },
                { new: true }
              );
              return updatedUser;
            }
            throw new AuthenticationError("You need to be logged in!");
          },

          removeEvent: async (parent, {eventId }, context) => {
            if (context.user) {
              const updatedUser = await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $pull: { savedEvents: { eventId } } },
                { new: true }
              );
              return updatedUser;
            }
            throw new AuthenticationError("You need to be logged in!");
          },
    }
}


module.exports = resolvers;