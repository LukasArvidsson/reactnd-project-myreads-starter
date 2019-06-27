import React from 'react';

const AddButton = (props) => {
    return (
        <div className="open-search">
            <button onClick={() => console.log('boo')}>Add a book</button>
        </div>
    );
}
export default AddButton;