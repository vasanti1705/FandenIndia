import React, { useState } from 'react';
import Nav from '../nav';
import Footer from '../footer';
import './Main.css';
import CartPage from './CartPage';
import { Link, useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: 10, image: 'https://tiimg.tistatic.com/fp/1/007/546/multi-color-premium-quality-polyester-full-sleeves-sports-t-shirt-410.jpg' , quantity: 0},
  { id: 2, name: 'Product 2', price: 15, image: 'https://www.triumph-sports.com/wp-content/uploads/2021/04/SpoJerDye02-1.png', quantity: 0 },
  { id: 3, name: 'Product 3', price: 20, image: 'http://www.purplepalette.in/uploaded-files/thumb-cache/member_6/thumb-400-400-round-neck-badminton-t-shirt_649.jpg', quantity: 0 },
  { id: 4, name: 'Product 4', price: 25, image: 'https://static.fibre2fashion.com/MemberResources/LeadResources/1/2018/4/Seller/18146349/Images/18146349_0_plain-sports-t-shirts-for-men.png?tr=w-320,h-320,cm-pad_resize,bg-F3F3F3', quantity: 0 },
  { id: 5, name: 'Product 5', price: 30, image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/538066/37/mod01/fnd/IND/fmt/png/CLASSICS-Men s-Regular-Fit-Polo', quantity: 0 },
  // ...
];



const Main = ({ item }) => {

  const [cartItems, setCartItems] = useState(products);

  // const getTotalPrice = () => {
  //   return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  // };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cartItems) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  };


  const navigate = useNavigate();

  const redirectToCart = () => {
    navigate('/CartPage');
  };

  const handleIncreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className='main'>
      <Nav cartItems={cartItems.filter((product) => product.quantity > 0)} />
      <div className="Cart-Main">
        <div className="container">
          <h1>Product List</h1>
          <div className="product-grid">
            {cartItems.map((product) => (
              <div className="product-item" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div>
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                  <div className="quantity-control">
                    <button className="btnCart" onClick={() => handleDecreaseQuantity(product.id)}>-</button>
                    <span>{product.quantity}</span>
                    <button className="btnCart" onClick={() => handleIncreaseQuantity(product.id)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-para">
            <p>Total Price: ${calculateTotalPrice()}</p>
          </div>
        </div>
      </div>

      {/* <button onClick={redirectToCart}>
        <h2><i className="fa-solid fa-cart-shopping"></i> {cartItems.reduce((total, item) => total + item.quantity, 0)}</h2>
      </button> */}

      <Footer />
    </div>
  );
};

export default Main;