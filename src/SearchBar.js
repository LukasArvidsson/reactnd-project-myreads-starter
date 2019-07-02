import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {

    state = {
        value: '',
    }

    handleChange = (query) => {
        console.log(query);
        this.setState(() => ({
            value: query,
        }), this.props.search(query));
    }

    render() {
        return (
            <div className="search-books-bar">
                <Link
                    to='/'
                >
                    <button
                        className="close-search"
                        onClick={() => (console.log('library'))}
                    >Close
                    </button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={this.state.value} onChange={(event) => this.handleChange(event.target.value)} />
                </div>
            </div>
        );
    }
}

SearchBar.propTypes = {
    search: PropTypes.func.isRequired,
}

export default SearchBar;