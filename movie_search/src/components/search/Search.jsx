import React, { useState } from 'react';
import './style.css'

const Search = () => {
    const [searchInput, setSearchInput] = useState('')

    const handleSearch = e => {
        e.preventDefault()
    }

    const handleReset = () => {
        setSearchInput('')
    }

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={searchInput}
                placeholder='Search'
                onChange={e => setSearchInput(e.target.value)}
            />
            <input
                type="submit"
                value="Submit"
            />
        </form>
    );
}

export default Search;