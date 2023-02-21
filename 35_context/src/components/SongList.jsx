import React, { useContext } from "react";
import { SongContext } from "../context/SongContext";
import { ThemeContext } from "../context/ThemeContext";

const SongList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    const { songs } = useContext(SongContext)

    return (
        <div>
            <h2>My Song List:</h2>
            <ul
                style={
                    {
                        background: theme.bg,
                        width: '50%',
                        marginleft: '50%',
                        transform: 'translate(-50%)',
                    }
                }
            >
                {songs.map(song => {
                    return (
                        <li key={song.id}
                            style={{
                                background: theme.ui,
                                color: theme.syntax
                            }}
                        >
                            {song.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SongList