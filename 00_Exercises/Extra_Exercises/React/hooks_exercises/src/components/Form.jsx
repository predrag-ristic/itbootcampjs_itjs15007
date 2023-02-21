import React, { useState } from "react";

const Form = () => {
    const [post, setPost] = useState()
    const [comments, setComments] = useState()
    const [albums, setAlbums] = useState()

    const handleState = () => {
        setState((prevState) => {
            return
        })
    }

    return (
        <form>
            <br />
            <select onChange={handleState}>
                <option value="posts">Posts</option>
                <option value="comments">Comments</option>
                <option value="albums">Albums</option>
            </select>
        </form>
    )
}

export default Form