import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css"

function SearchBar() {

    const [searchValue, setSearchValue] = useState("");
    return (
        <form className="search-bar">
        <input 
        type="search" 
        value={searchValue}
        placeholder="Buscar Produto" 
        className="search__input" 
        required
        onChange={({target}) => setSearchValue(target.value)}
        />
        <button type="submit" className="search__button">
        <BsSearch />
        </button>
    </form>
    )

}

export default SearchBar;