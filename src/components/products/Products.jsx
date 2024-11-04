import React, { useEffect, useState } from "react";
import "./Products.css"
import dadosProdutos from "../../dados/produtos";
import ProductCard from "../productCard/ProductCard";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(dadosProdutos)
    }, []);

    return(
    <section className="products container">
        {
            products.map(
                (product) => <ProductCard key={product.id} dados={product}/>
            )
        }  
    </section>
    );
}

export default Products;