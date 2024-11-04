import React from "react";
import "./ProductCard.css"
import { FaCartPlus } from "react-icons/fa";
import propTypes from 'prop-types'
import formatCurrency from "../../utils/formatCurrency";


function ProductCard({dados}){
    const { title, image, price } = dados; 

    return(
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
        <div className="addCart">
            <button type="button" className="button__addCart">
            <FaCartPlus />
            </button>
        </div>
    </section>
    );
}

export default ProductCard;

ProductCard.propTypes = {
    dados: propTypes.shape({}),
}.isRequired;