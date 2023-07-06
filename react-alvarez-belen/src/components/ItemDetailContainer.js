import Box from '@mui/material/Box';
import { useNavigate, useParams } from 'react-router-dom';
import Item from './Item';
import { React, useEffect, useState } from 'react';

const ItemDetailContainer = () => {
  const [productos, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const {id} = useParams ()
  
  useEffect (() => {
    setLoading (true);

    const URL= `https://fakestoreapi.com/products/${id}`
    const getCollection = fetch(URL);

    getCollection
    .then ((res) => res.json())
    .then ((res) => {
      setProducts (res.find(product => product.id === id))
      })
    .finally(() => setLoading(false))
  }, [id] );

  return (
   <Box display={'flex'} justifyContent={'center'} flexDirection={'row'} gap={5} flexWrap={'wrap'}>
   <div>
       {
           Boolean(loading)        ?
               <p>cargando...</p>
           :
           productos.map((item) => <Item product={product}  />)
       }
 </div>
</Box>)
};

export default ItemDetailContainer
