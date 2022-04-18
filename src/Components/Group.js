import React, { useState } from "react";
import Note from "./Note.js";
import "../Styles/Group.css";

const Group = (props) => {
  const [notes, setNotes] = useState([]);

  return (
    <div className="group-container">
      <p>{props.title}</p>
      {notes.map((note, i) => (
        <Note key={i} />
      ))}
    </div>
  );
};

export default Group;
