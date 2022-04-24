import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Note from "./Note.js";
import { v4 as uuidv4 } from "uuid";
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
      {editName === "" || groupType === "group-container-add" ? (
        <h2
          onClick={() => setEditName(props.title)}
          style={{ wordWrap: "break-word" }}
        >
          {" "}
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
