import React, { useState } from "react";
import Header from "./Components/Header.js";
import Dashboard from "./Components/Dashboard.js";
import Menu from "./Components/Menu.js";
import "./Styles/App.css";

/* https://stackoverflow.com/questions/66701117/re-render-child-after-parent-state-change-with-get-request */
function App() {
  const [searchText, setSearchText] = useState("");
  const [groups, setGroups] = useState([]);
  const [editNote, setEditNote] = useState({});
  const [config, setConfig] = useState({ xscroll: false, confirmDelete: true });

  return (
    <div className="app-container">
      <Header
        searchText={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        resetSearch={() => setSearchText("")}
        config={config}
      />
      <Dashboard
        groups={groups}
        config={config}
        setGroups={(newGroups) => setGroups(newGroups)}
        searchText={searchText.toLowerCase()}
        openEditMenu={(noteLocation) => setEditNote(noteLocation)}
      />

      {Object.keys(editNote).length !== 0 ? (
        <Menu
          groups={groups}
          setGroups={(newGroups) => setGroups(newGroups)}
          groupIndex={editNote.groupIndex}
          noteIndex={editNote.noteIndex}
          closeEditMenu={() => setEditNote({})}
        />
      ) : null}
    </div>
  );
}

export default App;
