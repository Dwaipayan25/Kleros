import React from "react";
import "./ClosedDisputes.css";

const ClosedDisputes = () => {
  const disputes = [
    {
      id: 1,
      type: "Bug Bounty",
      createdBy: "John Doe",
      time: "2 days ago",
      organization: "Open Source Organization",
      status: "Resolved",
    },
    {
      id: 2,
      type: "Code Contribution",
      createdBy: "Jane Doe",
      time: "1 week ago",
      organization: "Another Open Source Organization",
      status: "Resolved",
    },
    {
      id: 3,
      type: "Security Vulnerability",
      createdBy: "Bob Smith",
      time: "3 weeks ago",
      organization: "Third Open Source Organization",
      status: "Resolved",
    },
    {
      id: 4,
      type: "Documentation",
      createdBy: "Samantha Lee",
      time: "1 month ago",
      organization: "Yet Another Open Source Organization",
      status: "Resolved",
    },
    {
      id: 5,
      type: "Feature Request",
      createdBy: "Mike Chen",
      time: "2 months ago",
      organization: "The Best Open Source Organization",
      status: "Resolved",
    },
    {
      id: 6,
      type: "Bug Bounty",
      createdBy: "David Kim",
      time: "3 months ago",
      organization: "Open Source Project A",
      status: "Resolved",
    },
    {
      id: 7,
      type: "Code Contribution",
      createdBy: "Sarah Jones",
      time: "4 months ago",
      organization: "Another Open Source Organization",
      status: "Resolved",
    }
  ];

  return (
    <div className="closed-disputes-container">
      <h2 className="closed-disputes-heading">Closed Disputes</h2>
      <table className="closed-disputes-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Created By</th>
            <th>Time</th>
            <th>Organization</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {disputes.map((dispute) => (
            <tr key={dispute.id}>
              <td>{dispute.id}</td>
              <td>{dispute.type}</td>
              <td>{dispute.createdBy}</td>
              <td>{dispute.time}</td>
              <td>{dispute.organization}</td>
              <td>{dispute.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClosedDisputes;
