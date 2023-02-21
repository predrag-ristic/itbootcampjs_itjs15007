import React, { Component } from "react";
import "./App.css";
// import ChildComponent from "./components/ChildComponent";
import ShouldComponentUpdate from "./components/ShouldComponentUpdate";
import GetSnapshotBeforeUpdate from "./components/GetSnapshotBeforeUpdate";
import ComponentWillUnmount from "./components/ComponentWillUnmount";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "This name will change in 3 seconds.",
      show: true,
    };
  }

  // componentDidMount() {
  //   console.log("Component did mount");
  //   setTimeout(() => {
  //     this.setState({ name: `This name was changed. ${Math.random()}` });
  //   }, 3000);

  //   // Usual purpose
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }

  render() {
    return (
      <div className="App">
        {/* <p>{this.state.name}</p> */}
        {/* <ChildComponent /> */}
        <ShouldComponentUpdate />
        <GetSnapshotBeforeUpdate />
        <br />
        {this.state.show ? <ComponentWillUnmount /> : null}
        <br />
        {/* Toggle button */}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          {this.state.show ? "Unmount Component" : "Mount Component"}
        </button>
      </div>
    );
  }
}

export default App;
