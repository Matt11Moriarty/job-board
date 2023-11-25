import { gql } from "@apollo/client";
export const GET_JOBS = gql`
query getAllJobs{
  getAllJobs {
      _id
      jobTitle
      salary
      jobDescription
    }
  }
`;