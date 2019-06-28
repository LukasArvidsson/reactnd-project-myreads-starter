import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class Shelf extends React.Component {

    render() {
        const { title, shelf, books } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(book =>
                            book.shelf === shelf &&
                            <li key={book.id}>
                                <Book
                                    book={book}
                                    updateStatus={this.props.updateStatus}
                                />
                            </li>
                        )}
                    </ol>
                </div>
            </div>);
    }
}

Shelf.propTypes = {
    title: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    updateStatus: PropTypes.func.isRequired,
}

export default Shelf;