import React, {useState, useContext} from "react";
import { CartContext } from "../../context/cart";

export default function Product(props) {

  const { addToCart } = useContext(CartContext)
  
  return (
    <div className="product">
    <div className="card-pro">
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button onClick={() => addToCart(props)}>Add to Cart</button>
      </p>
    </div>
  
    </div>
  );
}
