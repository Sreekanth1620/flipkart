import React ,{useState} from 'react'
import Navbar from '../components/Navbar'
import { booksData } from '../data/books'
import { useCart } from '../context/CardContext'
import { Link } from 'react-router-dom'


const Bookspage = () => {
    const [selectedProduct,setSelectedProduct] = useState([])

    const {cartItems,addToCart} = useCart()

    const authorHandler = (mango) =>{
        if (selectedProduct.includes(mango)){
            setSelectedProduct(selectedProduct.filter(item =>item !== mango))
        }else{
            setSelectedProduct([...selectedProduct,mango])
        }

    }
    const filetredproduct = selectedProduct.length ===0?
    booksData: booksData.filter((orange)=>selectedProduct.includes(orange.author))
  return (
    <>
     <Navbar/>
     <div className="fullpage">
    
    <div className="proselected">
            {booksData.map((phone)=>{
                return(
                    <div className='proinput'>
                        <label>
                            <input type="checkbox"
                            checked ={selectedProduct.includes(phone.author)}
                            onChange={()=>authorHandler(phone.author)} />
                        {phone.author}
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
                        <h3> <span>{item.title}</span></h3>
                        <h4> <span>{item.author}</span></h4>
                        <h5>  <span>{item.price}</span></h5>
                        <Link to={`/books/${item.id}`}>
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

export default Bookspage
