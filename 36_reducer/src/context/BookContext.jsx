import React, { createContext, useReducer } from "react";
import { BookReducer } from "../reducer/BookReducer";

export const BookContext = createContext()

const BookContextProvider = ({ children }) => {
    const [books, dispatch] = useReducer(BookReducer, [
        { id: 0, title: "Na Drini Cuprija", author: "Ivo Andric" },
    ])
    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider