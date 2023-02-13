import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  state = {
    count: 0,
    imgSrc: "https://picsum.photos/300/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  constructor() {
    super();
    // console.log("Constructor", this);
    this.handleIncrement = this.handleIncrement.bind(this)
  };

  formatCount() {
    return this.state.count === 0 ? 'Zero' : this.state.count
  };

  styles = {
    fontSize: 36,
    fontWeight: "bold"
  };

  conditionalRenderingOfMyArray() {
    return this.state.tags.length === 0 ? "Empty array" :
      <ul>
        {
          this.state.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))
        }
      </ul>
  };

  // Depricated -  ne bind-uje auromatski "this" kroz constructor
  // handleIncrement() {
  //   console.log("Increment");
  //   console.log("my count", this);
  // }

  handleIncrement = () => {
    // console.log("Increment", this);
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className='App'>
        <h1 style={{ fontSize: 24 }}>Hello world!</h1>
        <p style={this.styles}>{2 + 2}</p>
        <div>
          <p style={{ fontSize: 24 }}>{this.formatCount()}</p>
          {/* Kada funkcija ne ocekuje neki argument */}
          <button className='btn-primary' onClick={this.handleDecrement} style={{ margin: 5 }}>Decrement</button>
          <button className='btn-primary' onClick={this.handleIncrement} style={{ margin: 5 }}>Increment</button>

          {/* Kada prosledjujemo argument nasoj funkciji, zovemo arrow funkciju */}
          {/* <button className='btn-primary' onClick={() => this.handleIncrement(3)}>Increment</button> */}
        </div>
        <img src={this.state.imgSrc} alt='random_picture' />
        {/* <ul>
          {
            this.state.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))
          }
        </ul> */}
        <p>{this.state.tags.length === 0 ? "Niz je prazan" : "My tags"}</p>
        <div>
          {this.conditionalRenderingOfMyArray()}
        </div>
      </div>
    );
  };
};

export default App