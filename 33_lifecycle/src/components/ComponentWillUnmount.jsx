import React, { Component } from "react";

class ComponentWillUnmount extends Component {
    componentWillUnmount() {
        alert('This component will unmout')
    }

    render() {
        return <>I am a child component</>;
    }
}

export default ComponentWillUnmount