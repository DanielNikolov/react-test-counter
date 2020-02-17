import React, { useState } from 'react';
import InputControl from './components/InputControl';
import './Wrapper.css';

const Wrapper = () => {
    let [items, setItems] = useState({ items: [] });
    return (
        <div className="wrapper">
            <InputControl />
        </div>
    );
}

export default Wrapper;