import React, { useState, createContext } from "react";

export const SongContext = createContext()

const SongContextProvider = ({ children }) => {
    const [songs, setSongs] = useState([
        { title: 'In corpore sano', id: 0 },
        { title: 'Doberman', id: 1 },
        { title: 'Bodom After Midnight', id: 2 }
    ])

    return (
        <SongContext.Provider value={{ songs }}>
            {children}
        </SongContext.Provider>
    )
}

export default SongContextProvider