import React, { useState, useEffect } from "react";

const Select = () => {
    const [state, setState] = useState('posts')
    const [items, setItems] = useState([])

    const handleChange = event => {
        setState(event.target.value)
    }

    // useEffect kao drugi parametar koristi da razume kada treba da se okine
    // Ako prosledimo prazan niz, on se okida iskljucivo kada se komponeneta PRVI put renderuje

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${state}`)
            .then((response) => response.json())
            .then((json) => setItems(json))
            .catch((err) => console.log(err))
    }, [state])

    return (
        <div>
            <form>
                <br />
                <select value={state} onChange={handleChange}>
                    <option value="posts">Posts</option>
                    <option value="comments">Comments</option>
                    <option value="albums">Albums</option>
                </select>
                <br />
            </form>

            <ul>
                {items.map((item, index) => {
                    return (
                        <li key={index}>
                            <p>{item.title} </p>
                            <p>{item.name}</p>
                            <p>{item.email}</p>
                            <p>{item.body}</p>
                        </li>
                    )
                }
                )}
            </ul>
        </div>
    )
}

export default Select