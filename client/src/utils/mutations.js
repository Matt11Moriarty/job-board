
import { gql } from "@apollo/client";

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
mutation createJob($job: JobInput!) {
  createJob(job: $job) {
    _id
    jobTitle
    salary
    jobDescription
  }
}
`;

export const CREATE_CANDIDATE = gql`
mutation createCandidate($firstName: String!, $lastName: String!, $email: String!, $phoneNumber: String!, $job: JobInput!) {
  createCandidate(firstName: $firstName, lastName: $lastName, email: $email, phoneNumber: $phoneNumber, job: $job) {
    _id
    firstName
    lastName
    email
    phoneNumber
    job {
      _id
      jobTitle
      salary
      jobDescription
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
    salary
    jobDescription
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

export const LOGIN_USER = gql`
  mutation Login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

