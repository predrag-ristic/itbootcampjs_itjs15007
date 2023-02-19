import React, { Component } from "react";

class UpdateComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            lastname: '',
            email: '',
            password: ''
        }
    }

    componentDidUpdate() {
        console.log(`
            Name: ${this.state.name}
            Last Name: ${this.state.lastname}
            Email: ${this.state.email}
            Password: ${this.state.password}
        `);
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Form</h1>
                <p>Name</p>
                <input type="text" name="name" onChange={this.handleChange} />
                <p>Last Name</p>
                <input type="text" name="lastname" onChange={this.handleChange} />
                <p>E-mail</p>
                <input type="email" name="email" onChange={this.handleChange} />
                <p>Password</p>
                <input type="password" name="password" onChange={this.handleChange} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default UpdateComponent