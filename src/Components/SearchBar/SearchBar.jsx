import React, { useState } from 'react';


const SearchBar = ({searchLibrary}) => {
    
    const [query, setQuery] = useState('')
    console.log(query)
   
    const handleSubmit = (event) => {
        event.preventDefault();
        searchLibrary(query);
    }
    

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
                <button value={query} onChange={handleSearchChange} type='search'>Search</button>
            </form>
        </div>
    






     );
}
 
export default SearchBar;