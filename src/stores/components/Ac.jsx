import React from 'react'
import { Link } from 'react-router-dom';

import { acData } from "../data/ac";

const Ac = () => {
    const fiveImages = acData.slice(0,5)
    

  return (
    <div>
                              <Link to='/mobiles'>

        <h2 className='mobilesheading'>Ac</h2>
        </Link>

        <div className='mobile-card'>
      {
      fiveImages.map((data)=>{
          return(
            <Link to={`/ac/${data.id}`}>

            <div className='img-div'>
                <img  className='img-img' src={data.image} alt=""  />
            </div>
            </Link>

          )  

        })
      }
    </div>
      
    </div>
  )
}

export default Ac
