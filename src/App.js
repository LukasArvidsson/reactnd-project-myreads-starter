import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf';
import AddButton from './AddButton';
import { Route } from 'react-router-dom';
import Search from './Search';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div>
            <Bookshelf />
            <AddButton />
          </div>
        )} />
        <Route exact path='/search' render={() => (
          <div>
            <Search />
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
