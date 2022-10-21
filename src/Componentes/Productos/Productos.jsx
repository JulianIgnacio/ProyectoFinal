import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import { ProductsData } from "../../data/Data";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import style from "./style.css"

const Productos = () => {
  /* Traemos del context la funcion para agregar un producto */
  const { AddItemToCart} = useContext(CartContext);
  
  return (
    <div className="productscontainer">
      { ProductsData.map((product, i) => (
        <div key={i} className="products">
          <div>
            <p>
            <Card className={style.card}>
            <Card.Img variant="top" src={product.img} alt={product.name} />
            <Card.Body>
            <Card.Title>
            {product.name}  
            </Card.Title>
            <Card.Text>
            ${product.price}
             </Card.Text>
             </Card.Body>
             </Card>
              
            </p>
          </div>

          <Button variant="primary" onClick={() => AddItemToCart(product)}>Agregar al carrito</Button>
        </div>
      ))}
    </div>
  );
};

export default Productos;
