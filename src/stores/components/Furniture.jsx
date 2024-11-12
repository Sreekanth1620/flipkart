import React from 'react'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom';


const Furniture = () => {
    const fiveImages = furnitureData.slice(0,5)

  return (
    <div>
          <>
          <Link to='/furniture'>

    <h2 className='mobilesheading'>Furniture</h2>
    </Link>

      <div className='mobile-card'>
      {
      fiveImages.map((data)=>{
          return(
            <Link to={`/furniture/${data.id}`}>

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

export default Furniture
