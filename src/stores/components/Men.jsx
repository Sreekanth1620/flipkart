import React from 'react'
import { menData } from '../data/men'
import { Link } from 'react-router-dom';


const Men = () => {
    const fiveImages = menData.slice(0,5)

  return (
    <>
                            <Link to='/mens'>

    <h2 className='mobilesheading'>Mens</h2>
    </Link>

      <div className='mobile-card'>
      {
      fiveImages.map((data)=>{
          return(
            <Link to={`/mens/${data.id}`}>

            <div className='img-div'>
                <img  className='img-img' src={data.image} alt=""  />
            </div>
                                   </Link>

          )  

        })
      }
    </div>
    </>
    
  )
}

export default Men
