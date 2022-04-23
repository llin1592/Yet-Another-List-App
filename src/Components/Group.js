import React, { useState } from "react";
import Note from "./Note.js";
import "../Styles/Group.css";

const Group = (props) => {
  let groupType = "group-container";

  if (props.onClick) {
    groupType += "-add";
  }

  return (
    <div className={groupType} onClick={props.onClick}>
      <h2>{props.title}</h2>
      {props.notes.map((note, i) => (
        <Note title={note.title} content={note.content} key={i} />
      ))}
      {!props.onClick ? (
        <Note
          title="Add new note"
          onClick={() =>
            props.addNotes("New note", "Add something!", props.key)
          }
        />
      ) : null}
    </div>
  );
};

export default Group;
