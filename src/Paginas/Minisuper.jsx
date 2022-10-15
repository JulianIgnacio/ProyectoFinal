import React from "react";
import Compras from "../Componentes/Sala de Compras/Sala-de-compras";
import { CartProvider } from "../context/CartContext";
import "../Paginas/Minisuper.css"
import NavBar from "../Componentes/navbar";
import Footer from "../Componentes/footer";

const Minisuper = () => {
    return (
        <>
        <NavBar />
        <CartProvider>
        <Compras />
        </CartProvider>
        <br />
        <Footer/>
        </>
    );
}

export default Minisuper;