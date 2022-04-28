import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Note from "./Note.js";
import "../Styles/Group.css";

const Group = (props) => {
  let [editName, setEditName] = useState(null);

  return (
    <div className="group-container">
      {/* https://commons.wikimedia.org/wiki/File:Write-icon.svg 
          https://commons.wikimedia.org/wiki/File:PICOL_Cancel.svg 
          https://commons.wikimedia.org/wiki/File:Icon_delete_2019_1.svg */}
      <div className="group-move-buttons">
        {/* https://commons.wikimedia.org/wiki/File:ArrowLeft.svg
            https://commons.wikimedia.org/wiki/File:ArrowRight.svg */}
        {props.groupIndex !== 0 ? (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f2/ArrowLeft.svg"
            alt=""
            onClick={() =>
              props.swapGroups(props.groupIndex - 1, props.groupIndex)
            }
            style={{ cursor: "pointer" }}
          />
        ) : (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f2/ArrowLeft.svg"
            alt=""
            style={{ opacity: 0.1 }}
          />
        )}

        {props.groupIndex !== props.lastGroupIndex ? (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/ArrowRight.svg"
            alt=""
            onClick={() =>
              props.swapGroups(props.groupIndex, props.groupIndex + 1)
            }
            style={{ cursor: "pointer" }}
          />
        ) : (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/ArrowRight.svg"
            alt=""
            style={{ opacity: 0.1, pointer: "none" }}
          />
        )}
      </div>
      <div className="edit-group-container">
        {editName === null ? (
          <h2
            onClick={() => setEditName(props.title)}
            style={{ wordWrap: "break-word" }}
          >
            {props.title}
          </h2>
        ) : (
          <div className="edit-group-title">
            <input
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              maxlength={50}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Write-icon.svg"
              alt=""
              onClick={() => {
                if (editName.length) {
                  props.setGroupTitle(editName);
                }
                setEditName(null);
              }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/34/Icon_delete_2019_1.svg"
              alt=""
              onClick={() => {
                props.deleteGroup();
              }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f8/PICOL_Cancel.svg"
              alt=""
              onClick={() => setEditName(null)}
            />
          </div>
        )}
      </div>

      {/* https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/ */}
      <div className="group-notes-container">
        <DragDropContext
          onDragEnd={(result) => {
            if (!result.destination) return;
            props.moveNote(result.source.index, result.destination.index);
          }}
        >
          <Droppable droppableId={"note-list" + props.groupIndex}>
            {(provided) => (
              <ul
                className={"note-list" + props.groupIndex}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {props.notes.map((note, i) => (
                  <Draggable key={note.id} draggableId={note.id} index={i}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Note
                          title={note.title}
                          content={note.content}
                          onClick={() => props.openEditMenu(i)}
                          isAddButton={false}
                        />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        {props.addNotes ? (
          <Note
            title="Add new note"
            onClick={() =>
              props.addNotes("New note", "Add something!", props.groupIndex)
            }
            isAddButton={true}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Group;
