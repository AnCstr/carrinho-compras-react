import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css"
import pesquisaProduto from "../../utils/pesquisaProduto";
import AppContext from "../../context/AppContext";

function SearchBar() {

    const [searchValue, setSearchValue] = useState('');
    const { setProducts } = useContext(AppContext);

    const handleSearch = (event) => {
        event.preventDefault();
        const products = pesquisaProduto(searchValue);
        
        setProducts(products)
        setSearchValue('')
    }

    return (
        <form className="search-bar" onSubmit={handleSearch}>
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