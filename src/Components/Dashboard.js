import React, { useState } from "react";
import Group from "./Group.js";
import "../Styles/Dashboard.css";

function Dashboard() {
  const [groups, setGroups] = useState([]);

  return (
    <div className="dashboard-container">
      {groups.map((group, i) => (
        <Group key={i} />
      ))}
    </div>
  );
}

export default Dashboard;
