import React from "react";
import "../Styles/Note.css";

const Note = (props) => {
  let noteType = "note-container";

  if (props.onClick) {
    noteType += "-add";
  }

  return (
    <div className={noteType} onClick={props.onClick}>
      <p>{props.title}</p>
      <p>{props.content}</p>
    </div>
  );
};

export default Note;
