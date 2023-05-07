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
        organization: "Another Open Source", time: "2022-03-15 14:36:00" },
        { id: 4, createdBy: "0x1234567890123456789012345678901234567890", organization: "Yet Another Open Source", time: "2022-03-16 10:42:00" },
        { id: 5, createdBy: "0x1234567890123456789012345678901234567890", organization: "Open Source Project X", time: "2022-03-17 16:12:00" },
    ];
    return (
      <div>
        <h2>Closed Disputes</h2>
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
  }

  export default ClosedDisputes;