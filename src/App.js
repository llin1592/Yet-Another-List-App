import React, { useState } from "react";
import Header from "./Components/Header.js";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <Header
        searchText={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}

export default App;
