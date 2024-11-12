import React from 'react'
import { booksData } from '../data/books'
import { Link } from 'react-router-dom';


const Books = () => {
    const fiveImages = booksData.slice(0,5)

  return (
    <div>
                              <Link to='/books'>

        <h2 className='mobilesheading'>Books</h2>
        </Link>

        <div className='mobile-card'>
      {
      fiveImages.map((data)=>{
          return(
            <Link to={`/books/${data.id}`}>

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

export default Books
