import React, { useState } from "react";

const ongoingDisputes = [
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

  
  const App =()=>{
    return (
      <div>
        <nav>
          <div className="logo">
            <h1>codePeace</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#">Login</a></li>
            <li><a href="#">Ongoing disputes</a></li>
            <li><a href="#">Create dispute</a></li>
            <li><a href="#">Closed disputes</a></li>
          </ul>
        </nav>
        <section className="hero">
          <div className="hero-left">
            <h2>A decentralized platform for community-driven dispute resolution in the realm of open-source software development.</h2>
          </div>
          <div className="hero-right">
            <form>
              <h3>Create Dispute</h3>
              <div>
                <label htmlFor="name">Dispute Name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description"></textarea>
              </div>
              <button type="submit">Create Dispute</button>
            </form>
          </div>
        </section>
        <section className="table">
          <h2>Ongoing Disputes</h2>
          <table>
            <thead>
              <tr>
                <th>Dispute ID</th>
                <th>Created By</th>
                <th>Organization</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {ongoingDisputes.map((dispute) => (
                <tr key={dispute.id}>
                  <td>{dispute.id}</td>
                  <td>{dispute.createdBy}</td>
                  <td>{dispute.organization}</td>
                  <td>{dispute.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <footer>
          <p>&copy; 2023 codePeace</p>
        </footer>
      </div>
    );
  }
  
  export default App;
