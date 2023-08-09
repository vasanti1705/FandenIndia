import React, { useState } from 'react';
import './navbar.css';
import fan from './assests/logo2.png';
import { Link } from 'react-router-dom';
import Main from './Store/Main'
import CartPage from './Store/CartPage';
import { useNavigate,NavLink } from 'react-router-dom';

const Nav = ({ cartItems }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };


  const getTotalItem = () => {
    if (!Array.isArray(cartItems)) return 0;

    let totalItems = 0;
    for (const item of cartItems) {
      totalItems += item.quantity;
    }
    return totalItems;
  };

  const navigate = useNavigate();

  const redirectToCart = () => {
    navigate('/CartPage');
  };

  return (
    <nav>
      <Link to='/'>
      <div className="logo">
        <img src={fan} alt="" />
      </div>
      </Link>

      <div>
        <ul id="navbar" className={clicked ? "active" : ""}>
          <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
          </li>

          <li>
          <NavLink exact activeClassName="active" to="/aboutus">
            About Us
          </NavLink>          
          </li>

          <li>
          <NavLink exact activeClassName="active" to="/sports">
            Sports Articles
          </NavLink>          </li>

          <li>
          <NavLink exact activeClassName="active" to="/events">
            Past Events
          </NavLink>          
          </li>

          <li>
            <Link to="/login">
              <button className='btn'>LogIn</button>
            </Link>
          </li>

           <li>
          <button className="btn" onClick={redirectToCart}>
          <h2><i class="fa-solid fa-cart-shopping"></i> {getTotalItem()}</h2>
          </button>
          </li>
          
        </ul>
      </div>

      <div id="mobile" onClick={handleClick}>
        <i
          id="bar"
          className={clicked ? "fas fa-times" : "fas fa-bars"}
        ></i>
      </div>
    </nav>
  );
};

export default Nav;
