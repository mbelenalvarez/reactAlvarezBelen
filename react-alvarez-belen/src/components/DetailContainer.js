import React from 'react'
import ItemCount from './ItemCount';
import { AppContext } from '../context/AppContext';

const { addProductToCarrito } = React.useContext(AppContext);

const ProductDetail = ({product}) => {

  const addToCarrito = (quantity) => {
    addProductToCarrito({
      id: id,
      title: title,
      pricePerUnit: price,
      quantity: quantity,
      imageURL: imageURL
    })
  };
  
  return (
    <div style={{ padding: '10px 40px' }}>      
        <img src={product?.image} alt={product?.title} />
        <h2>{product?.title}</h2>
        <h3>{product?.description}</h3>
        <ItemCount 
        stock={product?.stock || 0} addToCarrito={addToCarrito}
       />
    </div>
  )
}

export default ProductDetail