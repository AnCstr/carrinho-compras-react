import React, { useContext, useEffect } from "react";
import "./Products.css"
import dadosProdutos from "../../dados/produtos";
import ProductCard from "../productCard/ProductCard";
import Loading from "../loading/Loading";
import AppContext from "../../context/AppContext";


function Products() {
    const {products, setProducts, loading, setLoading} = useContext(AppContext);

    useEffect(() => {
        setProducts(dadosProdutos)
        setLoading(false);
    }, []);

    return(
        //Criação de cards de produtos com dados de produtos pre definidos em "../../dados/produtos"
        (loading && <Loading/>) || (
        <section className="products container">
            {
                products.map(
                    (product) => <ProductCard key={product.id} dados={product}/>
                )
            }  
        </section>
        )
    );
}

export default Products;