import React, { Component } from "react";

class Button extends Component {
    state = {
        color: "",
        text: ""
    };

    handleClick = (color, text) => {
        this.setState({ color: color, text: text });
    };

    render() {
        return (
            <div>
                <button
                    className='redBtn'
                    onClick={() => this.handleClick("red", "Roses are Red")}>
                    Red
                </button>
                <button
                    className='blueBtn'
                    onClick={() => this.handleClick("blue", "Violets are Blue")}>
                    Blue
                </button>
                <button
                    className='greenBtn'
                    onClick={() => this.handleClick("green", "Green")}>
                    Green
                </button>
                <h1 style={{ color: this.state.color }}>{this.state.text}</h1>
            </div>
        )
    }
}

export default Button