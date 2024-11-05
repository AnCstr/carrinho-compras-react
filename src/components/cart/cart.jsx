import React, { useContext } from "react";
import './cart.css'
import CartItem from "../cartItem/CartItem";
import AppContext from "../../context/AppContext";
import formatCurrency from "../../utils/formatCurrency";


function Cart() {
    const { cartItems, cartVisible } = useContext(AppContext);

    //Valor Total Carrinho
    const totalCarrinho = cartItems.reduce((acc, item) => item.price + acc, 0);

    return (
        <section className={`cart ${cartVisible ? 'cart--active' : ''}`}>
            <div className="cart-items">
                {cartItems.map((cartItem) => <CartItem key={cartItem.id} dados={cartItem} />)}
            </div>
            <div className="cart-resume">
                {formatCurrency(totalCarrinho, 'BRL')}
            </div>
        </section>
    )

};

export default Cart;
