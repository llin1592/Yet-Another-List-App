import React, { useState, useEffect } from "react";
import Group from "./Group.js";
import "../Styles/Dashboard.css";

const Dashboard = (props) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    setGroups([
      ...groups,
      { title: "First Group", notes: [{ title: "Click me", content: "word" }] },
      { title: "Second Group", notes: [] },
    ]);
  }, []);

  function updateNotesHelper(newTitle, newContent, noteIndex, groupIndex) {
    let tempGroups = [...groups];
    let tempNotes = [...tempGroups[groupIndex].notes];
    tempNotes[noteIndex] = { title: newTitle, notes: newContent };

    setGroups([...tempGroups]);
  }

  const addNotesHelper = (newTitle, newContent, groupIndex) => {
    let tempGroups = [...groups];
    tempGroups[groupIndex].notes = [
      ...tempGroups[groupIndex].notes,
      { title: newTitle, content: newContent },
    ];
    setGroups([...tempGroups]);
  };

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
                setNotes={(title, content, index) =>
                  updateNotesHelper(title, content, index, i)
                }
                addNotes={(title, content) => addNotesHelper(title, content, i)}
              />,
              <div className="vertical-line"></div>,
            ])
        : groups.map((group, i) => [
            <Group
              title={group.title}
              notes={group.notes}
              key={i}
              setNotes={(title, content, index) =>
                updateNotesHelper(title, content, index, i)
              }
              addNotes={(title, content) => addNotesHelper(title, content, i)}
            />,
            <div className="vertical-line"></div>,
          ])}
      <Group
        title="Add a new group"
        notes={[]}
        onClick={() =>
          setGroups([...groups, { title: "New Group", notes: [] }])
        }
      />
    </div>
  );
};

export default Dashboard;
