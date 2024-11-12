import React from 'react'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom';


const Mobiles = () => {
  const fiveImages = mobileData.slice(0,5)
  return (
    <>
                           <Link to='/mobiles'>

    <h2 className='mobilesheading'>Mobiles
      
    </h2>
    </Link>

    <div className='mobile-card'>
      {
      fiveImages.map((data)=>{
          return(
            <Link to={`/mobile/${data.id}`}>

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

export default Mobiles
