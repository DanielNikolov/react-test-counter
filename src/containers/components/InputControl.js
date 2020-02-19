import React from 'react';

const InputControl = (props) => {

    let classNames = ['control'];
    if (props.itemsCount > 0) {
        classNames.push('is-loading');
    }
    return (
        <div className={classNames.join(' ')}>
            <input type="text" onChange={props.changed} />
        </div>
    )
}

export default InputControl;