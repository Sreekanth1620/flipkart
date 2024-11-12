import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CardContext'

const Mobilepage = () => {
    const [selectedProduct,setSelectedProduct] = useState([])

    const {cartItems,addToCart} = useCart()

    const companyHandler = (mango) =>{
        if (selectedProduct.includes(mango)){
            setSelectedProduct(selectedProduct.filter(item =>item !== mango))
        }else{
            setSelectedProduct([...selectedProduct,mango])
        }

    }
    const filetredproduct = selectedProduct.length ===0?
    mobileData: mobileData.filter((orange)=>selectedProduct.includes(orange.company))
  return (
    <>
    <Navbar/>
<div className="fullpage">
    
<div className="proselected">
        {mobileData.map((phone)=>{
            return(
                <div className='proinput'>
                    <label>
                        <input type="checkbox"
                        checked ={selectedProduct.includes(phone.company)}
                        onChange={()=>companyHandler(phone.company)} />
                    {phone.company}
                    </label>
                </div>
            )
        })}
    </div>
   <div className='Pagesection'> 
       {
        filetredproduct.map((item)=>{
               return(
                   <div className='pagecard'>
                                           <Link to={`/mobile/${item.id}`}>

                       <img src={item.image} alt="" />
                       <h3> <span>{item.company}</span></h3>
                       <h4> <span>{item.model}</span></h4>
                       <h5>  <span>{item.price}</span></h5>
                       <Link to={`/mobile/${item.id}`}>
                       <button className='pagebutton'>Product details</button>
                       </Link>
                       </Link>
                       <button  className ="addtocartbutton"onClick={()=>addToCart(item)}>Add to cart</button>

                   </div>
               )
           })
       }
     
   </div>
</div>

   </>
  )
}

export default Mobilepage
