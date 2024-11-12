import React from 'react'
import { womanData } from '../data/woman'
import { Link } from 'react-router-dom';

const Women = () => {
    const fiveImages = womanData.slice(0,5)

  return (
    <>
                            <Link to='/womens'>

    <h2 className='mobilesheading'>Women</h2>
    </Link>

      <div className='mobile-card'>
      {
      fiveImages.map((data)=>{
          return(
            <Link to={`/womens/${data.id}`}>

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

export default Women
