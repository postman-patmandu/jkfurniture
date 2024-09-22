import React from 'react'

const Stock = ({ product }) => {
  return (
    <div className='mb-1'>
        {product.countInStock > 0 ? (
            <p className='mb-0'>In Stock</p>
        ) : (
            <p className='mb-0 text-danger'><strong>Out of Stock</strong></p>
        )}
    </div>
  )
}

export default Stock;