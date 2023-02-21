import React, { useState } from "react";
import NewSongForm from "./NewSongForm";
import { v4 as uuidv4 } from 'uuid';

const SongList = () => {
    const [songs, setStongs] = useState([
        { title: 'In corpore sano', id: 0 },
        { title: 'Doberman', id: 1 },
        { title: 'Bodom After Midnight', id: 2 }
    ])

    const addSong = title => {
        setStongs(prevState => [...prevState, { title: title, id: uuidv4() }])
    }

    return (
        <>
            <NewSongForm addSong={addSong} />

            <h2>My song list:</h2>

            <ul>
                {songs.map(({ title, id }) => {
                    return <li key={id}>{title}</li>
                })}
            </ul>

        </>
    )
}

export default SongList