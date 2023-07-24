import Box from '@mui/material/Box';
import { useNavigate, useParams } from 'react-router-dom';
import Item from './Item';
import React, { useEffect, useState } from 'react';
import TabsMenu from './Tab';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '..';

const CATEGORIES = [ {id: 'jewelery', title: 'Joyas'}, {id: 'electronics', title: 'Electrónica'}, {id: '', title: 'Todos los productos'}]

const ItemListContainer = () => {
  const [productos, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const { id } = useParams();
  const navigate = useNavigate();

  const current = CATEGORIES.some(cat => cat.id === id)

  useEffect (() => {
    if (!CATEGORIES.some(cat => cat.id === id)) {
      navigate('/products');
    }
  }, [id, navigate])
  
  useEffect (() => {
    const productRef = collection (db, "product")
    if (id === 'all') {
      getDocs(productRef)
      .then((snapshot) => {
          setLoading(false);
          setItems(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
        })
      }
      else if (CATEGORIES.some(categories => categories.id === id) ) {
      const q = query(productRef, where("category", '==', id))

      getDocs(q)
      .then((snapshot) => {
        setItems(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
        setLoading(false);
      })
    }
    
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