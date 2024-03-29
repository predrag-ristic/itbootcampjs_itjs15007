import React, { useState, useEffect } from "react";

const Counter1 = () => {
    const [state, setState] = useState({ counter: 4, color: 'blue' })
    const { counter, color } = state

    // // Svaka promena
    // useEffect(() => {
    //     console.log('Render');
    // })

    // componentDidMount
    useEffect(() => {
        console.log('Render');
    }, [])

    // componenetDidUpdate
    useEffect(() => {
        console.log('Counter did update');
        if (state.counter === 0) alert('Counter is zero')
    }, [state.counter])

    // componentWillUnmount
    useEffect(() => {
        console.log('Component will unmount');

        return () => {
            console.log('Do some cleanup');
        }
    }, [])

    const handleDecrement = () => {
        setState((prevState) => {
            // Spread operator
            // Omogucava da iskopiramo ceo ili delove postojeceg niza ili objekta u drugi niz ili objekat
            return { ...prevState, counter: prevState.counter - 1 }
        })
    }

    const handleIncrement = () => {
        setState((prevState) => {
            return { ...prevState, counter: prevState.counter + 1 }
        })
    }

    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span> {counter} </span>
            <span style={{ marginLeft: 15 }}> {color} </span>
            <button onClick={handleIncrement}>+</button>
            <br />
            <button onClick={() => setState(prevState => { return { ...prevState, color: "red" } })}>Change Color</button>
        </div>
    )
}

export default Counter1