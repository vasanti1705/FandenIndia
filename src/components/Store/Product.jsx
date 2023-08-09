import React, {useState} from "react";

export default function Product(props) {
  const [cartItems, setCartItems] = useState([]);


  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product is already in the cart, increase the quantity by 1
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }; 
  
  return (
    <div className="product">
    <div className="card-pro">
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button onClick={() => handleAddToCart(props)}>Add to Cart</button>
      </p>
    </div>
  
    </div>
  );
}
