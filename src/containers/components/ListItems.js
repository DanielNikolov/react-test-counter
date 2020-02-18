import React from 'react';

const ListItems = (props) => {
    const items = props.items.map((item, index) => {
        return (
            <div key={index}
                className="list-item">
                <a href={item}>{item}</a>
            </div>
        )
    });
    return (
        <div className="list">
        { items }
        </div>
    )
}

export default ListItems;