import React, { useState } from "react";
import Note from "./Note.js";
import "../Styles/Group.css";

const Group = (props) => {
  const [notes, setNotes] = useState([]);

  return (
    <div className="group-container">
      <h1>{props.title}</h1>
      {props.notes.map((note, i) => (
        <Note title={note.title} content={note.content} key={i} />
      ))}
    </div>
  );
};

export default Group;
