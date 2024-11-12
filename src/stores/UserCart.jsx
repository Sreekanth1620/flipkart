import React from 'react'
import { useCart } from './context/CardContext'
const UserCart = () => {
    const {cartItems,addToCart,removeFromCart} = useCart()
  return (
    <>

    <div>
        <h2 className='yourcart'>Your Cart</h2>
        {cartItems.length ===0 ?
           
           <p className='empty'>Your Cart is Empty</p>
           :
<div>
        
        {cartItems.map((item)=>{
            return(
                <div className='cartsection'>
                    <div className="cartimg">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="cartdetails">
                        <h3>{item.product}</h3>
                        <h2>{item.price}</h2>
                        <h3>{item.model}</h3>

                    </div>
                    <div className="removefromcartbutton">
                        <button onClick={()=>removeFromCart(item)}>Remove from cart</button>
                    </div>
                    </div>
        
            )
        })}
 </div>

      }
    </div>
    </>

  )
}

export default UserCart
