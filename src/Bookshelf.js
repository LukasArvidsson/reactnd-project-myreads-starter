import React from 'react';
import * as BooksAPI from './BooksAPI';
import Shelf from './Shelf';
import { resolve } from 'path';


class Bookshelf extends React.Component {

    state = {
        allBooks: [],
        currentlyReading: [],
        wantToRead: [],
        read: [],
    }

    componentDidMount() {
        this.fetchBooks();
    }

    fetchBooks = () => {
        return BooksAPI.getAll()
            .then((data) => {
                this.setState(() => ({
                    allBooks: data,
                }), () => {
                    this.populateShelf();
                });
            })
    }

    populateShelf = () => {
        //Create state object to update with
        const currentlyReading = [];
        const wantToRead = [];
        const read = [];

        //Populate shelfs from allBooks
        for (const book of this.state.allBooks) {
            if (book.shelf === 'currentlyReading') {
                currentlyReading.push(book.id);
            } else if (book.shelf === 'wantToRead') {
                wantToRead.push(book.id);
            } else if (book.shelf === 'read') {
                read.push(book.id);
            }
        }

        this.setState(() => ({
            currentlyReading: currentlyReading,
            wantToRead: wantToRead,
            read: read,
        }), () => console.log(this.state));
    }

    unpackBooks = (shelf) => {
        const result = [];

        for (const id of shelf) {
            result.push(...this.state.allBooks.filter(book => book.id === id));
        }

        return result
    }

    updateBookStatus = (response) => {
        console.log("response");
        console.log(response);

        this.setState(() => ({
            currentlyReading: response.currentlyReading,
            wantToRead: response.wantToRead,
            read: response.read,
        }), () => console.log(this.state));

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
                            books={this.unpackBooks(this.state.currentlyReading)}
                            updateStatus={this.updateBookStatus}
                        />
                        <Shelf
                            title="Want to read"
                            shelf="wantToRead"
                            books={this.unpackBooks(this.state.wantToRead)}
                            updateStatus={this.updateBookStatus}
                        />
                        <Shelf
                            title="Read"
                            shelf="read"
                            books={this.unpackBooks(this.state.read)}
                            updateStatus={this.updateBookStatus}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Bookshelf;