import React from 'react';
import * as BooksAPI from './BooksAPI';
import Shelf from './Shelf';


class Bookshelf extends React.Component {

    state = {
        books: [],
    }

    componentDidMount() {
        this.fetchBooks();
    }


    fetchBooks = () => {
        return BooksAPI.getAll()
            .then((data) => {
                this.setState(() => ({
                    books: data
                }));
            })
    }

    render() {
        console.log(this.state);
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf title="Currently reading" shelf="currentlyReading" books={this.state.books} />
                        <Shelf title="Want to read" shelf="wantToRead" books={this.state.books} />
                        <Shelf title="Read" shelf="read" books={this.state.books} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Bookshelf;