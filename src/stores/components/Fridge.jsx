import React from 'react'
import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom';


const Fridge = () => {
    const fiveImages = fridgeData.slice(0,5)
  return (
    <div>
          <>
          <Link to='fridge'>

    <h2 className='mobilesheading'>Fridge</h2>
    </Link>

      <div className='mobile-card'>
      {
      fiveImages.map((data)=>{
          return(
            <Link to={`/fridge/${data.id}`}>

            <div className='img-div'>
                <img  className='img-img' src={data.image} alt=""  />
            </div>
                                   </Link>

          )  

        })
      }
    </div>
    </>
      
    </div>
  )
}

export default Fridge
