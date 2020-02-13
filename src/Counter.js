import React, { Component } from 'react';
import './Counter.css';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 42
        }
    }

    buttonClickHandler = () => {
        this.setState({
            counter: this.state.counter+1
        });
    }

    render() {
        return (
            <div className="App">
                <h2 className="counter">{this.state.counter}</h2>
                <button className="counter-button" onClick={this.buttonClickHandler}>
                    Click
                </button>
            </div>
        )
    }
}

export default Counter;