import React, { Component } from "react";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            lastName: '',
            email: '',
            password: '',
        };
        // this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value })
        console.log(this.state);
    }

    submitHandler = event => {
        event.preventDefault()
        console.log("SERVER PAYLOAD");
        console.log("___________");
        console.log(this.state);
    }

    componentDidUpdate() {
        console.log("UPDATED");
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <p>Enter your name:</p>
                <input type="text" name="name" onChange={this.changeHandler} />
                <p>Enter your last name:</p>
                <input type="text" name="lastName" onChange={this.changeHandler} />
                <p>Enter your e-mail:</p>
                <input type="email" name="email" onChange={this.changeHandler} />
                <p>Enter your password:</p>
                <input type="password" name="password" onChange={this.changeHandler} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Form