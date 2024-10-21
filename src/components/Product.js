import React from 'react'

function Product({product}) {
    // console.log(props)
    const {image,title,price,rating}=product
  return (
    <div className='product'>
      <img src={image} alt="img"/>
      <h3>{title}</h3>
      <p>{rating.rate} rating</p>
      <p>price {price}</p>
    </div>
  )
}

export default Product
