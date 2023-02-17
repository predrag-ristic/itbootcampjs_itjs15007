import React, { Component } from "react";

class Input extends Component {
    state = {
        name: '',
        age: '',
        errorMsg: ''
    };

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value })

        let errorMsg = ''
        if (name === 'age') {
            if (value !== "" && !Number(value)) {
                errorMsg = "You must enter a number!"
            }
        }
        
        this.setState({errorMsg: errorMsg})
    }

    render() {
        return (
            <form>
                <h1>Hello {this.state.name}</h1>
                <p>Your age is {this.state.age}</p>

                <p>Enter your name</p>
                <input type="text" name="name" onChange={this.handleChange} />

                <p>Enter your age</p>
                <input type="text" name="age" onChange={this.handleChange} />

                <br/>
                <strong style={{ color: 'red' }}>{this.state.errorMsg}</strong>
            </form>
        )
    };
};

export default Input