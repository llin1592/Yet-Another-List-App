import React from "react";
import "../Styles/Note.css";

const Note = (props) => {
  return (
    <div className="note-container">
      <p>{props.title}</p>
      <p>{props.content}</p>
    </div>
  );
};

export default Note;
