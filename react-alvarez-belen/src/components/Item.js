import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { AppContext } from '../context/AppContext';

const Item = ({ data }) => {

  const {id, title, image, stock, price} = data;

  const { addProductToCarrito } = React.useContext(AppContext);

  const addToCarrito = (quantity) => {
    addProductToCarrito({
      id: id,
      title: title,
      pricePerUnit: price,
      quantity: quantity,
      imageURL: image
    })
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          src={data.image}
          alt={data.title}
        />
        <CardContent>
          <Typography>{data.title}</Typography>
          <Typography>Price: ${data.price}</Typography>
          <Link className='btn btn-primary' to={`/product/${data.id}`}> View details </Link>
        </CardContent>
        <CardActions>
        <ItemCount stock={stock} addToCarrito={addToCarrito} />
      </CardActions>
      </Card>
    </div>
  );
};

export default Item; 

