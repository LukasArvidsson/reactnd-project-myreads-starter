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

    updateBookStatus = (id, status) => {
        //Create new state object to update with
        const newState = { ...this.state };

        //Update the selected shelf
        for (const book of newState.books) {
            if (book.id === id) {
                book.shelf = status;
            }
        }

        this.setState({
            books: [...newState.books],
        });
    }

    render() {
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
                            books={this.state.books}
                            updateStatus={this.updateBookStatus}
                        />
                        <Shelf
                            title="Want to read"
                            shelf="wantToRead"
                            books={this.state.books}
                            updateStatus={this.updateBookStatus}
                        />
                        <Shelf
                            title="Read"
                            shelf="read"
                            books={this.state.books}
                            updateStatus={this.updateBookStatus}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Bookshelf;