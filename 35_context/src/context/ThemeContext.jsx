import React, { useState, createContext } from "react";
import ThemeToggle from "../components/ThemeToggle";

export const ThemeContext = createContext()

const ThemeContextProvider = () => {
    const [state, setState] = useState({
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    })

    const toggleTheme = () => {
        setState(prevState => ({
            ...prevState,
            isLightTheme: !prevState.isLightTheme
        }))
    }

    return (
        <ThemeContext.Provider value={{ ...state, toggleTheme }}>
            <ThemeToggle />
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider