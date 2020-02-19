import React from 'react';

const ListItems = (props) => {
    const items = props.items.map((item, index) => {
        return (
            <div key={index}
                className="list-item">
                <a href={item} onClick={() => {props.itemClicked(index)}}>{item}</a>
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