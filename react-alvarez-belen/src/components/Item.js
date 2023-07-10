import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

const Item = ({ data }) => {
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
      </Card>
    </div>
  );
};

export default Item; 

