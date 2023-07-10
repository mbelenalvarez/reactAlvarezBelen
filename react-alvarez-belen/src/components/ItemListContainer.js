import Box from '@mui/material/Box';
import { useNavigate, useParams } from 'react-router-dom';
import Item from './Item';
import React, { useEffect, useState } from 'react';
import TabsMenu from './Tab';

const CATEGORIES = [ {id: 'jewelery', title: 'Joyas'}, {id: 'electronics', title: 'Electrónica'}]

const ItemListContainer = () => {
  const [productos, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const { id } = useParams();
  const navigate = useNavigate();

  const current = CATEGORIES.some(cat => cat.id === id) ? id : "";

  useEffect (() => {
    if (!CATEGORIES.some(cat => cat.id === id)) {
      navigate('/products');
    }
  }, [id, navigate])
  
  useEffect (() => {
    setLoading (true);

    const URL=  `https://fakestoreapi.com/products/`
    const getCollection = fetch(URL);

    getCollection
    .then ((res) => res.json())
    .then ((res) => {
      if(id){
        
        setProducts(res.filter((item)=> item.category === id));
        setLoading (true);
      }else{
    
        setProducts(res);
        setLoading (true);
      }
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
            productos.map((item) => <Item data={item} key={item.id} />)
        }
  </div>
 </Box>)}

export default ItemListContainer
