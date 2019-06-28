import React from 'react';
import Book from './Book';

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
                                <Book book={book} />
                            </li>
                        )}
                    </ol>
                </div>
            </div>);
    }
}
export default Shelf;