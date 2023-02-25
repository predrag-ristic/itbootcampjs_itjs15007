import React, { Component } from "react";
import Button from "./Button";

class Main extends Component {
  state = {
    text1: "Roses are Red",
    text2: "Violets are Blue",
    text3: "Green",
    color: "black",
    switchCounter: 0,
  };

  switcher(switchCounter) {
    switch (switchCounter % 4) {
      case 1:
        return this.state.text1;
      case 2:
        return this.state.text2;
      case 3:
        return this.state.text3;
      default:
        return "Click for a poem";
    }
  }

  stateManager(color) {
    this.setState({
      color: color,
      switchCounter: this.state.switchCounter + 1,
    });
  }

  render() {
    return (
      <>
        <Button color="red" handleClick={this.stateManager.bind(this)} />
        <Button color="blue" handleClick={this.stateManager.bind(this)} />
        <Button color="green" handleClick={this.stateManager.bind(this)} />
        <h1 style={{ color: `${this.state.color}` }}>
          {this.switcher(this.state.switchCounter)}
        </h1>
      </>
    );
  }
}

export default Main;
