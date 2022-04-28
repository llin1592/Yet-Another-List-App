import React from "react";
import "../Styles/Note.css";

const Note = (props) => {
  let noteType = "note-container";

  if (props.isAddButton) {
    noteType += "-add";
  }

  let noteOpacity = props.done ? 0.3 : 1;

  return (
    <div
      className={noteType}
      onClick={props.onClick}
      style={{ opacity: noteOpacity }}
    >
      <h3>{props.title}</h3>
      <p style={{ wordWrap: "break-word" }}>
        {props.content
          ? props.content.length > 100
            ? props.content.substr(0, 100) + "..."
            : props.content
          : null}
      </p>
    </div>
  );
};

export default Note;
