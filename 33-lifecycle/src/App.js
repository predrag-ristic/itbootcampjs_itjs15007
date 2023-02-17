import React, { Component } from "react";
import ChildComponent from "./components/ChildComponent";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "This name will change in 3 seconds.",
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
        <p>{this.state.name}</p>
        <ChildComponent />
      </div>
    );
  }
}

export default App;
