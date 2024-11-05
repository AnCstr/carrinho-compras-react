import React, { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import "./CartButton.css"
import AppContext from "../../context/AppContext";

function CartButton(){
    const {cartItems, cartVisible, setCartVisible} = useContext(AppContext);
    return (
        <button type="button" className="cart__button" onClick={() => setCartVisible(!cartVisible)}> 
            <FaCartShopping/>
            {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
        </button>
    );
}

export default CartButton;