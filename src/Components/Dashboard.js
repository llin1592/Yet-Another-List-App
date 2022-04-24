import React, { useState, useEffect } from "react";
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
        notes: [{ title: "Click me", content: "Word" }],
      },
      { title: "Second Group", notes: [] },
    ]);
  }, []);

  function addNotesHelper(newTitle, newContent, groupIndex) {
    let tempGroups = [...groups];
    tempGroups[groupIndex].notes = [
      ...tempGroups[groupIndex].notes,
      { title: newTitle, content: newContent },
    ];
    setGroups([...tempGroups]);
  }

  function setGroupTitleHelper(newTitle, groupIndex) {
    let tempGroups = [...groups];
    tempGroups[groupIndex].title = newTitle;
    setGroups([...tempGroups]);
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
                key={i}
                setGroupTitle={(title) => setGroupTitleHelper(title, i)}
                openEditMenu={(noteIndex) =>
                  props.openEditMenu({ groupIndex: i, noteIndex: noteIndex })
                }
              />,
              <div className="vertical-line"></div>,
            ])
        : groups.map((group, i) => [
            <Group
              title={group.title}
              notes={group.notes}
              key={i}
              addNotes={(title, content) => addNotesHelper(title, content, i)}
              setGroupTitle={(title) => setGroupTitleHelper(title, i)}
              openEditMenu={(noteIndex) =>
                props.openEditMenu({ groupIndex: i, noteIndex: noteIndex })
              }
            />,
            <div className="vertical-line"></div>,
          ])}

      {!props.searchText ? (
        <Group
          title="Add a new group"
          notes={[]}
          onClick={() =>
            setGroups([...groups, { title: "New Group", notes: [] }])
          }
        />
      ) : null}
    </div>
  );
};

export default Dashboard;
