import React, { useState } from "react";
import Note from "./Note.js";
import "../Styles/Group.css";

const Group = (props) => {
  let groupType = "group-container";
  let [editName, setEditName] = useState("");

  if (props.onClick) {
    groupType += "-add";
  }

  return (
    <div className={groupType} onClick={props.onClick}>
      {/* https://commons.wikimedia.org/wiki/File:Write-icon.svg 
          https://commons.wikimedia.org/wiki/File:PICOL_Cancel.svg */}
      {editName === "" ? (
        <h2 onClick={() => setEditName(props.title)}> {props.title}</h2>
      ) : (
        <div className="edit-group-title">
          <input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            maxlength={50}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Write-icon.svg"
            onClick={() => {
              props.setGroupTitle(editName);
              setEditName("");
            }}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f8/PICOL_Cancel.svg"
            onClick={() => setEditName("")}
          />
        </div>
      )}

      <div className="group-notes-container">
        {props.notes.map((note, i) => (
          <Note title={note.title} content={note.content} key={i} />
        ))}
        {props.addNotes ? (
          <Note
            title="Add new note"
            onClick={() =>
              props.addNotes("New note", "Add something!", props.key)
            }
          />
        ) : null}
      </div>
    </div>
  );
};

export default Group;
