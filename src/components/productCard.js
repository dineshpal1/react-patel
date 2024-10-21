import React from 'react'
import Product from './Product'
import { productsFromApi } from '../productsFromApi'
function productCard() {
  return (
    <div className='product-card'>
        {
          productsFromApi.map((product,index)=>{
            return(
                <Product key={product.id} product={product}/>
            )
          })  
        }
     
     
     
      
    </div>
  )
}

export default productCard
