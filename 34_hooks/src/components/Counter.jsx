import React, { useState } from "react";

// const initialValue = () => {
//     console.log('run function');
//     return 7
// }

const Counter = () => {
    const [counter, setCounter] = useState(0); // <= Ovde moze da ide i initialValue funckija

    const handleDecrement = () => {
        setCounter((prevState) => prevState - 1)
    }

    return (<div>
        <br />
        <button onClick={() => handleDecrement()}>-</button>
        <span> {counter} </span>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
    )
}

export default Counter
