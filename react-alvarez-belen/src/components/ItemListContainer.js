import Box from '@mui/material/Box';
import { useNavigate, useParams } from 'react-router-dom';
import Item from './Item';
import React, { useEffect, useState } from 'react';
import TabsMenu from './Tab';

const CATEGORIES = [{id: 'all', title: 'Todos los productos'}, {id: 'jewelery', title: 'Joyas'}, {id: 'electronics', title: 'Electrónica'}]

const ItemListContainer = () => {
  const [productos, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const { id } = useParams();
  const navigate = useNavigate();

  const current = CATEGORIES.some(cat => cat.id === id) ? id : 'all';

  useEffect (() => {
    if (!CATEGORIES.some(cat => cat.id === id)) {
      navigate('/products/all');
    }
  }, [id, navigate])
  
  useEffect (() => {
    setLoading (true);

    const URL= id ? `https://fakestoreapi.com/products/${id}` : `https://fakestoreapi.com/products/`
    const getCollection = fetch(URL);

    getCollection
    .then ((res) => res.json())
    .then ((res) => {
      const data = res.results?.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image
      }))
      setProducts(data);
      setLoading (true);
    })
    .finally(() => setLoading(false))
  }, [id] );



  return (
   <Box display={'flex'} justifyContent={'center'} flexDirection={'row'} gap={5} flexWrap={'wrap'}>
    <div>
      <TabsMenu current={current} items={CATEGORIES} /> 
    </div>
   <div>
       {
           Boolean(loading)        ?
               <p>cargando...</p>
           :
           productos.map((item) => <Item data={item}  />)
       }
 </div>
</Box>)}

export default ItemListContainer
