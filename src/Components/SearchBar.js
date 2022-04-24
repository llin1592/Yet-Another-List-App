import React from "react";

const SearchBar = (props) => {
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
          alt=""
          style={{ paddingRight: 10 }}
        />
      </label>
      <input
        placeholder="Search..."
        value={props.searchText}
        onChange={props.onChange}
        style={{ width: "80%", fontSize: "18px" }}
      />
    </div>
  );
};

export default SearchBar;
