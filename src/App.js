import React, { Component } from "react";
import Header from "./Components/Header.js";
import Dashboard from "./Components/Dashboard.js";
import Menu from "./Components/Menu.js";
import "./Styles/App.css";

/* https://stackoverflow.com/questions/66701117/re-render-child-after-parent-state-change-with-get-request */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      groups: [],
      editNoteLocation: {},
    };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(search) {
    this.setState({
      searchText: search,
      group: this.state.group,
      editNoteLocation: this.state.editNoteLocation,
    });
  }

  setGroups(groups) {
    this.setState({
      searchText: this.state.searchText,
      groups: groups,
      editNoteLocation: this.state.editNoteLocation,
    });
  }

  setEditMenu(noteLocation) {
    this.setState({
      searchText: this.state.searchText,
      groups: this.state.groups,
      editNoteLocation: noteLocation,
    });
  }

  render() {
    return (
      <div className="app-container">
        <Header
          searchText={this.state.searchText}
          onChange={(e) => this.onSearch(e.target.value)}
          resetSearch={() => this.onSearch("")}
        />
        <Dashboard
          groups={this.state.groups}
          setGroups={(newGroups) => this.setGroups(newGroups)}
          searchText={this.state.searchText.toLowerCase()}
          openEditMenu={(noteLocation) => this.setEditMenu(noteLocation)}
        />

        {Object.keys(this.state.editNoteLocation).length !== 0 ? (
          <Menu
            groups={this.state.groups}
            setGroups={(newGroups) => this.setGroups(newGroups)}
            groupIndex={this.state.editNoteLocation.groupIndex}
            noteIndex={this.state.editNoteLocation.noteIndex}
            closeEditMenu={() => this.setEditMenu({})}
          />
        ) : null}
      </div>
    );
  }
}

// function App() {
//   const [searchText, setSearchText] = useState("");

//   return (
//     <div className="app-container">
//       <Header
//         searchText={searchText}
//         onChange={(e) => setSearchText(e.target.value)}
//       />
//       <p>{searchText}</p>
//       <Dashboard search={searchText} />
//     </div>
//   );
// }

export default App;
