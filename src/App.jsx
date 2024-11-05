import React from "react";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Provider from "./context/Provider";
import Cart from "./components/cart/cart";


function App() {
  return (
    <Provider>
      <Header/>
      <Products/>
      <Cart/>
    </Provider>
  );
}

export default App;
