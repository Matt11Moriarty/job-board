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

type Candidate {
    _id: ID
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
    job: Job
  }

type Query {
    getAllUsers: [User]!
    getSingleUser(userId: ID!): User
    me: User
    getAllJobs: [Job]
    getSingleJob(jobId: ID!): Job
    getAllCandidates: [Candidate]  # New query for all candidates
    getSingleCandidate(candidateId: ID!): Candidate
}

type Mutation {
    login(userName: String!, password: String!): Auth
    createUser(userName: String!, password: String!): Auth
    createJob(jobTitle: String!, salary: Int!, jobDescription: String!): Job
    createCandidate(
        firstName: String!
        lastName: String!
        email: String!
        phoneNumber: String!
        jobTitle: String!
      ): Candidate
    removeUser(userId: ID!): User
    removeJob(jobId: ID!): Job
    removeCandidate(candidateId: ID!): Candidate
}
`;

module.exports = typeDefs;