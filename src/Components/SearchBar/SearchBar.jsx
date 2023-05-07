import React, { useState } from 'react';


function SearchBar({ searchLibrary }) {

    const [query, setQuery] = useState('');
    console.log(query);

    const handleSubmit = (event) => {
        event.preventDefault();
        searchLibrary(query);
    };


    const handleSearchChange = (event) => {
        setQuery(event.target.value);
    };




    return (

        <div>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="search"
                    value={query}
                    onChange={handleSearchChange}>
                </input>
                <button className="searchButton" value={query} onChange={handleSearchChange} type='search' style={{'margin': '0.5em'}}>Search</button>
            </form>
        </div>







    );
}
 
export default SearchBar;