import React from 'react'
import { tvData } from '../data/tv'
import { Link } from 'react-router-dom';


const Tv = () => {
    const fiveImages = tvData.slice(0,5)

  return (
    <div>
        <>
    <h2 className='mobilesheading'>Tv</h2>

      <div className='mobile-card'>
      {
      fiveImages.map((data)=>{
          return(
            <div className='img-div'>
                <img  className='img-img' src={data.image} alt=""  />
            </div>
          )  

        })
      }
    </div>
    </>
      
    </div>
  )
}

export default Tv
