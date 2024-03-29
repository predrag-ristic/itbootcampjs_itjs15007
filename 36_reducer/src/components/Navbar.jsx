import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";


const Navbar = () => {
    const { books } = useContext(BookContext)

    return (
        <div>
            <h1>My reading list:</h1>
            <p>Currently I have <strong>{books.length}</strong> books to read</p>
        </div>
    )
}

export default Navbar;