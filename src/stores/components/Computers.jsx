import React from 'react'
import { computerData } from '../data/computers'
import { Link } from 'react-router-dom';


const Computers = () => {
    const fiveImages = computerData.slice(0,5)

  return (
    <>
                            <Link to='computers'>

    <h2 className='mobilesheading'>Computers</h2>
    </Link>

      <div className='mobile-card'>
      {
      fiveImages.map((data)=>{
          return(
            <Link to={`/computers/${data.id}`}>

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

export default Computers
