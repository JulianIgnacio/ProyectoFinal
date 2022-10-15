import React from "react";
import Cart from "../Carrito/Carrito";
import Products from "../Productos/Productos";

const Compras = () => {
  return (
    <div className="home">
      <Cart />
      <Products />
    </div>
  );
};

export default Compras;
