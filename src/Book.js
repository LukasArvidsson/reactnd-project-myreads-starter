import React from 'react';
import BookControl from './BookControl';

const Book = (props) => {
    const book = props.book;

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
                    status={book.shelf}
                    id={book.id}
                    updateStatus={props.updateStatus} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors.join(" ")}</div>
        </div>
    )
}
export default Book;