import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        style={{ color: this.props.color }}
        onClick={() => {
          this.props.handleClick();
        }}
      >
        {this.props.text} button
      </button>
    );
  }
}

export default Button;
