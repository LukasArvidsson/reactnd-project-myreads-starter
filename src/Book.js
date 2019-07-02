import React from 'react';
import BookControl from './BookControl';
import PropTypes from 'prop-types';

const Book = (props) => {
    const { book, status } = props;

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                    }}>
                </div>
                <BookControl
                    status={status}
                    title={book.title}
                    id={book.id}
                    updateStatus={props.updateStatus} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors && book.authors.join(" ")}</div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    shelf: PropTypes.string.isRequired,
    updateStatus: PropTypes.func.isRequired,
}

export default Book;