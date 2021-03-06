import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  search() {
    this.props.onSearch(this.state.query);
  }
  handleTermChange(e) {
    this.setState({ query: e.target.value });
  }
  render() {
    return (
      <div className="SearchBar">
        <input
          value={this.state.query}
          onChange={this.handleTermChange}
          placeholder="Enter A Song, Album, or Artist"
        />
        <button onClick={this.search} className="SearchButton">
          SEARCH
        </button>
      </div>
    );
  }
}

export default SearchBar;
