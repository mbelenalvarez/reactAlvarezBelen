import { useParams } from 'react-router-dom';
import DetailContainer from './DetailContainer';
import { React, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '..';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  console.log(product);
  
  const {id} = useParams ()
  
  useEffect (() => {
   
    const docRef = doc (db, "product", id);

    getDoc(docRef)
    .then((resp) => {
      setProduct ({...resp.data, id:resp.id});
    })
  }, [id] );

  return (
   <div>
       { product && <DetailContainer product={product} />
       }
 </div>
)

};

export default ItemDetailContainer