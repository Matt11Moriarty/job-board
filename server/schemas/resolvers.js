const { User, Job, Candidate } = require('../models');
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
        getAllCandidates: async () => Candidate.find(), 
        getSingleCandidate: async (parent, { candidateId }) => Candidate.findOne({ _id: candidateId }),
    },

    Mutation: {
      login: async (parent, { userName, password }) => {
        const user = await User.findOne({ userName });
        if (!user) {
            throw AuthenticationError;
        }

        const correctPw = await user.isCorrectPassword(password)
        if (!correctPw) {
            throw AuthenticationError;
        }

        const token = signToken(user);
        return { token, user }
        },
        createUser: async (parent, { userName, password }) => {
            const user = await User.create({ userName, password });
            const token = signToken(user);
            return { token, user };
        },
        createJob: async (parent, { job }) => {
            const jobTitle = job.jobTitle;
            const salary = job.salary;
            const jobDescription = job.jobDescription;
            const createdJob = await Job.create({ jobTitle, salary, jobDescription });
            return createdJob;
        },
        createCandidate: async (parent, { firstName, lastName, email, phoneNumber, job }) => {
            const candidate = await Candidate.create({ firstName, lastName, email, phoneNumber, job});
            return candidate;
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
        removeCandidate: async (parent, { candidateId }) => {
      const removedCandidate = await Candidate.findOneAndDelete({ _id: candidateId });
      return removedCandidate;
    },
        
    },
};

module.exports = resolvers;