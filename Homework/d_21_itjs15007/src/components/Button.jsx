import React from "react";

const Button = ({ color, text, submitHandler }) => {
    return (
        <button style={{ color: color }} onClick={() => submitHandler(text)}>{text} button</button>
    )
}

export default Button