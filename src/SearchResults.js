import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';


const SearchResults = (props) => {
    let books = props.books;
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {Array.isArray(books) && books.map(book =>
                    <li key={book.id}>
                        <Book
                            book={book}
                            status={book.shelf}
                            updateStatus={props.updateStatus}
                        />
                    </li>
                )}
            </ol>
        </div>
    );
}

SearchResults.propTypes = {
    updateStatus: PropTypes.func.isRequired,
}

export default SearchResults;