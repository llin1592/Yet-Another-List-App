import React, { useRef } from "react";

const SearchBar = (props) => {
  // https://stackoverflow.com/questions/65823877/how-to-focus-element-based-on-button-click-in-react-js
  const searchInput = useRef(null);

  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        flex: 1,
      }}
    >
      <label for="header-search-bar">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/36/Search_Icon.png"
          onClick={() => searchInput.current.focus()}
          alt=""
          style={{ paddingRight: 10 }}
        />
      </label>
      <input
        ref={searchInput}
        placeholder="Search..."
        value={props.searchText}
        onChange={props.onChange}
        style={{ width: "80%", fontSize: "18px" }}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/f8/PICOL_Cancel.svg"
        onClick={() => props.resetSearch()}
      />
    </div>
  );
};

export default SearchBar;
