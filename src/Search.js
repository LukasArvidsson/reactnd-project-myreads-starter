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
                this.populateBooks(response);
            })
    }

    populateBooks = (searchResults) => {
        //Updating correct status on search results
        if (!searchResults.error) {
            for (const book of searchResults) {
                for (const item of this.props.allBooks) {
                    if (book.id === item.id) {
                        book.shelf = item.shelf;
                    } else {
                        book.shelf = book.shelf || 'none';
                    }
                }
            }
        }

        this.setState(() => ({
            searchResults: searchResults,
        }));

    }

    resetSearch = () => {
        this.setState(() => ({
            searchResults: []
        }))
    }

    render() {
        return (
            <div className="search-books">
                <SearchBar search={this.performSearch} resetSearch={this.resetSearch} />
                <SearchResults
                    books={this.state.searchResults}
                    updateStatus={this.props.updateStatus}
                />
            </div>);
    }
}

Search.propTypes = {
    updateStatus: PropTypes.func.isRequired,
    allBooks: PropTypes.array.isRequired,
}

export default Search;