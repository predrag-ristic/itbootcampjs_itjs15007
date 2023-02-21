import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {
    const [title, setTitle] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        addSong(title)
        setTitle('')
    }

    return (
        <div>
            <br />
            <form onSubmit={handleSubmit}>
                <label>Song name: </label>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)} />
                <input type="submit" value="Add song" />
            </form>
        </div>
    )
}

export default NewSongForm