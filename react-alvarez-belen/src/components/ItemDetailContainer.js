import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import DetailContainer from './DetailContainer';
import { React, useEffect, useState } from 'react';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  
  const {id} = useParams ()
  
  useEffect (() => {
    setLoading (true);

    const URL= `https://fakestoreapi.com/products/${id}`
    const getCollection = fetch(URL);

    getCollection
    .then ((res) => res.json())
    .then ((res) => {
      setProduct (res)
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
           <DetailContainer product={product} />
       }
 </div>
</Box>)
};

export default ItemDetailContainer