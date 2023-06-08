import { Component } from 'react';

export class SearchBar extends Component {
  state = {
    query: '',
  };
  onInputChange = event => {
    this.setState({ query: event.target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();
    if (!this.state.query.trim()) {
      return alert('Please enter');
    }
    this.props.onSubmit(this.state.query);
  };
  render() {
    return (
      <header>
        <form onSubmit={this.onFormSubmit}>
          <input
            onChange={this.onInputChange}
            value={this.state.query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </header>
    );
  }
}
SearchBar.propTypes = {};
