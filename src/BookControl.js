import React from 'react';
import * as BooksAPI from './BooksAPI';

class BookControl extends React.Component {

    state = {
        status: this.props.status,
    }

    setStatus = (event) => {
        this.setState({
            status: event.target.value,
        }, () => {
            this.props.updateStatus(this.props.id, this.state.status);
            this.updateBook(this.props.id, this.state.status);
        });
    }

    updateBook = (id, status) => {
        console.log('id, status: ' + id + ' ' + status);
        return BooksAPI.update(id, status)
            .then((response) => {
                console.log(response);
            })
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select
                    value={this.state.status}
                    onChange={(e) => this.setStatus(e)}
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