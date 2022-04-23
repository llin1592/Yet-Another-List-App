import React, { Component } from "react";
import Header from "./Components/Header.js";
import Dashboard from "./Components/Dashboard.js";
import "./Styles/App.css";

/* https://stackoverflow.com/questions/66701117/re-render-child-after-parent-state-change-with-get-request */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(search) {
    this.setState({ searchText: search });
  }

  render() {
    return (
      <div className="app-container">
        <Header
          searchText={this.state.searchText}
          onChange={(e) => this.onSearch(e.target.value)}
        />
        <Dashboard searchText={this.state.searchText} />
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
