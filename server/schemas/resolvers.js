const { User, Job, Candidate} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
    Query: {
        getAllUsers: async () => {
          return User.find();
        },
        getSingleUser: async (parent, { userId }) => {
          return User.findOne({ _id: userId });
        },
        me: async (parent, args, context) => {
          // Assuming you have authentication logic in context
          if (context.user) {
            return User.findOne({ _id: context.user._id });
          } else {
            throw new AuthenticationError('Not logged in');
          }
        },
        getAllJobs: async () => {
          return Job.find();
        },
        getSingleJob: async (parent, { jobId }) => {
          return Job.findOne({ _id: jobId });
        },
      },
    
      Mutation: {
        createUser: async (parent, { userName, password }) => {
          const user = await User.create({ userName, password });
          const token = signToken(user);
          return { token, user };
        },
        createJob: async (parent, { jobTitle, salary, jobDescription }) => {
          const job = await Job.create({ jobTitle, salary, jobDescription });
          return job;
        },
        removeUser: async (parent, args, context) => {
          if (context.user) {
            const removedUser = await User.findOneAndDelete({ _id: context.user._id });
            return removedUser;
          } else {
            throw new AuthenticationError('Not logged in');
          }
        },
        removeJob: async (parent, { jobId }) => {
          const removedJob = await Job.findOneAndDelete({ _id: jobId });
          return removedJob;
        },
      },
    };
    
    module.exports = resolvers;