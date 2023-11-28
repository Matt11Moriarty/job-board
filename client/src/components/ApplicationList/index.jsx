import React from "react";
import candidates from "../../../../server/seeders/candidateSeeds.json";
import "./ApplicationList.css";
import { useNavigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const GET_CANDIDATES = gql`
query GetAllCandidates {
    getAllCandidates {
      _id
      email
      firstName
      lastName
      phoneNumber
      job {
        jobTitle
      }
    }
  }
`;
  

const AllApplications = ({ filter, search }) => {
    const navigate = useNavigate();
    const { loading, error, data } = useQuery(GET_CANDIDATES); 
  
    if (loading) return <p>Loading...</p>; 
    if (error) return <p>Error :(</p>; 
  
    const candidates = data.getAllCandidates; 
  
    const candidatesByName = [...candidates].sort((a, b) =>
      a.firstName.localeCompare(b.firstName)
    );
    const candidatesByJob = [...candidates].sort((a, b) =>
      a.job.jobTitle.localeCompare(b.job.jobTitle)
    );
  
    let filteredCandidates;
  
    const handleRowClick = (id) => {
      navigate(`/job-applications/${id}`);
    };

    switch (filter) {
        case "name":
          filteredCandidates = candidatesByName;
          break;
        case "job":
          filteredCandidates = candidatesByJob;
          break;
        case "time":
          filteredCandidates = [...candidates].sort((a, b) => a.dateApplied - b.dateApplied).reverse();
          break;
        default:
          filteredCandidates = candidates;
          break;
      }
      
      filteredCandidates = filteredCandidates.filter((candidate) =>
        `${candidate.firstName} ${candidate.lastName}`.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <table className="applications-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Job Title</th>
        </tr>
      </thead>
      <tbody>
        {filteredCandidates.map((candidate, index) => (
          <tr key={index} onClick={() => handleRowClick(candidate._id)}>
            <td>
              {candidate.firstName} {candidate.lastName}
            </td>
            <td>{candidate.phoneNumber}</td>
            <td>{candidate.email}</td>
            <td>{candidate.job.jobTitle}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllApplications;
