import React from 'react'
import "./product.css"
// import Size from './size'

const Product = (props) => {
    const {desc,image,price,strickedoffprice } = props
     let s = strickedoffprice.split(',').join('')
     let s1 = s.substring(1)
     let discount = (+s1)-(+price)
    
  return (
    <div className='main__prod__container'>
        <div className='prod__desc'>
            <div>
                <p>{desc}</p>
                <div className='inline'><h1>₹{price}</h1><p><s>{strickedoffprice}</s></p></div>
                <p>You saved ₹{discount}!</p>
            </div>
            <div>
                <img src={image} alt="prod" />
            </div>
        </div>
        <div>
            {/* <Size/> */}
        </div>
        <div className='move__remove'>
            <button>Remove</button>
            <button>Move to Wishlist</button>
        </div>
    </div>
  )
}

export default Product