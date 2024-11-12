import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CardContext'

const Navbar = () => {
  const {cartItems} = useCart()
  return (
    <>
    <div className='nav-container'>
        <div className="navbarlogo">
<img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />
        </div>
        <div className="nav-input">
            <input type="text" placeholder='  search For Products,Brands and More' />

        </div>
        <div className="navlogin">
          <button><span> <i class="bi bi-person-circle"></i> </span>Login</button>
        </div>
        <Link to='/cart'>
        <div className="nav-cart">
            <h3><span><i class="bi bi-cart"></i></span>Cart <span>{cartItems.length}</span></h3>
        </div>
        </Link>
        
      
    </div>
    <div className="submenu">
        <ul className='submenulist'>
        <Link to='/mobiles'> 

            <li>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/6c22d4999cdb4144.jpg?q=100" alt="" />
             <span> Mobiles </span></li>
            </Link>
          <Link  to='/ac'><li>
            <img src="https://th.bing.com/th?id=OIP.CHBYP-31CX2C0Wq__Kd-RAHaEF&w=336&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
            <span>Ac</span></li>          </Link>

          <Link to='/books'>
          
          <li>
            <img src="https://th.bing.com/th/id/OIP.zSJVfykloXtKah1i2i1V8QHaE8?w=285&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            <span>Books </span></li></Link>
          <Link  to='/computer'>
          <li>
            <img src="https://th.bing.com/th?id=OIP.o_23pifDkX7hTNH6hnW4HAAAAA&w=308&h=202&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
            <span> Computers </span></li></Link>
          <Link  to='/fridge'>
          <li>
            <img src="https://th.bing.com/th/id/OIP.RZrBWFBDyZW-EzLfwyj6kAHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /><span>Fridge</span></li></Link>
          <Link  to='/furniture'>
          <li>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/e7947cc0cc4a6b7c.jpg?q=100" alt="" />
           <span> Furniture </span></li></Link>
          <Link  to='/men'>
          <li>
            
            <img src="https://th.bing.com/th?id=OIP.5tGuXDdxK7hBzwOWkUEMMAHaJW&w=222&h=281&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" /><span>Men </span></li></Link>
          <Link  to='/womens'>
          <li
          >
            <img src="https://th.bing.com/th?id=OIP.MIgg-RN5ORZabX5-h5YgqQHaJP&w=223&h=279&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" /><span>Women </span></li></Link>
        </ul>
      </div>
    </>

  )
}

export default Navbar
