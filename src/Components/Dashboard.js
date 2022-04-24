import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import Group from "./Group.js";
import "../Styles/Dashboard.css";

const Dashboard = (props) => {
  let groups = props.groups;
  let setGroups = props.setGroups;

  useEffect(() => {
    setGroups([
      ...groups,
      {
        title: "Hello World",
        notes: [
          {
            title: "Click me!",
            content: "Make more notes and try dragging me up and down, too!",
            id: uuidv4(),
          },
        ],
        id: uuidv4(),
      },
      { title: "Click me too!", notes: [], id: uuidv4() },
    ]);
  }, []);

  function addNotesHelper(newTitle, newContent, groupIndex) {
    let tempGroups = [...groups];
    tempGroups[groupIndex].notes = [
      ...tempGroups[groupIndex].notes,
      { title: newTitle, content: newContent, id: uuidv4() },
    ];
    setGroups([...tempGroups]);
  }

  function setGroupTitleHelper(newTitle, groupIndex) {
    let tempGroups = [...groups];
    tempGroups[groupIndex].title = newTitle;
    setGroups([...tempGroups]);
  }

  function moveNoteHelper(source, destination, groupIndex) {
    let tempGroups = [...groups];
    let [tempNote] = tempGroups[groupIndex].notes.splice(source, 1);
    tempGroups[groupIndex].notes.splice(destination, 0, tempNote);
  }

  function deleteGroupHelper(groupIndex) {
    let tempGroups = [...props.groups];
    console.log(tempGroups);
    console.log(groupIndex);
    tempGroups.splice(groupIndex, 1);

    props.setGroups([...tempGroups]);
  }

  return (
    <div className="dashboard-container">
      {/* Close but not this 
        https://stackoverflow.com/questions/31284169/parse-error-adjacent-jsx-elements-must-be-wrapped-in-an-enclosing-tag*/}
      {/* https://stackoverflow.com/questions/23840997/how-can-i-return-multiple-lines-jsx-in-another-return-statement-in-react */}
      {props.searchText
        ? groups
            .filter(
              (group) =>
                group.title.toLowerCase().includes(props.searchText) ||
                group.notes.filter((note) =>
                  note.title.toLowerCase().includes(props.searchText)
                ).length > 0
            )
            .map((group, i) => [
              <Group
                title={group.title}
                notes={group.notes}
                key={group.id}
                groupIndex={i}
                setGroupTitle={(title) => setGroupTitleHelper(title, i)}
                moveNote={(source, destination) =>
                  moveNoteHelper(source, destination, i)
                }
                openEditMenu={(noteIndex) =>
                  props.openEditMenu({
                    groupIndex: i,
                    noteIndex: noteIndex,
                  })
                }
                deleteGroup={() => deleteGroupHelper(i)}
              />,
              <div className="vertical-line"></div>,
            ])
        : groups.map((group, i) => [
            <Group
              title={group.title}
              notes={group.notes}
              key={group.id}
              groupIndex={i}
              addNotes={(title, content) => addNotesHelper(title, content, i)}
              setGroupTitle={(title) => setGroupTitleHelper(title, i)}
              moveNote={(source, destination) =>
                moveNoteHelper(source, destination, i)
              }
              openEditMenu={(noteIndex) =>
                props.openEditMenu({
                  groupIndex: i,
                  noteIndex: noteIndex,
                })
              }
              deleteGroup={() => deleteGroupHelper(i)}
            />,
            <div className="vertical-line"></div>,
          ])}

      {!props.searchText ? (
        <Group
          title="Add a new group"
          notes={[]}
          onClick={() =>
            setGroups([
              ...groups,
              { title: "New Group", notes: [], id: uuidv4() },
            ])
          }
        />
      ) : null}
    </div>
  );
};

export default Dashboard;
