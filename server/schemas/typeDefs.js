const typeDefs = `
type User {
    _id: ID
    userName: String
    password: String
}

type Auth {
    token: ID!
    user: User
  }

type Job {
    _id: ID
    jobTitle: String
    salary: Int
    jobDescription: String

}

type Query {
    getAllUsers: [User]!
    getSingleUser(userId: ID!): User
    me: User
    getAllJobs: [Job]
    getSingleJob(jobId: ID!): Job
}

type Mutation {
    createUser(userName: String!, password: String!): Auth
    createJob(jobTitle: String!, salary: Int!, jobDescription: String!): Job
    removeUser: User
    removeJob: Job
}
`;

module.exports = typeDefs;