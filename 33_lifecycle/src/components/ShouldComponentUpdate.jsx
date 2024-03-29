import React, { Component } from "react";

class ShouldComponentUpdate extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log('shouldComponentUpdate', nextProp, nextState);

    if (nextState.count === this.state.count) {
      console.log(this.state.count, 'matches', nextState.count, 'component will not rerender');
      return false
    }
    console.log(this.state.count, 'does not match', nextState.count, 'component will rerender');
    return true
  }

  updateCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  dontUpdateCount = () => {
    this.setState({
      count: this.state.count
    })
  }

  render() {
    return (
      <div>
        {this.state.count}
        <br />
        <button onClick={this.updateCount}>Update Count</button>
        <br />
        <button onClick={this.dontUpdateCount}>Don't Update Count</button>
      </div>
    );
  }
}

export default ShouldComponentUpdate;
