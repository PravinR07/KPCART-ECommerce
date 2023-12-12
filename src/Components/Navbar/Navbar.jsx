import React, { useContext } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <>
      <div className='navbar'>
        <NavLink to='/' style={{textDecoration:'none'}}>
          <div className='nav-logo'>
            <img src={logo} alt='logo' />
            <p>KPCART</p>
          </div>
        </NavLink>
        <div className='nav-menu'>
          <li onClick={() => { setMenu("shop") }}><NavLink to='/' style={{textDecoration:'none'}}>Shop</NavLink>{menu === "shop" ? <hr /> : <></>}</li>
          <li onClick={() => { setMenu("mens") }}><NavLink to='/mens' style={{textDecoration:'none'}}>Men </NavLink>{menu === "mens" ? <hr /> : <></>}</li>
          <li onClick={() => { setMenu("womens") }}><NavLink to='/womens' style={{textDecoration:'none'}}>Women </NavLink>{menu === "womens" ? <hr /> : <></>}</li>
          <li onClick={() => { setMenu("kids") }}><NavLink to='/kids' style={{textDecoration:'none'}}>Kids</NavLink>{menu === "kids" ? <hr /> : <></>}</li>
        </div>
        <div className='nav-login-cart'>
          <NavLink to='/login' style={{textDecoration:'none'}}> <button>Login</button></NavLink>
          <NavLink to='/cart' style={{textDecoration:'none'}}><img src={cart_icon} alt='logo' /></NavLink>
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
      </div>
    </>
  )
}

export default Navbar