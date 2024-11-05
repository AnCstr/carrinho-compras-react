import React, { useContext } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import './CartItem.css'
import formatCurrency from "../../utils/formatCurrency";
import propTypes from 'prop-types'
import AppContext from "../../context/AppContext";
import getOcorrencia from "../../utils/ocorrencia";



function CartItem({dados}) {
    const { id, image, title, price} = dados;
    const {cartItems, setCartItems} = useContext(AppContext);

    const handleRemoveItem = (index) => {
        const updatedItems = [...cartItems];
        updatedItems.splice(index, 1);
        setCartItems(updatedItems);
    }

    let ocorrencia = getOcorrencia(cartItems, id);

    return (
        //Remoção Produto Carrinho realizado via botão className="button__remove-item"
        <section className="cart-item">
            <img src={image} 
            alt="img produto" 
            className="cart-item-img" 
            />
            <div className="cart-item-content">
                <h3 className="cart-item-title">{title} x {ocorrencia}</h3>
                <h3 className="cart-item-price">{formatCurrency((price * ocorrencia), 'BRL')}</h3>
                <h3 className="cart-item-occ"></h3>
                <button 
                    type="button"
                    className="button__remove-item"
                    onClick={() => handleRemoveItem(id)}
                >
                    <MdRemoveShoppingCart />
                </button>
            </div>
        </section>
    )
}

export default CartItem;

CartItem.propTypes = {
    dados: propTypes.shape({}),
}.isRequired;
