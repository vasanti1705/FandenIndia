// CartPage.js
import React from 'react';
import './CartPage.css';

const CartPage = ({ cartItems }) => {
  return (
    <div>
      <h2>Selected Items:</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
