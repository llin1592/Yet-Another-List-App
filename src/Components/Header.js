import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import SearchBar from "./SearchBar.js";
import "../Styles/Header.css";

const Header = (props) => {
  const [isOptionOpen, setOptionOpen] = useState(false);
  const appearRight = useSpring({
    right: isOptionOpen ? 0 : -310,
  });

  return (
    <div className="header-bar">
      <div className="left-header-bar">
        {/* https://commons.wikimedia.org/wiki/File:Hamburger_icon.svg */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
          alt=""
          draggable={false}
          onClick={() => {
            props.toggleSidebar();
            if (!props.isSidebarOpen) {
              setOptionOpen(false);
            }
          }}
        />
        <h1>Yet Another List App</h1>
      </div>

      <div className="center-header-bar">
        <SearchBar
          className="header-search-bar"
          searchText={props.searchText}
          onChange={props.onChange}
          resetSearch={props.resetSearch}
        />
      </div>

      {/* https://commons.wikimedia.org/wiki/File:Cog_font_awesome.svg */}
      <div className="right-header-bar">
        <img
          className={
            isOptionOpen ? "settings-button" : "settings-button-active"
          }
          src="https://upload.wikimedia.org/wikipedia/commons/9/92/Cog_font_awesome.svg"
          alt=""
          draggable={false}
          onClick={() => {
            setOptionOpen(!isOptionOpen);
          }}
        />
      </div>
      <animated.div className="options-box" style={appearRight}>
        <p>Hello there!</p>
        <p>This is where settings would go.</p>
        <p>Unfortunately, there isn't any right now.</p>
      </animated.div>
    </div>
  );
};

export default Header;
