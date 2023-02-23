import React, { useEffect, useState } from "react";
import Button from "./Button";

const Main = () => {
    const [text, setText] = useState('black')

    useEffect(() => {
        console.log('whatever');
    }, [text])

    return (
        <>
            <Button color='red' text={'red'} submitHandler={setText} />
            <Button color='blue' text={'blue'} submitHandler={setText} />
            <Button color='green' text={'green'} submitHandler={setText} />
            <br />
            <h1 style={{ color: text }}>This H1 is brought to you by the {text} button</h1>
        </>
    )
}

export default Main