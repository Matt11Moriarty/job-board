import React from "react";
import candidates from "../../../../server/seeders/candidateSeeds.json";
import "./ApplicationList.css";
import { useNavigate } from "react-router-dom";

const AllApplications = ({ filter, search }) => {
  const navigate = useNavigate();
  const candidatesByName = [...candidates].sort((a, b) =>
    a.firstName.localeCompare(b.firstName)
  );
  const candidatesByJob = [...candidates].sort((a, b) =>
    a.job.jobTitle.localeCompare(b.job.jobTitle)
  );

  let filteredCandidates;

  const handleRowClick = (firstName) => {
    navigate(`/job-applications/${firstName.toLowerCase()}`);
  };

  switch (filter) {
    case "name":
      filteredCandidates = candidatesByName.filter((candidate) => {
        const name = `${candidate.firstName} ${candidate.lastName}`;
        return name.toLowerCase().includes(search.toLowerCase());
      });
      break;
    case "job":
      filteredCandidates = candidatesByJob.filter((candidate) => {
        const jobTitle = candidate.job.jobTitle;
        return jobTitle.toLowerCase().includes(search.toLowerCase());
      });
      break;
    default:
      filteredCandidates = candidates;
      break;
  }

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
          <tr key={index} onClick={() => handleRowClick(candidate.firstName)}>
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
