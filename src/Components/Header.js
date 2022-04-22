import React from "react";
import SearchBar from "./SearchBar.js";
import "../Styles/Header.css";

const Header = (props) => {
  return (
    <div className="header-bar">
      <div className="left-header-bar">
        {/* https://commons.wikimedia.org/wiki/File:Hamburger_icon.svg */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
          alt=""
        />
        <h
          style={{
            fontSize: 30,
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
            maxLines: 2,
          }}
        >
          Yet Another List App
        </h>
      </div>

      <div className="center-header-bar">
        <SearchBar
          className="header-search-bar"
          searchText={props.searchText}
          onChange={props.onChange}
        />
      </div>

      {/* https://commons.wikimedia.org/wiki/File:Cog_font_awesome.svg */}
      <div className="right-header-bar">
        <img
          className="settings-button"
          src="https://upload.wikimedia.org/wikipedia/commons/9/92/Cog_font_awesome.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
