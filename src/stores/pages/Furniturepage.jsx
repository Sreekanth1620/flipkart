import React , { useState } from 'react'
import Navbar from '../components/Navbar'
import { furnitureData } from '../data/furniture'
import { useCart } from '../context/CardContext'
import { Link } from 'react-router-dom'

const Furniturepage = () => {
    const [selectedProduct,setSelectedProduct] = useState([])

    const {cartItems,addToCart} = useCart()

    const brandHandler = (mango) =>{
        if (selectedProduct.includes(mango)){
            setSelectedProduct(selectedProduct.filter(item =>item !== mango))
        }else{
            setSelectedProduct([...selectedProduct,mango])
        }

    }
    const filetredproduct = selectedProduct.length ===0?
    furnitureData: furnitureData.filter((orange)=>selectedProduct.includes(orange.brand))

  return (
    <>
     <Navbar/>
     <div className="fullpage">
    
    <div className="proselected">
            {furnitureData.map((phone)=>{
                return(
                    <div className='proinput'>
                        <label>
                            <input type="checkbox"
                            className='inputcheck'
                            checked ={selectedProduct.includes(phone.brand)}
                            onChange={()=>brandHandler(phone.brand)} />
                        {phone.brand}
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
                        <img src={item.image} alt="" />
                        <h3> <span>{item.type}</span></h3>
                        <h4> <span>{item.model}</span></h4>
                        <h5>  <span>{item.price}</span></h5>
                        <Link to={`/furniture/${item.id}`}>
                       <button className='pagebutton'>Product details</button>
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

export default Furniturepage
