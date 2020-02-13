import React, { useState } from 'react';
import './Counter.css';

const Counter = (props) => {
    let [counter, setCounter] = useState(42);

    const buttonClickHandler = () => {
        setCounter(counter+1);
    }

    return (
        <div className="App">
            <h2 className="counter">{counter}</h2>
            <button className="counter-button" onClick={() => buttonClickHandler()}>
                Click
            </button>
        </div>
    )
};

export default Counter;