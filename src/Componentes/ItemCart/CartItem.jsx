import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import Button from 'react-bootstrap/Button';
import style from "../ItemCart/styles.module.css"

export const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { DeleteItemToCart, AddItemToCart } = useContext(CartContext);

  /* Desestructuramos el item para sacar solo la id */
  const { id } = item;

  return (
    <div className={style.cartItem}>
      <img src={item.img} alt={item.name} className={style.imgcart}/>
      <div className="dataContainer">
        <div className="left">
          <p>{item.name}</p>
          <div className="buttons">
          <Button variant="primary" onClick={() => AddItemToCart(item)}>+</Button>
            <Button variant="danger" onClick={() => DeleteItemToCart(id)}>x</Button>
          </div>
        </div>
        <div className="right">
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>
  );
};
