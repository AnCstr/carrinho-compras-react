import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import "./CartButton.css"

function CartButton(){
    return (
        <button type="button" className="cart__button"> 
            <FaCartShopping/>
            <span className="cart-status">1</span>
        </button>
    );
}

export default CartButton;