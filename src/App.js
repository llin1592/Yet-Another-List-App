import React, { useState } from "react";
import Header from "./Components/Header.js";
import Dashboard from "./Components/Dashboard.js";
import "./Styles/App.css";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="app-container">
      <Header
        searchText={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Dashboard />
    </div>
  );
}

export default App;
