import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const Shelf = (props) => {

    const { title, books, shelf } = props;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book =>
                        <li key={book.id}>
                            <Book
                                book={book}
                                shelf={shelf}
                                updateStatus={props.updateStatus}
                            />
                        </li>
                    )}
                </ol>
            </div>
        </div>);
}

Shelf.propTypes = {
    title: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    updateStatus: PropTypes.func.isRequired,
}

export default Shelf;