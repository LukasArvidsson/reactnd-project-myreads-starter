import React from 'react';
import { Link } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf';
import AddButton from './AddButton';

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <Bookshelf />
        <AddButton />
      </div>
    )
  }
}

export default BooksApp
