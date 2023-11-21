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
  mutation createJob($jobTitle: String!, $salary: Int!, $jobDescription: String!) {
    createJob(jobTitle: $jobTitle, salary: $salary, jobDescription: $jobDescription) {
        _id
        jobTitle
        salary
        jobDescription
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

export const LOGIN_USER = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
