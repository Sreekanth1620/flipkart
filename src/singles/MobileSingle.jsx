import React from 'react'
import { mobileData } from '../stores/data/mobiles'
import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'
import { useCart } from '../stores/context/CardContext'

const MobileSingle = () => {
const {id} = useParams()
const products = mobileData.find((item)=>item.id === id)

const {cartItems,addToCart} = useCart()

 
  return (
   <>
   <Navbar/>
   <div className="singlepage">
    <img src={products.image} alt="" />
    <div className="singleproduct">
        <span><h2>{products.company}</h2></span>
        <h5>{products.model}</h5>
        <h3>{products.price}</h3>
        <h2>{products.category}</h2>
        <h5>{products.description}</h5>

        <button onClick={()=>addToCart(products)} className='singlebutton'>Add to Cart</button>
    </div>
   </div>
   </>
  )
}

export default MobileSingle
