import React from 'react';
import * as BooksAPI from './BooksAPI';

class BookControl extends React.Component {

    state = {
        status: this.props.status,
    }

    updateBook = (event) => {
        const id = this.props.id;
        const status = event.target.value;
        const book = { id: id };

        //Update book
        return BooksAPI.update(book, status)
            .then((response) => {
                this.setState({
                    status: status,
                }, () => {
                    this.props.updateStatus(id, status);
                });
            })
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select
                    value={this.state.status}
                    onChange={(e) => this.updateBook(e)}
                >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div >
        );
    }
}

export default BookControl;