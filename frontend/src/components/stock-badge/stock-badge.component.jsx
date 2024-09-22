import React from 'react'

const StockBadge = ({product}) => {
  return (
    <div className='stock-badge position-absolute top-3 end-0 px-3 py-1'>
        {product.countInStock > 0 ? (
            <p className='mb-0'>In Stock</p>
        ) : (
            <p className='mb-0'>Out of Stock</p>
        )}
    </div>
  )
}

export default StockBadge;