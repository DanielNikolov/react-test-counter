import React from 'react';

const InputControl = (props) => {

    return (
        <div className="control">
            <input type="text" onChange={props.changed} onKeyPress={props.changed} />
        </div>
    )
}

export default InputControl;