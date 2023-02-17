import React, { Component } from 'react'
import ButtonComponent from '../Button/Button';

class Main extends Component {
    state = {
        message1: "hello there",
        message2: "I'm a message too",
        message3: "ITBootcamp",
        color: "black",
        switchCounter: 0
    };

    switcher(switchCounter) {
        switch (switchCounter % 3) {
            case 1:
                return this.state.message1;
            case 2:
                return this.state.message2;
            default:
                return this.state.message3;
        };
    };

    stateManager(colorParam) {
        this.setState({ color: colorParam, switchCounter: this.state.switchCounter + 1 })
    }

    render() {
        return (
            <div>
                <ButtonComponent color={"red"} clickHandler={this.stateManager.bind(this)} />
                <ButtonComponent color={"blue"} clickHandler={this.stateManager.bind(this)} />
                <ButtonComponent color={"green"} clickHandler={this.stateManager.bind(this)} />
                <h1 style={{ color: `${this.state.color}` }}>{this.switcher(this.state.switchCounter)}</h1>
            </div>
        )
    };
};

export default Main