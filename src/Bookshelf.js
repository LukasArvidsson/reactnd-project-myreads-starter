import React from 'react';
import Shelf from './Shelf';
import PropTypes from 'prop-types';

const Bookshelf = (props) => {

    const unpackBooks = (shelf) => {
        const result = [];

        for (const id of shelf) {
            result.push(...props.allBooks.filter(book => book.id === id));
        }

        return result
    }

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Shelf
                        title="Currently reading"
                        shelf="currentlyReading"
                        books={unpackBooks(props.currentlyReading)}
                        updateStatus={props.updateStatus}
                    />
                    <Shelf
                        title="Want to read"
                        shelf="wantToRead"
                        books={unpackBooks(props.wantToRead)}
                        updateStatus={props.updateStatus}
                    />
                    <Shelf
                        title="Read"
                        shelf="read"
                        books={unpackBooks(props.read)}
                        updateStatus={props.updateStatus}
                    />
                </div>
            </div>
        </div>
    );
}

Bookshelf.propTypes = {
    allBooks: PropTypes.array.isRequired,
    currentlyReading: PropTypes.array.isRequired,
    wantToRead: PropTypes.array.isRequired,
    read: PropTypes.array.isRequired,
    updateStatus: PropTypes.func.isRequired,
}

export default Bookshelf;