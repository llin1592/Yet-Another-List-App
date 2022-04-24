import React, { useState } from "react";
import "../Styles/Menu.css";

const Menu = (props) => {
  const [note, setNote] = useState(
    props.groups[props.groupIndex].notes[props.noteIndex]
  );

  function updateNotesHelper(newTitle, newContent) {
    let tempGroups = [...props.groups];
    tempGroups[props.groupIndex].notes[props.noteIndex] = {
      title: newTitle,
      content: newContent,
    };

    props.setGroups([...tempGroups]);
  }

  return (
    <div
      className="cover"
      onMouseDown={(e) => {
        if (e.currentTarget == e.target) {
          props.closeEditMenu();
        }
      }}
    >
      <div className="edit-menu">
        <div className="close-button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f8/PICOL_Cancel.svg"
            onClick={() => props.closeEditMenu()}
          />
        </div>

        <h1>Edit Note</h1>

        <label for="title-input-box">
          <h2>Title</h2>
        </label>
        <input
          className="title-input-box"
          value={note.title}
          onChange={(e) =>
            setNote({ title: e.target.value, content: note.content })
          }
        />

        <label for="content-box">
          <h2>Content</h2>
        </label>
        <textarea
          className="content-input-box"
          value={note.content}
          rows={10}
          onChange={(e) =>
            setNote({ title: note.title, content: e.target.value })
          }
        />
        <div className="edit-menu-buttons">
          <h2
            onClick={() => {
              updateNotesHelper(note.title, note.content);
              props.closeEditMenu();
            }}
          >
            Save
          </h2>
          <h2 onClick={() => props.closeEditMenu()}>Cancel</h2>
        </div>
      </div>
    </div>
  );
};

export default Menu;
