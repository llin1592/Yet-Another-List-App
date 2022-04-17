import React from "react";

const SearchBar = (props) => {
  return (
    <input
      placeholder="Search..."
      value={props.searchText}
      onChange={props.onChange}
    />
  );
};

export default SearchBar;
