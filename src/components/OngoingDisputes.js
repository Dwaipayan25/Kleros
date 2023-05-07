const OngoingDisputes = () => {
    const disputes = [
      {
        id: 1,
        type: "Bug Bounty",
        createdBy: "John Doe",
        time: "2 hours ago",
        organization: "Open Source Organization",
      },
      {
        id: 2,
        type: "Code Contribution",
        createdBy: "Jane Doe",
        time: "5 hours ago",
        organization: "Another Open Source Organization",
      },
      {
        id: 3,
        type: "Security Vulnerability",
        createdBy: "Bob Smith",
        time: "1 day ago",
        organization: "Third Open Source Organization",
      },
    ];
  
    return (
      <div>
        <h2>Ongoing Disputes</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Created By</th>
              <th>Time</th>
              <th>Organization</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default OngoingDisputes;