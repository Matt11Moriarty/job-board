import { gql } from '@apollo/client';

const typeDefs = gql`
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
    getAllCandidates: [Candidate]  
    getSingleCandidate(candidateId: ID!): Candidate
  }

  type Mutation {
    createUser(userName: String!, password: String!): Auth
    createJob(jobTitle: String!, salary: Int!, jobDescription: String!): Job
    createCandidate(
        firstName: String!
        lastName: String!
        email: String!
        phoneNumber: String!
        jobTitle: String!
       # salary: Int!
       # jobDescription: String!
      ): Candidate
    removeUser: User
    removeJob: Job
    removeCandidate(candidateId: ID!): Candidate
  }
`;

module.exports = typeDefs;
