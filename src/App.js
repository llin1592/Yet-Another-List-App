import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarAppearLeft = useSpring({
    marginLeft: isSidebarOpen ? 0 : -300,
  });

  return (
    <div className="app-container">
      <div className="sidebar-container">
        <animated.div className="sidebar" style={sidebarAppearLeft}>
          <div className="sidebar-bottom-content">
            <h3>
              Oh hey! There's not much here, but this links to my <s>scuffed</s>{" "}
              source code!
            </h3>
            <a href="https://github.com/llin1592/yet-another-list-app">
              <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img>
            </a>
          </div>
        </animated.div>
      </div>
      <div className="main-display-container">
        <Header
          searchText={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          resetSearch={() => setSearchText("")}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
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
            isSidebarOpen={isSidebarOpen}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
