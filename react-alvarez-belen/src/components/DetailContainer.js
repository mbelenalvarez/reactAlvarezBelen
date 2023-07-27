import React from 'react'
import ItemCount from './ItemCount';
import { AppContext } from '../context/AppContext';

const ProductDetail = ({product}) => {

  const { addProductToCarrito } = React.useContext(AppContext);

  const addToCarrito = (quantity) => {
    addProductToCarrito({
      id: product.id,
      title: product.title,
      pricePerUnit: product.price,
      quantity: quantity,
      imageURL: product.image
    });
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