import React from 'react';
import { Link } from 'react-router-dom';

const AddButton = (props) => {
    return (
        <Link
            to='/search'
        >
            <div className="open-search">
                <button>Add a book</button>
            </div>
        </Link>
    );
}
export default AddButton;