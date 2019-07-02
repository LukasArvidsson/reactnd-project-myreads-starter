import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';


class Search extends React.Component {

    state = {
        searchResults: []
    }

    performSearch = (query) => {
        BooksAPI.search(query)
            .then((response) => {
                this.setState(() => ({
                    searchResults: response,
                }));
            })
    }

    render() {
        return (
            <div className="search-books">
                <SearchBar search={this.performSearch} />
                <SearchResults
                    books={this.state.searchResults}
                    updateStatus={this.props.updateStatus}
                />
            </div>);
    }
}

Search.propTypes = {
    updateStatus: PropTypes.func.isRequired,
}

export default Search;