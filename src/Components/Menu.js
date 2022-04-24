import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
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
      id: note.id,
    };

    props.setGroups([...tempGroups]);
  }

  const [coverStyle, setCoverStyle] = useState(true);
  const appear = useSpring({
    from: { opacity: 0 },
    to: { opacity: coverStyle ? 1 : 0 },
    config: { duration: coverStyle ? 150 : 100 },
  });

  function closeMenu() {
    setCoverStyle(false);
    setTimeout(() => props.closeEditMenu(), 100);
  }

  const moveUp = useSpring({
    from: { marginTop: "50px", opacity: 0 },
    to: { marginTop: "0px", opacity: 1 },
    config: { duration: 300 },
  });

  return (
    // https://stackoverflow.com/questions/37568550/react-prevent-event-trigger-on-parent-from-child
    // https://www.golangprograms.com/onmousedown-and-onmouseup-event-handling-in-reactjs.html
    <animated.div
      className="cover"
      onMouseDown={(e) => {
        if (e.currentTarget == e.target) {
          closeMenu();
        }
      }}
      style={appear}
    >
      <animated.div className="edit-menu" style={moveUp}>
        <div className="close-button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f8/PICOL_Cancel.svg"
            onClick={() => closeMenu()}
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
            setNote({
              title: e.target.value,
              content: note.content,
              id: note.id,
            })
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
            setNote({ title: note.title, content: e.target.value, id: note.id })
          }
        />
        <div className="edit-menu-buttons">
          <h2
            onClick={() => {
              updateNotesHelper(note.title, note.content);
              closeMenu();
            }}
          >
            Save
          </h2>
          <h2 onClick={() => closeMenu()}>Cancel</h2>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default Menu;
