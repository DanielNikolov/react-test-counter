import React from 'react';

const ListItems = (props) => {
    const items = props.items.map((item, index) => {
        return (
            <div key={index}
                className="list-item"
                onClick={(event) => {
                    event.preventDefault();
                    props.onSelectItem(index);
                }}>
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