import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const GET_CANDIDATE = gql`
query Query($candidateId: ID!) {
  getSingleCandidate(candidateId: $candidateId) {
    firstName
    lastName
    phoneNumber
    email
  }
}

`;

const SingleApplication = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CANDIDATE, {
    variables: { candidateId: id },
  }); const [dateTime, setDateTime] = useState("");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const candidate = data?.getSingleCandidate;

  if (!candidate) return <p>No candidate found with id: {id}</p>;

  const date = new Date(dateTime);

  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDateTime = date.toLocaleString("en-US", options);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const endpoint = "https://job-board-djwu.onrender.com/send-message";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: candidate.phoneNumber,
          messageBody: `{Company Name} wants you to come in for an interview on ${formattedDateTime}`,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        alert("Message sent successfully!");
      } else {
        const errorText = await response.text();
        console.error("Error", errorText);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div>
      <h1>Applicant Details</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={candidate.firstName} disabled />
        </label>
        <label>
          Last Name:
          <input type="text" value={candidate.lastName} disabled />
        </label>
        <label>
          Email:
          <input type="text" value={candidate.email} disabled />
        </label>
        <label>
          Phone Number:
          <input type="text" value={candidate.phoneNumber} disabled />
        </label>
        <label>
          Schedule an Interview:
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            required
          />
        </label>
        <button type="submit">Send Text Message to Schedule Interview</button>
      </form>
    </div>
  );
};

export default SingleApplication;
