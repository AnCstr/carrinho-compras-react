import React from "react";
import SearchBar from "../searchBar/SearchBar";
import "./Header.css"
import CartButton from "../cartButton/CartButton";


function Header(){
    return (
        <header className="header">
            <div className="container">
                <SearchBar/>
                <CartButton/>
            </div>
        </header>
    )
}

export default Header;