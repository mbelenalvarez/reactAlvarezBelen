import React from 'react'

const ProductDetail = ({product}) => {
  return (
    <div style={{ padding: '10px 40px' }}>      
        <img src={product?.image} alt={product?.title} />
        <h2>{product?.title}</h2>
        <h3>{product?.description}</h3>
    </div>
  )
}

export default ProductDetail