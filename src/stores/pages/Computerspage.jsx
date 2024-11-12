import React , { useState } from 'react'
import Navbar from '../components/Navbar'
import { computerData } from '../data/computers'
import { useCart } from '../context/CardContext'
import { Link } from 'react-router-dom'

const Computerspage = () => {
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
    computerData: computerData.filter((orange)=>selectedProduct.includes(orange.company))
  return (
    <>
     <Navbar/>
     <div className="fullpage">
    
    <div className="proselected">
            {computerData.map((phone)=>{
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
                        <img src={item.image} alt="" />
                        <h3> <span>{item.company}</span></h3>
                        <h4> <span>{item.model}</span></h4>
                        <h5>  <span>{item.price}</span></h5>
                        <Link to={`/computers/${item.id}`}>
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

export default Computerspage

