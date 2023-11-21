const { gql } = require('@apollo/client');

export const CREATE_USER = gql`
  mutation createUser($userName: String!, $password: String!) {
    createUser(userName: $userName, password: $password) {
        token
        user {
            _id
            userName
        }
    }
  }
`;

export const CREATE_JOB = gql`
  mutation createJob($jobTitle: String!, $salary: Int!, $jobDescription: String!) {
    createJob(jobTitle: $jobTitle, salary: $salary, jobDescription: $jobDescription) {
        _id
        jobTitle
        salary
        jobDescription
    }
  }
`;

export const CREATE_CANDIDATE = gql`
  mutation createCandidate(
    $firstName: String!
    $lastName: String!
    $email: String!
    $phoneNumber: String!
    $jobTitle: String!
    $salary: Int!
    $jobDescription: String!
  ) {
    createCandidate(
      firstName: $firstName
      lastName: $lastName
      email: $email
      phoneNumber: $phoneNumber
      jobTitle: $jobTitle
    ) {
      _id
      firstName
      lastName
      email
      phoneNumber
      job {
        _id
       
      }
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser($userId: ID!) {
    removeUser(userId: $userId) {
      _id
      userName
    }
  }
`;

export const REMOVE_JOB = gql`
  mutation removeJob($jobId: ID!) {
    removeJob(jobId: $jobId) {
      _id
      jobTitle
    }
  }
`;

export const REMOVE_CANDIDATE = gql`
  mutation removeCandidate($candidateId: ID!) {
    removeCandidate(candidateId: $candidateId) {
      _id
      firstName
      lastName
    }
  }
`;