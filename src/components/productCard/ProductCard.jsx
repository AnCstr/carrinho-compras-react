import React, { useContext } from "react";
import "./ProductCard.css"
import { FaCartPlus } from "react-icons/fa";
import propTypes from 'prop-types'
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";


function ProductCard({dados}){
    const { title, image, price } = dados; 
    const {cartItems, setCartItems} = useContext(AppContext);

    const handleAddCart = () => setCartItems([ ...cartItems, dados]);

    return(
    //Adição de produtos no Carrinho realizado via botão className="button__addCart"
    <section className="productCard">
        <img src={image} alt="product" className="card__image"/>
        <div className="card__infos">
            <h2 className="card__price">
                {formatCurrency(price, 'BRL')}
            </h2>
            <h2 className="card__title">
                {title}
            </h2>
        </div>
        <div className="productCard"> 
            <button type="button" className="button__addCart" onClick={handleAddCart}>
            <FaCartPlus />
            <span className="span-add-cart">Adicionar ao Carrinho</span>
            </button>
        </div>
    </section>
    );
}

export default ProductCard;

ProductCard.propTypes = {
    dados: propTypes.shape({}),
}.isRequired;