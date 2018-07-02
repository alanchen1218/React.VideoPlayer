import React, { Component } from 'react';

// Functional component
// const SearchBar = () => {
//   return <input />;
// };

// Class based component
//every class must have a render function
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''}
  }
  render() {
    return (
      <div className = "search-bar">
        <input
          value = {this.state.term}
          onChange = {event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

// Value of the input: {this.state.term}

export default SearchBar;
