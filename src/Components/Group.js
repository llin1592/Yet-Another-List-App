import React, { useState } from "react";
import Note from "./Note.js";

const Group = (props) => {
  const [notes, setNotes] = useState([]);

  return (
    <div className="dashboard-container">
      {notes.map((note, i) => (
        <Note key={i} />
      ))}
    </div>
  );
};

export default Group;
