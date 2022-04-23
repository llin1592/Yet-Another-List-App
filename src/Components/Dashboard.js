import React, { useState, useEffect } from "react";
import Group from "./Group.js";
import "../Styles/Dashboard.css";

function Dashboard() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    setGroups([
      ...groups,
      { title: "First Group", notes: [{ title: "Click me", content: "word" }] },
      { title: "Second Group", notes: [] },
    ]);
  }, []);

  return (
    <div className="dashboard-container">
      {/* Close but not this 
        https://stackoverflow.com/questions/31284169/parse-error-adjacent-jsx-elements-must-be-wrapped-in-an-enclosing-tag*/}
      {/* https://stackoverflow.com/questions/23840997/how-can-i-return-multiple-lines-jsx-in-another-return-statement-in-react */}
      {groups.map((group, i) => [
        <Group title={group.title} notes={group.notes} key={i} />,
        <div className="vertical-line"></div>,
      ])}
      <Group title="Add a new group" notes={[]} />
    </div>
  );
}

export default Dashboard;
