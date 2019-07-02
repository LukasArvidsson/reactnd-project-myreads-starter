import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf';
import AddButton from './AddButton';
import { Route } from 'react-router-dom';
import Search from './Search';
import * as BooksAPI from './BooksAPI';

class App extends React.Component {

  state = {
    allBooks: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
  }

  componentDidMount() {
    this.fetchBooks(this.populateShelf);
  }

  fetchBooks = (callback) => {
    return BooksAPI.getAll()
      .then((data) => {
        this.setState(() => ({
          allBooks: data,
        }), () => {
          callback && callback();
        });
      })
  }

  populateShelf = () => {
    //Create state object to update with
    const currentlyReading = [];
    const wantToRead = [];
    const read = [];

    //Populate shelfs with book ids from allBooks
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
    }));
  }

  updateBookStatus = (response) => {
    //We have to have all books before we can match ids
    this.fetchBooks(
      this.setState(() => ({
        currentlyReading: response.currentlyReading,
        wantToRead: response.wantToRead,
        read: response.read,
      }), () => console.log("Updating state"))
    );

  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div>
            <Bookshelf
              allBooks={this.state.allBooks}
              currentlyReading={this.state.currentlyReading}
              wantToRead={this.state.wantToRead}
              read={this.state.read}
              updateStatus={this.updateBookStatus}
            />
            <AddButton />
          </div>
        )} />
        <Route exact path='/search' render={() => (
          <div>
            <Search updateStatus={this.updateBookStatus} />
          </div>
        )} />
      </div>
    )
  }
}

export default App;
