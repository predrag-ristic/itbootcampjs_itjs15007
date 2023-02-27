import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ToDoForm = () => {
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem) {
            alert("Add a new To Do item, don't be lazy!");
            return;
        }

        const item = {
            id: uuidv4(),
            value: newItem,
        };

        setItems((oldList) => [...oldList, item]);

        setNewItem("");
    };

    const deleteItem = (id) => {
        const newArray = items.filter((item) => item.id !== id);
        setItems(newArray);
    };

    return (
        <div className="App">
            <h1>To Do List</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a To Do Item"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button type="submit">+</button>
            </form>

            <ul>
                {items.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.value}{" "}
                            <button onClick={() => deleteItem(item.id)}>
                                <span style={{ color: "red" }}>X</span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ToDoForm